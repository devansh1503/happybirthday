var myIndex = 0;
carousel();
function giftopen(){
    const gift = document.getElementById('gift')
    gift.src = "https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
    document.getElementById('text').classList.add('hide')
    movegift()
    document.getElementById('wishtag').classList.remove('hide')
}
function movegift(){
    var id = null
    const gift = document.getElementById('gift')
    clearInterval(id)
    var pos = 0;
    const func = ()=>{
        if(pos === 900){
            console.log('pohonch gya')
            clearInterval(id)
        }
        pos = pos + 100
        gift.style.top = pos+"px"; 
    }
    id = setInterval(func,5)
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}