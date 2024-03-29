#!/bin/bash

source ./.env.local

python3 ./modules/fetcher.py
python3 ./modules/processor.py
./modules/storage.sh