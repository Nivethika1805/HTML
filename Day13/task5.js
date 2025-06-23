function BMI(weight,height) {
    var bm= weight/(height*height);
    return Math.round(bm)
    
}
var bm=BMI(65,1.8);
console.log(bm);