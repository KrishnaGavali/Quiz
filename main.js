function check() {
  var score = 0;
  var q1 = document.getElementById('1').value;
  var q2 = document.getElementById('2').value;
  var q3 = document.getElementById('3').value;
  var q4 = document.getElementById('4').value;
  var q5 = document.getElementById('5').value;
  var q6 = document.getElementById('6').value;
  var q7 = document.getElementById('7').value;
  var q8 = document.getElementById('8').value;
  var q9 = document.getElementById('9').value;
  var q10 = document.getElementById('10').value;
  

  switch (q1) {
    case 'a':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q2) {
    case 'c':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q3) {
    case 'd':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q4) {
    case 'a':
      score += 10;
      break;
    default:
      score -= 10;
      
  }
  
  switch (q5) {
    case 'a' :
      score +=10;
      break;
    default:
      score -=10;
  }
  
  switch (q6) {
    case 'd':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q7) {
    case 'c':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q8) {
    case 'b':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q9) {
    case 'd':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  switch (q10) {
    case 'b':
      score += 10;
      break;
    default:
      score -= 10;
  }
  
  alert(score);
}
