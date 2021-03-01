const { schema } = require('@uniswap/token-lists');
const jsonList = require('./bamboodefi.tokenlist.json');
const Ajv = require("ajv");
const ajv = new Ajv({allErrors: true});

const validate = ajv.compile(schema);
const valid = validate(jsonList);
if (!valid){
    console.log(validate.errors)
}else{
    console.log('JSON OK');
}


