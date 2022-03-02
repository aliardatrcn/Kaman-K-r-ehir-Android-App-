function myFunction(){
var a=document.getElementById("text1").value;
var b=document.getElementById("text2").value;
var usn = document.getElementById("text1").value;
var pw = document.getElementById("text2").value;
  
if(pw == "" || usn == "") {
    document.getElementById("message").innerHTML = "!";
    return false;
}
if (a=="admin1" && b=="1234" || a=="admin2" && b=="5678" )
  {
  location.replace("https://minibusapp.herokuapp.com/")
  }
else
  {
  location.replace("https://visualizelocation.herokuapp.com/")
  }
}