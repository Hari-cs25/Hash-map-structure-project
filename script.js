const HashMap = ()=>{ 
    let capacity = 16; 
    let buckets = new Array(16); 
    let loadFactor = 0; 
    let noKeys=0;
    let noKeyVals =0;

    function hash(key){ 
        let hashCode = 0; 
        const primeNumber = 31; 

        for(let i =0; i< key.length; ++i){
             hashCode = primeNumber*hashCode+key.charCodeAt(i); 
            }
         return hashCode;
         } 

         function set(key, value){ 

            let hashCode = hash(key);
            let index = hashCode % capacity; 
            let match = false;

             if(index < 0 || index >= buckets.length)
                 throw new Error('Index out if bound!'); 

                if(buckets[index] === undefined || buckets[index].length < 1){ 
                    buckets[index]=[[key, value]];
                    ++noKeys;
                    loadFactor = noKeys / capacity; 
                     if(loadFactor > 0.75)
                        ReboundHash();
                    }else{
                         for(let arr of buckets[index]){ 
                            if(arr[0] === key){
                                arr[1] = value;
                                match = true;
                                break;
                            }
                          } 
                          if(match === false){
                             buckets[index].push([key, value]); 
                             ++noKeys;
                             loadFactor = noKeys / capacity;
                             if(loadFactor > 0.75)
                                ReboundHash();
                          }  
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
            if(inarr[0]){
                array.push(inarr[0]);
            }
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
     capacity = capacity * 2;
     let temp = new Array(capacity);
     let Entries = entries();
     
     for(let arr of Entries){
         let match = false;
         let hashCode = hash(arr[0]);
        let index = hashCode % capacity;

        if(temp[index] === undefined || temp[index].length < 1){

            temp[index] = [[arr[0], arr[1]]];
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
         buckets.length = 0;
         buckets = new Array(capacity);
         buckets = temp;
   }; 
         
     return {show, set, get, has, remove, length, clear, keys, values, entries};
 };

module.exports = HashMap;