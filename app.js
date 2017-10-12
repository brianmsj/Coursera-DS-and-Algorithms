
function grab(name) {
  var index = process.argv.indexOf(name);
  return (index === -1) ? null : process.argv[index+1]
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting) {
  console.log("You blew it")
}
else {
  console.log(`Welcome ${user}, ${greeting}`)
}