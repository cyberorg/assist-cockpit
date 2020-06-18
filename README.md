# assist-cockpit
Remote support module

Requires <strong>x11vnc</strong> installed and <strong>lightdm</strong> running or <strong>socat</strong> and <strong>screen</strong> installed on the client.

```console
#Automatic install
wget -O - https://raw.githubusercontent.com/cyberorg/assist-cockpit/master/install.sh | sudo bash

#Manual install after git checkout
cp -r assist /usr/share/cockpit/
```

Run `vncviewer -listen` in a desktop session for GUI or `socat tcp-listen:5500,keepalive=1 stdio,raw,echo=0` on the server for a client to connect, server needs IP or FQDN reachable by the clients.
