document.querySelector(".about-arrow").addEventListener("dblclick", () => {
    document.querySelector(".about").style.opacity = "1";
  });
document.querySelector(".about-arrow").addEventListener("click", () => {
    document.querySelector(".about").style.opacity = "0";
  });

document.querySelector(".members-arrow").addEventListener("dblclick", () => {
    document.querySelector(".members").style.opacity = "1";
  });
document.querySelector(".members-arrow").addEventListener("click", () => {
    document.querySelector(".members").style.opacity = "0";
  });

document.querySelector(".intro-arrow").addEventListener("dblclick", () => {
    document.querySelector(".introduction").style.opacity = "1";
  });
document.querySelector(".intro-arrow").addEventListener("click", () => {
    document.querySelector(".introduction").style.opacity = "0";
  });
  
document.querySelector(".app-arrow").addEventListener("dblclick", () => {
    document.querySelector(".token-of-app").style.opacity = "1";
  });
document.querySelector(".app-arrow").addEventListener("click", () => {
    document.querySelector(".token-of-app").style.opacity = "0";
  });

const movingDiv = document.querySelector(".subject-boxes");

// Pause animation on mouse enter
movingDiv.addEventListener('mouseenter', function() {
    movingDiv.style.animationPlayState = 'paused';
});

// Resume animation on mouse leave
movingDiv.addEventListener('mouseleave', function() {
    movingDiv.style.animationPlayState = 'running';
});

document.querySelector(".physics-box").addEventListener('mouseenter', function() {
    document.querySelector(".phy-select-button").style.backgroundColor='cadetblue';
    document.querySelector(".physics-box").style.transform = 'translateZ(140px)';
});
document.querySelector(".physics-box").addEventListener('mouseleave', function() {
    document.querySelector(".phy-select-button").style.backgroundColor='white';
    document.querySelector(".physics-box").style.transform = 'translateZ(0px)';
});

document.querySelector(".chemistry-box").addEventListener('mouseenter', function() {
    document.querySelector(".chem-select-button").style.backgroundColor='cadetblue';
    document.querySelector(".chemistry-box").style.transform = 'translateZ(200px)';
});
document.querySelector(".chemistry-box").addEventListener('mouseleave', function() {
    document.querySelector(".chem-select-button").style.backgroundColor='white';
    document.querySelector(".chemistry-box").style.transform = 'translateZ(0px)';
});

document.querySelector(".history-box").addEventListener('mouseenter', function() {
    document.querySelector(".his-select-button").style.backgroundColor='cadetblue';
    document.querySelector(".history-box").style.transform = 'translateZ(200px)';
});
document.querySelector(".history-box").addEventListener('mouseleave', function() {
    document.querySelector(".his-select-button").style.backgroundColor='white';
    document.querySelector(".history-box").style.transform = 'translateZ(0px)';
});

document.querySelector(".geography-box").addEventListener('mouseenter', function() {
    document.querySelector(".geo-select-button").style.backgroundColor='cadetblue';
    document.querySelector(".geography-box").style.transform = 'translateZ(150px)';
});
document.querySelector(".geography-box").addEventListener('mouseleave', function() {
    document.querySelector(".geo-select-button").style.backgroundColor='white';
    document.querySelector(".geography-box").style.transform = 'translateZ(0px)';
});

document.querySelector(".civics-box").addEventListener('mouseenter', function() {
    document.querySelector(".ci-elect-button").style.backgroundColor='cadetblue';
    document.querySelector(".civics-box").style.transform = 'translateZ(100px)';
});
document.querySelector(".civics-box").addEventListener('mouseleave', function() {
    document.querySelector(".ci-elect-button").style.backgroundColor='white';
    document.querySelector(".civics-box").style.transform = 'translateZ(0px)';
});
