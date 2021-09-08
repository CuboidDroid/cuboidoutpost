#!/bin/bash
set -euo pipefail

# check for serverstarter jar
if [[ -f serverstarter-2.0.1.jar ]]; then
    echo "Skipping download. Using existing serverstarter-2.0.1.jar"
    java -jar serverstarter-2.0.1.jar
    exit 0
else
    # download missing serverstarter jar
    URL="https://github.com/AllTheMods/alltheservers/releases/download/2.0.1/serverstarter-2.0.1.jar"

    if command -v wget &> /dev/null; then
        echo "DEBUG: (wget) Downloading ${URL}"
        wget -O serverstarter-2.0.1.jar "${URL}"
    elif command -v curl &> /dev/null; then
        echo "DEBUG: (curl) Downloading ${URL}"
        curl -o serverstarter-2.0.1.jar "${URL}"
    else
        echo "Neither wget or curl were found on your system. Please install one and try again"
        exit 1
    fi
fi

java -jar serverstarter-2.0.1.jar