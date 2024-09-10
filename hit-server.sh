#!/bin/bash

URL="http://localhost:3011"
NUM_REQUESTS=10

for i in $(seq 1 $NUM_REQUESTS)
do
    echo "Sending request $i to $URL"
    curl -s $URL > /dev/null
done
