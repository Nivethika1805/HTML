let array=["apple","orange","pinapple","plums","dragonfruit"];
console.log(array[3]);

let a=array.push("watermelon")
console.log(array.push(array));

let b=array.shift(1);
console.log(b);

console.log(array.length);
console.log(array.reverse());

let s=[1,2,3,4,5,6];
let sum=0;
for(let i=0; i< s.length; i++ ){
    sum+= s[i]; 
}
console.log(sum);

for(let i=0; i< s.length;i++){
console.log(`array${i} : ${s[i]}` );
}