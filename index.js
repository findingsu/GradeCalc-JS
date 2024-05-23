
function calculateGrade()
{
    var marks = Number(document.getElementById("txtMarks").value);
    if( (marks>=0) && (marks<59) )
    {
      document.getElementById("spnGrade").innerHTML = "F";
    }
    else if((marks>60)&& (marks<69))
    {
      document.getElementById("spnGrade").innerHTML = "D";
    }
    else if((marks>69)&& (marks<79))
    {
      document.getElementById("spnGrade").innerHTML = "C";
    }
    else if((marks>79)&& (marks<89))
    {
      document.getElementById("spnGrade").innerHTML = "B";
    }
    else if((marks>89)&& (marks<101))
    {
      document.getElementById("spnGrade").innerHTML = "A";
    }
     else 
    {
      document.getElementById("spnGrade").innerHTML = "Invalid Marks";
    }
}