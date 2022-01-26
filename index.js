const ourMission = "We are an expert group in architectural design and interior design with a residential approach, where we generate creative, authentic and innovative solutions, achieving results that exceed the expectations of each client.";
const ourVision = "Our vision are this. Our vision are this. Our vision are this. Our vision are this.Our vision are this. Our vision are this. Our vision are this. Our vision are this. Our vision are this. Our vision are this. Our vision are this.";
const ourValue = "These are our values.. These are our values.. These are our values.. These are our values.. These are our values.. These are our values..These are our values.. These are our values.. These are our values.. These are our values..";

const misionText = document.getElementById('misionText');
const buttons = document.querySelectorAll('.misionBtn');
buttons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const activeBtn = document.querySelector('.misionBtn.active');
    if(event.target !== activeBtn) {
      activeBtn.classList.remove('active');
      event.target.classList.add('active');
      const btnText = event.target.innerText;
      if(btnText === "Our Mission") {
        misionText.innerHTML = ourMission;
      }
      else if (btnText === 'Our Vision') {
        misionText.innerHTML = ourVision;
      }
      else if (btnText === 'Our Value'){
        misionText.innerHTML = ourValue;
      }
    }
  })
})

const playBtn = document.querySelector('#playBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const videoContainer = document.getElementById('video');

const carouselButtons = document.querySelectorAll('.carousel-menu li');
carouselButtons.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const activeBtn = document.querySelector('.carousel-menu li.active');
    if(event.target !== activeBtn) {
      activeBtn.classList.remove('active');
      event.target.classList.add('active');
      videoContainer.style.opacity = 0;
      playBtn.style.display = 'block';
      pauseBtn.style.display = 'none';
      const liIdToShow = btn.id.split("-")[1];
      const liToHide = document.querySelector(`#${activeBtn.id.split("-")[1]}`);
      liToHide.style.opacity = 0;
      const liToshow = document.querySelector(`#${liIdToShow}`);
      liToshow.style.opacity = 1;
    }
  })
  document.querySelector('#person1').style.opacity = 1
})

playBtn.addEventListener('click', event => {
  videoContainer.style.opacity = 1;
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
  videoContainer.children[0].play();
}); 

pauseBtn.addEventListener('click', event => {
  videoContainer.children[0].pause();
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
})