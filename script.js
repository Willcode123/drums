function playSound(event) {
    const keyCode = event.keyCode || event.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.drum-pad[data-key="${keyCode}"]`);
    
    if (!audio) return;
    audio.play();
    key.classList.add('playing');
  }
  
 
  
  window.addEventListener('keydown', playSound);
  
 
  
  