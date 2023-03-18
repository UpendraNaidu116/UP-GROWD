         /*click button on open sub list*/
function sub()
{
    document.getElementById("sublist").removeAttribute("style")
}
function subl()
{
    document.getElementById("sublist").setAttribute("style","display:")
}
        /*login page*/
function input()
{
    document.getElementById("input").removeAttribute("placeholder")
}
function input1()
{
    document.getElementById("input1").removeAttribute("placeholder")
}
          /* OTP*/
function otp()
{
    document.getElementById("otp").removeAttribute("placeholder")
}
            /*subscribe*/
function subscribe()
 {
   var v=document.getElementById("sub").value
     if (v=="SUBSCRIBE")
       {
          document.getElementById("sub").setAttribute("value","SUBSCRIBE")
          document.getElementById("sub").style.backgroundColor="gray"
       }
 }
         /*ad images*/
         function image()
         {
             var img=["red", "bule", "green", "yellow"]
             var len=img.length;
             var ran=Math.random()*len;
             var rannum=Math.round(ran)
             document.getElementById("adimages").style.backgroundColor=img[rannum]
             var updatethetime=setTimeout(
                 function()
                 {
                     image()
                 },
                 1000
             )
         }