window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    console.log("after onsubmit");
    const userPhrase = document.getElementById("userPhrase").value;
    console.log("This should be the entered phrase: " + userPhrase);
    const userPhraseBig = userPhrase.toUpperCase();
    console.log("This should be big: " + userPhraseBig);

    document.querySelector("#biggerText").innerText = userPhraseBig;

    event.preventDefault();
  }
}