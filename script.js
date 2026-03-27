const Hash = ()=>{ 
    let capacity = 16; 
    let buckets = new Array(16); 
    let loadFactor = 0; 
    let noKeys=0;
console.log('load factor at begining ->', loadFactor)
    
    function hash(key){ 
       
 console.log('key:',key);
        let hashCode = 0; 
        const primeNumber = 31; 

        for(let i =0; i< key.length; ++i){
             hashCode = primeNumber*hashCode+key.charCodeAt(i); 
            }
         return hashCode;
         } 

         function set(key, value){ 

            if(loadFactor >= 0.75){ 
console.log('load factor triggered!')
console.log('load factor ->', loadFactor)
                ReboundHash(); 
            } 
            
            let hashCode = hash(key);
            let index = hashCode % capacity; 
            let match = false;

             if(index < 0 || index >= buckets.length)
                 throw new Error('Index out if bound!'); 

                if(buckets[index] === undefined){ 
                    buckets[index]=[[key, value]];
                    ++noKeys;
                    loadFactor = noKeys / capacity; 
console.log('load factor after increament ->', loadFactor);
                    }else{
                         for(let arr of buckets[index]){ 
                            if(arr[0] === key){
                                arr[1] = value;
                                match = true;
                                break;
                            }
                          } 
                          if(match === false)
                            buckets[index].push([key, value]); 
                        }
            }

        function get(key){
            for(let arr of buckets){
                if(!arr)
                    continue;

                for(let inarr of arr){
                    if(inarr[0] === key){
                        return inarr[1];
                    }
                }
            }
            return null;
        }             

        function ReboundHash(){
            let temp = buckets;
            buckets = new Array(capacity * 2);
            capacity = capacity * 2;

            for(let i=0; i<temp.length; ++i){

            }

         }; 
            return {set, get};
        };

const hashmap = Hash();

hashmap.set('crow', 'black');
hashmap.set('cow', 'white');
console.log(hashmap.get('cow'))
console.log(hashmap.get('dog'))