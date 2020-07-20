var x = 1;
if (true || x++) {
  console.log("inside if");
  console.log(x);
}
if (true && x++) {
  console.log("inside 2nd if");
  console.log(x);
}
