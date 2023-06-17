function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 130.75; // Use the current exchange rate between EUR and JPY
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in JPY: " + result.toFixed(2);
  }  