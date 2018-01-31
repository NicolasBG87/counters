// Define starting points of the counters
let count1 = 0;
let count2 = 100;
let count3 = 0;
// Grab HTML elements for each counter
const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");
// Object containing counter functions
const handlers = {
  start1: function(){
    // Initially set the counter to starting value
    counter1.textContent = count1;
    // Run this function every 0.01 second
    let timer1 = setInterval(function(){
      // Set the number you want to count to
      if(count1 <= 100) {
        // Set the counter to count value
        counter1.textContent = count1;
        // Increment by one
        count1++;
      } else {
        // Stop the function
        clearInterval(timer1);
      }
    }, 50);
  },
  start2: function(){
    counter2.textContent = count2;
    let timer2 = setInterval(function(){
      if(count2 >= 0) {
        counter2.textContent = count2;
        count2--;
      } else {
        clearInterval(timer2);
      }
    }, 50);
  },
  start3: function(){
    counter3.textContent = count3;
    let timer3 = setInterval(function(){
      if(count3 <= 200) {
        counter3.textContent = count3;
        count3+=2;
      } else {
        clearInterval(timer3);
      }
    }, 50);
  }
}
// Calling counter functions
handlers.start1();
handlers.start2();
handlers.start3();