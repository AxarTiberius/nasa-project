#!/bin/bash
MONGO_URL=mongodb://localhost/nasa-project PORT=1341 npm run server &
NODE_OPTIONS=--openssl-legacy-provider PORT=1339 npm run client &

