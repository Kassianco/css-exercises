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

TweenMax.from('#dolphineShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut});
TweenMax.from('#blobShape', 1.5,{ x: -500, opacity:0, ease: Power4. easeOut});
TweenMax.from('#textSection', 1.3,{ x: 200, delay:.7, opacity:0});

function myFunction() {
  btn1.classList.add('selected-dot');
  btn2.classList.remove('selected-dot');
  btn3.classList.remove('selected-dot');   
    
  // dolphine.style.display = "block";
  // palm.style.display = "block";
  // climate.style.display = "none";
  
  tl = new TimelineMax();

  tl.to('#palmShape', 1.5,{ y: -500, opacity:0})
  .to('#blobShapePalm', 1.5,{ x: -500, delay:-1.5, opacity:0})
  .to('#textSectionPalm', 1.3,{ x: 200, delay:-1.5, opacity:0})
  .from('#dolphineShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut})
  .from('#blobShapeDolphine', 1.5,{ x: -500, delay:-2.5, opacity:0, ease: Power4. easeOut})
  .from('#textSectionDolphine', 1.3,{ x: 200, delay:-2.5, opacity:0})

  // if(btn1 || btn3) {
  //   tl.to('#dolphineShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut})
  //   .to('#blobShape', 1.5,{ x: -500, delay:-1.5, opacity:0, ease: Power4. easeOut})
  //   .to('#textSection', 1.3,{ x: 200, delay:-1.5, opacity:0})  
  // }

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

  // palm.style.display = "none";
  palm.style.display = "block";
  // climate.style.display = "none";

  tl = new TimelineMax();

  tl.to('#dolphineShape', 1.5,{ y: -500, opacity:0,})
  .to('#blobShapeDolphine', 1.5,{ x: -500, delay:-1.5, opacity:0,})
  .to('#textSectionDolphine', 1.3,{ x: 200, delay:-1.5, opacity:0})  
  .from('#palmShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut})
  .from('#blobShapePalm', 1.5,{ x: -500, delay:-2.5, opacity:0, ease: Power4. easeOut})
  .from('#textSectionPalm', 1.3,{ x: 200, delay:-2.5, opacity:0})


  // if(btn1 || btn3) {
  //   tl.to('#dolphineShape', 1.5,{ y: -500, opacity:0,})
  //   .to('#blobShape', 1.5,{ x: -500, delay:-1.5, opacity:0,})
  //   .to('#textSection', 1.3,{ x: 200, delay:-1.5, opacity:0})  
  // }

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

  
  // dolphine.style.display = "none";
  // palm.style.display = "none";
  // climate.style.display = "block";

  tl = new TimelineMax();

  tl.from('#globeShape', 1.5,{ y: -500, opacity:0, ease: Bounce. easeOut})
  .from('#blobShape', 1.5,{ x: -500, delay:-1.5, opacity:0, ease: Power4. easeOut})
  .from('#textSection', 1.3,{ x: 200, delay:-1.5, opacity:0})

  // TweenMax.from('#globeShape', 1.5,{ y: -500, opacity:0, ease: Bounce.easeOut})
  // TweenMax.from('#blobShape', 1.5,{ x: -500, opacity:0, ease: Power4.easeOut})
  // TweenMax.from('#textSection', 1.3,{ x: 200, delay:.7, opacity:0})

  console.log('display card 3')
}

function happyEarth() {
  const earthShape = document.getElementById('globeShape')
  TweenMax.to(earthShape, .8,{rotation: '40deg', ease: Power3.easeIn, repeat: 5, yoyo:true});
  console.log('unhappy earth')
}

// var myAnimation = new timeLineMax({delay:0,5,})


