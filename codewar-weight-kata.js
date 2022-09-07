function orderWeight(strng) {
    // your code
    // ste a variable to store the object of weight and its sum
    let newString = []

    // convert the string to an array
    const stringArray = strng.split(' ')

    // loop through the converted array to create an object of weigth/sum pairs
    for (let i of stringArray){
        let value = 0;
        for(let j of i){
            value += +j; 
        }
        newString.push({'key':i, 'value': value})
        
    }
   
    // sort the new array of objects by the value 
    const sorted = newString.sort((a,b) => {
        // check if the value are equal, if so return key, else sort by value
        return (a.value > b.value) ? 1 : (a.value == b.value) ? a.key.localeCompare(b.key) : -1})
    
    // create an array to store the weights only
    let modifiedWeight  = sorted.map(item => item.key).join(' ')


    return modifiedWeight
    // return modifiedWeight
    
}


// expected '2000 99 4444 123 103' to equal '2000 103 123 4444 99'

console.log(orderWeight("2000 99 4444 123 103"))