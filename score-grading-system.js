function gradeScore(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else {
    return "Needs Improvement";
  }
}
console.log(gradeScore(85)); 
