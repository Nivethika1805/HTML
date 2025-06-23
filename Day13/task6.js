function BMI(weight,height) {
    var bm= weight/(height*height);
if (bm<18.5){
    console.log("Your underweight");}
else if ((bm>=18.5) && (bm<=24.9)){
    console.log("Your normal");}
else{
    consol.log("Your over weight");}
}
BMI(65,1.8)