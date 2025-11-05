const args = process.argv.slice(2);

if (args===undefined){
    console.log("No Argument found");
}
else {
    console.log(args[0]);
}