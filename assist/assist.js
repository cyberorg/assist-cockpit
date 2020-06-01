const AS_SERVER = document.getElementById("AS_SERVER");
const AS_PORT = document.getElementById("AS_PORT");
const output = document.getElementById("output");
const result = document.getElementById("result");
const asapply = document.getElementById("asapply");
const asdiscon = document.getElementById("asdiscon");

function asdiscon_run() {
    cockpit.spawn(["pkill", "-USR1", "x11vnc"], {
        superuser: true
    });
}

function assist_run() {
    cockpit.spawn(["nohup", "x11vnc", "-auth", "/var/run/lightdm/root/:0", "-q", "-nopw", "-connect_or_exit", AS_SERVER.value + ":" + AS_PORT.value], {
            superuser: true
        })
        .stream(assist_output)
        .then(assist_success)
        .catch(assist_fail);
    document.getElementById("asapply").value = "Connected";
    result.innerHTML = "";
    output.innerHTML = "";
}

function assist_success() {
    result.style.color = "green";
    result.innerHTML = "success";
    document.getElementById("asapply").value = "Connect";
}

function assist_fail() {
    result.style.color = "red";
    result.innerHTML = "";
    document.getElementById("asapply").value = "Connect";
}

function assist_output(data) {
    output.append(document.createTextNode(data));
}

// Connect the button to starting the remote assist process
asapply.addEventListener("click", assist_run);
//Disconnect
asdiscon.addEventListener("click", asdiscon_run);

// Send a 'init' message.  This tells integration tests that we are ready to go
cockpit.transport.wait(function() {});
