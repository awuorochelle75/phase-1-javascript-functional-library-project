function myEach(collection,alert){
    let values;
    
    if(Array.isArray(collection)){
        values = collection;
    } else {
        values=Object.values(collection);
    }

    for(let i =0;i < values.length;i++){
        alert(values[i]);
    }

    return collection;

    }

function myMap(collection,callback){
    let values;
    let newCollection=[]
    
        if(Array.isArray(collection)){
            values = collection;
        } else {
            values=Object.values(collection);
        }
    
        for(let i =0;i < values.length;i++){
            newCollection.push(callback(values[i]));
        }
    
        return newCollection;

    }

function myReduce(collection,callback,acc){
    let values;

    if(Array.isArray(collection)){
        values = collection;
    } else {
        values=Object.values(collection);
    }

    for(let i =0;i < values.length;i++){
        alert(values[i]);
    }

    let i = 0;

    if(acc === undefined){
        acc = values[0];
        i = 1;
    }

    for(; i < values.length; i++){
        acc = callback(acc,values[i],collection);

    }

    return acc;

}

function myFind(collection,predicate){
    let values;

    if(Array.isArray(collection)){
        values = collection;
    } else {
        values=Object.values(collection);
    }

    for(let i =0;i < values.length;i++){
       if( predicate(values[i])){
            return values[i]

       }
       
    }

    return undefined;

}

function myFilter(collection,predicate){
    let values;
    let newCollection=[]

    if(Array.isArray(collection)){
        values = collection;
    } else {
        values=Object.values(collection);
    }

    for(let i =0;i < values.length;i++){
       if( predicate(values[i])){
            newCollection.push(values[i])

       }
       
    }
    return newCollection;

}

function mySize(collection){
    let values;

    if(Array.isArray(collection)){
        values = collection;
    } else {
        values=Object.values(collection);
    }

    return values.length

}

function myFirst(array,n){
    if(n === undefined){
        return array[0]
    }else {
        return array.slice(0,n)
    }

}

function myLast(array,n){
    if(n === undefined){
        return array[array.length - 1]
    }else {
        return array.slice(-n)
    }
}

function myKeys(obj){
    return  Object.keys(obj);
}

function myValues(obj){
    return Object.values(obj);
}