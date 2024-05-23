
function calculateGrade()
{
    const marks = Number(document.querySelector("#txtMarks").value);
    if( (marks>=0) && (marks<59) ) {
      document.querySelector("#spnGrade").innerHTML = "F";
      logGrade("F")
    }
    else if((marks>60)&& (marks<69)) {
      document.querySelector("#spnGrade").innerHTML = "D";
      logGrade("D")
    }
    else if((marks>69)&& (marks<79)) {
      document.querySelector("#spnGrade").innerHTML = "C";
      logGrade("C")
    }
    else if((marks>79)&& (marks<89)) {
      document.querySelector("#spnGrade").innerHTML = "B";
      logGrade("B")

    }
    else if((marks>89)&& (marks<101)) {
      document.querySelector("#spnGrade").innerHTML = "A";
      logGrade("A")
    }
     else {
      document.querySelector("#spnGrade").innerHTML = "Invalid Marks";
      logGrade("Invalid Marks")
    }
}
function logGrade(grade) {
  console.log(grade)
  // alert("Wow... Smooth brainer")
}

