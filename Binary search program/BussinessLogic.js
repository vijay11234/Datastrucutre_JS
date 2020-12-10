class Binary_search {
    
    binarySearch(item, value){
    let flag = 0;// calls boolean variables/often just flags
    let firstIndex  = 0;//starting index of array
    let lastIndex   = item.length - 1;
    let middle = Math.floor((lastIndex - firstIndex)/2);

    while(firstIndex <= lastIndex){
        
        //finding the mid index
        if (item.indexOf(value) < middle){ 
            lastIndex = middle - 1;
        } else if (item.indexOf(value) > middle){
            firstIndex = middle + 1;
        }
        else if (item.indexOf(value) == middle) {  
            console.log("\n Word is found at "+middle);
            break;
        }

        middle = Math.floor((stopIndex + firstIndex)/2);
    }
 
    if (flag !== 0)
    console.log("Enter correct input");
}
}
module.exports = Binary_search;