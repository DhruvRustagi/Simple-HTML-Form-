var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yy = today.getUTCFullYear();

if(dd < 10)
{
    dd = '0' +dd;
}
if(mm < 10)
{
    mm = '0' +mm;
}
                
today = yy + '-' + mm + '-' + dd;
document.getElementById("dob").setAttribute("max", today);