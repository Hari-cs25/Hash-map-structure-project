const Hash = ()=>{
    capacity = 16;
    butket = new Array(16);
    loadFactor;

    function hash(key){
        key = key.split('');
        let hashCode = 0;
        const primeNumber = 31;

        for(let i =0; i< key.length; ++i){
            hashCode = primeNumber*hashCode+key.charCodeAt(i);
        }
        return hashCode;
    }

    function set(key, value){

    }

    return {};
}