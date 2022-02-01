#!/bin/bash
MONGO_URL=mongodb://localhost/nasa-project PORT=1341 npm run server >>server.log 2>&1 < /dev/null &
NODE_OPTIONS=--openssl-legacy-provider PORT=1339 npm run client >>client.log 2>&1 < /dev/null &
tail -f client.log
