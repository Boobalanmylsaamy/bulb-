function ChangeImage(){
    var pic=document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("on");
        pic.src="wbulb off.jpeg";
    }
    else{
        console.log("off");
        pic.src ="wbulb on.jpeg";
    }
}