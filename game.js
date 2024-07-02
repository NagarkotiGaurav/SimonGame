const buttonColor=["green","red","yellow","blue"]
let gamePattern = []
let gameOver=0

let i=0;

function glow(e){
    $(e).addClass("pressed")
    setTimeout(()=>{$(e).removeClass("pressed")},100)
    

}
function audioPlay(e){
    const url = "/sounds/" + e +".mp3"
    const aud =new Audio(url)
    aud.play()
}
$(document).keypress(function (event) { 
   if(gameOver){
    nextSequence()
    gameOver=0
    
   }
    if(event.key =="a" & gamePattern.length ==0){
        nextSequence()
              
    }
    level()
});
function startOver(){
    gamePattern=[]

    audioPlay("wrong")
    i=0;
    $("body").addClass("game-over")
    setTimeout(() => {
        $("body").removeClass("game-over")
    }, 200);
    gameOver = 1
   
}
$("div.btn").click(function (){
    glow(this)
    const color = this.id
         audioPlay(color)
        console.log(gamePattern.length + " " + i)
       
        if(this.id == gamePattern[i]){
           i++
         }  
         else{
            startOver()
            $("h1").text("Game Over, press any key to start")
         } 
        
        if(i>=gamePattern.length){
            i=0
            setTimeout(()=>{nextSequence()
                level()
            },200)
           
        }
        console.log(gamePattern)
    
})

function level(){

    const txt = "LEVEL " + gamePattern.length
    $("h1").text(txt)
}

function nextSequence() {
randomNumber = Math.floor(Math.random()*4)

const choosenColor = buttonColor[randomNumber]
audioPlay(choosenColor)
glow($("." + choosenColor))
gamePattern.push(choosenColor)


}


