var x = 1;
if (true || x++) {
  console.log("inside if");
  console.log(x);
}
if (true && x++) {
  console.log("inside 2nd if");
  console.log(x);
}

if (0 > 22);
console.log("works");
switch (00) {
  case "0":
  case 00:
    console.log("lol");
    break;
  default:
    console.log("000");
}
var val = 0;
while (val < 3) {
  console.log("previous" + val);
  console.log(val++);
  console.log("post" + val);
}
