const num = process.argv.slice(2);
const number = Number(num);
if (!isNaN(number)) {
  console.log("My number: "+ number);
} else {
  console.log("Not a number");
}