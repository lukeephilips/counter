var target = 30;
var multiple = -5;

var integerTest = function(input) {
  return !isNaN(input) &&
  typeof(input) === "number" &&
  input > 0;
};

if (integerTest(target) && integerTest(multiple)) {
  for (var i = multiple; i <= target; i = i + multiple) {
    console.log(i);
  }
}
else {
  alert ("something is wrong, please enter positive integers.")

}
