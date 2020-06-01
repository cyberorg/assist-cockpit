# assist-cockpit
Remote support module

Requires <strong>x11vnc</strong> installed on the client.

```console
#Automatic install
wget -O - https://raw.githubusercontent.com/cyberorg/assist-cockpit/master/install.sh | sudo bash

#Manual install after git checkout
cp -r assist /usr/share/cockpit/
```

Run `vncviewer -listen` on the server for client to connect.
