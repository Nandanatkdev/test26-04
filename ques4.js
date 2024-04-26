function small(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
let value = "this is a sample string";
let title = small(value);
console.log(small); 


    
   
    
   