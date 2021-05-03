
function getpara1 (){
    var inputs=[];
    
    for(var i= 1; i=6; i++)
    {
        inputs.push(document.getElementById("para_"+i+"s").value);
        
    }
document.getElementById("para1").innerHTML=inputs.join(". ")
}
function getpara2 (){
    var inputs2=[];
    
    for(var i= 1; i=6; i++)
    {
        inputs2.push(document.getElementById("parag_"+i+"s").value);
        
    }
document.getElementById("parag2").innerHTML=inputs2 .join(". ")
document.getElementById("parag2")=document.getElementById("para1").value+document.getElementById("parag2")
}