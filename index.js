//document.querySelector("button").addEventListener("click",handleclick);//yha pr handle click ke aage paranthesis nhi lagi hai cause agr lgi hoti to sbse pehle ye fucmtion chalta pr ahi jb order mein execute hoga tb
//function handleclick(){
//    alert("i got clicked");
//}

var number=document.querySelectorAll(".drum").length;

for (i=0;i<number;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){//ye anonymous form hai upar wale function ka
        // ;
        // console.log(this.style.color="white");
        var buttonName=this.innerHTML;
        makeSound(buttonName);

    });

}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case "l":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;         
        default:
            break;
    }
    
    
}