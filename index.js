const { stringify } = require('ajv');
const fs = require('fs');
const json = require('./bamboodefi.tokenlist.json');

// Put timestamp
const timestamp = new Date().toISOString();
// If you needs to change another field from JSON you can do it an add it as the example of timestamp
fs.writeFileSync('./bamboodefi.tokenlist.json', stringify({...json, timestamp}), 'utf-8');

