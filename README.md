# assist-cockpit
Remote support module

Requires <strong>x11vnc</strong> installed and <strong>lightdm</strong> running on the client.

```console
#Automatic install
wget -O - https://raw.githubusercontent.com/cyberorg/assist-cockpit/master/install.sh | sudo bash

#Manual install after git checkout
cp -r assist /usr/share/cockpit/
```

Run `vncviewer -listen` on the server for client to connect, server needs IP or FQDN reachable by the clients.
