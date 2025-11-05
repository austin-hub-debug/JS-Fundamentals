const num = process.argv.slice(2);
const number = Number(num);
if (isNaN(number)) {
  console.log("Missing number of occurrences");
}else {
    i=1;
    while(i<=number){
    console.log("C is fun");
    i++;
}
}