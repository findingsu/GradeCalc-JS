
function calculateGrade()
{
    const marks = Number(document.querySelector("#txtMarks").value);
    const grade = document.querySelector("#spnGrade");
    const message = document.querySelector("#message");
    if( (marks>=0) && (marks<59) ) {
      grade.innerHTML = "F";
      message.innerHTML = "Smooth brainer";
      message.style.color = 'red';
    }
    else if((marks>59) && (marks<69)) {
      grade.innerHTML = "D";
      message.innerHTML = "Do better next time";
      message.style.color = 'red';
    }
    else if((marks>69) && (marks<79)) {
      grade.innerHTML = "C";
      message.innerHTML = "Mediocre";
      message.style.color = 'darkorange';
    }
    else if((marks>79) && (marks<89)) {
      grade.innerHTML = "B";
      message.innerHTML = "You might have some potential";
      message.style.color = 'green';
    }
    else if((marks>89) && (marks<101)) {
      grade.innerHTML = "A";
      message.innerHTML = "Well done! Enjoy the academic validation";
      message.style.color = 'green';
    }
     else {
      grade.innerHTML = "";
      message.innerHTML = "Invalid - Please type in a number";
      message.style.color = 'red';
    }
}