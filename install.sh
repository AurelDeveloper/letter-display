#!/bin/bash

sudo apt-get update

sudo apt-get install -y python3 python3-pip

git clone https://github.com/AurelDeveloper/LetterDisplay.git
cd LetterDisplay

pip3 install -r requirements.txt

chmod +x modules/schedule.py

(crontab -l 2>/dev/null; echo "*/10 * * * * cd /path/to/your/project/modules && python3 schedule.py") | crontab -