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