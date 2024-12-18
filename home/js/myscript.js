function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function myFunction2() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  const element = document.getElementsByTagName("p");
  document.getElementById("demo").innerHTML = element[0].innerHTML;
}  