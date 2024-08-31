class currencyappllc{
    constructor(){
        this.api = "https://api.currencyappllc.com/v1"
        this.headers={"Accept-Encoding":"gzip","Connection":"Keep-Alive","Host":"api.currencyappllc.com","User-Agent":"okhttp/4.9.3"}
    }
    async latest_currency(){
        let req=await fetch(`${this.api}/latest`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {currencyappllc};