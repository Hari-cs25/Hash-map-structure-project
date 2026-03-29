const Hash = ()=>{ 
    let capacity = 16; 
    let buckets = new Array(16); 
    let loadFactor = 0; 
    let noKeys=0;
    let noKeyVals =0;
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

                if(buckets[index] === undefined || buckets[index].length < 1){ 
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
                    ++noKeys;
                    loadFactor = noKeys / capacity;
                    console.log('load factor after added key in link: ', loadFactor);
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
        
        function has(key){
            for(let arr of buckets){
                if(!arr)
                    continue;
            for(let inarr of arr){
                    if(inarr[0] === key)
                        return true;
                }
            }
        return false;
        }
        
  function remove(key){
    if(!has(key))
      return false;
    else{
      for(let arr of buckets){
        if(!arr)
          continue;
      for(let i=0; i<arr.length; ++i){
          if(arr[i][0] === key){
             arr.splice(i,1);
             --noKeys;
             return true;
          }
        }
      }
    }
  }
  
  function show(){
      return buckets;
  }
  
  function length(){
      return noKeys;
  }
  
  function clear(){
      buckets.length =0;
      noKeys =0;
  }
  
  function keys(){
      let array =[];
      
      if(buckets.length < 1)
        return;
        
      for(let arr of buckets){
          if(!arr)
            continue;
        for(let inarr of arr){
            if(inarr[0])
                array.push(inarr[0]);
        }
      }
      return array;
  }
  
  function values(){
      const Keys = keys();
      let values=[];
      
      if(Keys === undefined)
        return undefined;
        
      for(let key of Keys)
          values.push(get(key));
          
      return values;
  }
  
  function entries(){
      const key = keys()
      const value = values()
      let entries =[];
      
      for(let i=0; i<key.length; ++i){
          entries.push([key[i], value[i]]);
      }
      return entries;
  }
  
   function ReboundHash(){
     console.log('rebound hash function runss..');
     console.log('load factor: ', loadFactor);
     capacity = capacity * 2;
     let temp = new Array(capacity);
     let entries = entries();
     
     for(let arr of entries){
         
        let index = has(arr[0]) % capacity;
        if(temp[index] === undefined || temp[index].length < 1){
        temp[index] = [arr[0], arr[1]];
        }else{
            
        for(let arr2 of temp[index]){ 
            if(arr2[0] === arr[0]){
               arr2[1] = arr[1];
                match = true;
                break;
                }
           } 
         if(match === false)
            temp[index].push([arr[0], arr[1]]); 
                }
         }
         buckets = new Array(capacity);
         buckets = temp;
   }; 
         
     return {show, set, get, has, remove, length, clear, keys, values, entries};
        };

const hashmap = Hash();

hashmap.set('crow', 'black');
hashmap.set('cow', 'white');
console.log(hashmap.get('cow'))
console.log(hashmap.get('dog'))
console.log("crow existence in hsahmap: ",hashmap.has('crow')); 
console.log("cow existence in hsahmap: ",hashmap.has('cow'));
console.log("dog existence in hsahmap: ",hashmap.has('dog'));
console.log('before: ',hashmap.show())
console.log(hashmap.remove('cow'));
console.log(hashmap.remove('dog'));
console.log(hashmap.remove('crow'));
console.log(hashmap.remove('cow'));
console.log('after: ', hashmap.show())
console.log('current length: ',hashmap.length())
hashmap.set('elephand', 'black')
console.log('current length: ',hashmap.length())
hashmap.set('swan', 'white')
console.log('current length: ',hashmap.length())
hashmap.set('dog','white')
hashmap.set('human','brown')
hashmap.set('fish', 'gray')
console.log(hashmap.show())

console.log('current length: ',hashmap.length())
//hashmap.clear();
hashmap.set('dol', 'white')
hashmap.set('dol2', 'black')
hashmap.set('dol3', 'white')
hashmap.set('dol4', 'white')
hashmap.set('dol5', 'white')
hashmap.set('dol6', 'white')
hashmap.set('dol7', 'white')
hashmap.set('dol8', 'white')

console.log(hashmap.show())

console.log('current length: ',hashmap.length())
console.log('keys are: ', hashmap.keys())
console.log('values are: ', hashmap.values())
console.log(hashmap.entries());
