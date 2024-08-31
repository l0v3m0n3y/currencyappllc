# currencyappllc
JavaScript library for currencyappllc.com
# main
```js
async function main(){
    const {currencyappllc} = require('./currencyappllc');
    const currency= new currencyappllc();
    let req=await currency.latest_currency()
    console.log(req)
}
main()
```
