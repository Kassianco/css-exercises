
// TweenMax.from('#dolphineShape', 2,{ y: -500, opacity:0, ease: Bounce. easeOut})
// TweenMax.from('#blobShape', 2,{ x: -500, opacity:0, ease: Power4. easeOut})
// TweenMax.from('#textSection', 1.3,{ x: 500, delay:1.2, opacity:0})

// TweenMax.from('#palmShape', 2,{ y: -500, opacity:0, ease: Bounce. easeOut})
// TweenMax.from('#globeShape', 2,{ y: -500, opacity:0, ease: Bounce. easeOut})


var btn1 = document.getElementById('dot1')
var btn2 = document.getElementById('dot2')
var btn3 = document.getElementById('dot3')

var dolphine = document.getElementById('dolphineCard')
var palm = document.getElementById('palmCard')
var climate = document.getElementById('climateCard')

dolphine.style.display = "block";
palm.style.display = "none";
climate.style.display = "none";

btn1.classList.add('selected-dot');

function myFunction() {
  btn1.classList.add('selected-dot');
  btn2.classList.remove('selected-dot');
  btn3.classList.remove('selected-dot');   
    
  dolphine.style.display = "block";
  palm.style.display = "none";
  climate.style.display = "none";

  TweenMax.from('#dolphineShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut})
  TweenMax.from('#blobShape', 1.5,{ x: -500, opacity:0, ease: Power4. easeOut})
  TweenMax.from('#textSection', 1.3,{ x: 200, delay:.7, opacity:0})

  console.log('display card 1')
}
  
function happyDolphin() {
  const dolphinShape = document.getElementById('dolphineShape')
  TweenMax.to(dolphinShape, .8,{rotation: '+=360deg', ease: Power3. easeOut});
  console.log('happy dolphin')
}

function myFunction2() {
  btn1.classList.remove('selected-dot');
  btn2.classList.add('selected-dot');
  btn3.classList.remove('selected-dot'); 

  dolphine.style.display = "none";
  palm.style.display = "block";
  climate.style.display = "none";

  TweenMax.from('#palmShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut})
  TweenMax.from('#blobShape', 1.5,{ x: -500, opacity:0, ease: Power4. easeOut})
  TweenMax.from('#textSection', 1.3,{ x: 200, delay:.7, opacity:0})

  console.log('display card 2')
}

function happyPlants() {
  const plantsShape = document.getElementById('palmShape')
  TweenMax.to(plantsShape, .8,{y: 15, ease: Power3. easeIn, repeat: -1, yoyo: true});
  console.log('happy plants')
}

function myFunction3() {
  btn1.classList.remove('selected-dot');
  btn2.classList.remove('selected-dot');
  btn3.classList.add('selected-dot');

  
  dolphine.style.display = "none";
  palm.style.display = "none";
  climate.style.display = "block";

  TweenMax.from('#globeShape', 1.5,{ y: -500, opacity:0, ease: Bounce.easeOut})
  TweenMax.from('#blobShape', 1.5,{ x: -500, opacity:0, ease: Power4.easeOut})
  TweenMax.from('#textSection', 1.3,{ x: 200, delay:.7, opacity:0})

  console.log('display card 3')
}

function happyEarth() {
  const earthShape = document.getElementById('globeShape')
  TweenMax.to(earthShape, .8,{rotation: '40deg', ease: Power3.easeIn, repeat: 5, yoyo:true});
  console.log('unhappy earth')
}

// var myAnimation = new timeLineMax({delay:0,5,})


