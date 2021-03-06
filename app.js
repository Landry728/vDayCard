// click those hearts!!!
window.onload = function(){
    var debug = /*true ||*/ false;
    var h = document.querySelector('.heart-wrapper');
    
    function toggleActivate(){
      h.classList.toggle('active');
    }
  
    if(!debug){
      h.addEventListener('click',function(){
        toggleActivate();
      },false);
  
      // Set timeout interval!  (toggleActivate,1000);
    }else{
      var elts = Array.prototype.slice.call(h.querySelectorAll(':scope > *'),0);
      var activated = false;
      var animating = false;
      var count = 0;
      var step = 1000;
      
      function setAnim(state){
        elts.forEach(function(elt){
          elt.style.animationPlayState = state;
        });
      }
      
      h.addEventListener('click',function(){
        if (animating) return;
        if (count > 27) {
          h.classList.remove('active');
          count = 0;
          return;
        }
        if (!activated) h.classList.add('active') && (activated = true);
        
        console.log('Step : '+(++count));
        animating = true;
        
        setAnim('running');
        setTimeout(function(){
          setAnim('paused');
          animating = false;
        },step);
      },false);
  
      setAnim('paused');
      elts.forEach(function(elt){
        elt.style.animationDuration = step/1000*27+'s';
      });
    }
  };