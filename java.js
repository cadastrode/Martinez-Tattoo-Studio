
let mover=1;

document.getElementById("slide1").checked = true;

function kMenu(){
   
if( men.style.display == "block"){
   men.style.display = "none";
}else{
    men.style.display= "block";
}
}
setInterval(function(){
    auto()
},10000)
function auto(){
    mover++;
    if(mover>5){
        mover=1;
    }

    document.getElementById("slide"+mover).checked = true;

}
function tamanho(){
    if(innerWidth >=685){
        men.style.display= "block";
    }
}



