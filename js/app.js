function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(255);
  // fill(0)
  for(let i = 0; i < 
    num3; i++) {
    circle(random(width), random(height), random(20,50));
  }
}
  function draw() {}
  
  function divideBy(){ 
    num1 = document.getElementById("BalanceOwedInput").value;
    num2 = document.getElementById("PaymentInput").value;
    document.getElementById("monthCircle").innerHTML = num1 / num2;
    canvas.style.visibility = "visible";
}

function draw() {}
  