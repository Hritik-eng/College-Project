
var a=document.getElementById("num");
var b=document.getElementById("pass");
var c=document.getElementById("Cpass");
a.addEventListener("focus",()=>{document.getElementById("x").innerHTML="<strong>The number must be of 10 digit</strong>";});
a.addEventListener("blur", ()=>{
var str=document.getElementById("num").value;
var small=document.getElementById("sma");
var regex=/^([0-9]{10})$/;
if(!regex.test(str))
{

//small.innerHTML="number is Invalid";
small.style.color="black";
}
});


b.addEventListener("focus",()=>{document.getElementById("y").innerHTML="<strong>The password should be of at most 20 and at leat 6 character and no special character is allow</strong>";});
b.addEventListener("blur",()=>{
var s=document.getElementById("pass").value;
var strong=document.getElementById("st");
var regex=/^[0-9a-zA-Z]{6,20}$/;
if(!regex.test(s))
{
//strong.innerHTML="Invalid Password";
strong.style.color="black";
}
});

c.addEventListener("blur",()=>{
if(b.value==c.value)
{
 
}
else
{
document.getElementById("z").innerHTML="<strong>Incorrect Password, Re-check the Password</strong>";
}
});
