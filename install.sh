#!/bin/bash

if [[ $EUID -ne 0 ]]; then
   echo -e "This script must be run as root"
   exit
fi
mkdir -p /usr/share/cockpit/assist
for i in index.html manifest.json network.css.gz assist.js; do
	wget -c https://raw.githubusercontent.com/cyberorg/assist-cockpit/master/assist/$i -O /usr/share/cockpit/assist/$i
done
echo -e "Cockpit Assist plugin installed"
