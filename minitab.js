let alertBanner = document.querySelector("#alert-banner"); 
let closeIcon = document.querySelector("#close-icon"); 
const alertBannerState = localStorage.getItem('bannerState');

console.log(alertBannerState); 


alertBanner.addEventListener("mouseenter", addBlueBorder);
alertBanner.addEventListener("mouseleave", removeBlueBorder)
closeIcon.addEventListener("click", slideAndHideBanner); 

console.log(alertBanner.length);



window.addEventListener("pagehide", event => {
    localStorage.setItem('bannerState', alertBanner.length? 'visible' : 'hidden')
});


function getBannerState(alertBannerState){
    if (alertBannerState === 'hidden'){
        hideAlertBanner(); 
} 
};

getBannerState(alertBannerState); 
 
function hideAlertBanner(){
    alertBanner.classList.add("display-none"); 
}

function addBlueBorder(){
    alertBanner.classList.add('border-blue');
}
function removeBlueBorder(){
    alertBanner.classList.remove('border-blue');
}

function slideAndHideBanner(){
    alertBanner.classList.add("slide-up"); 
    alertBanner.addEventListener('animationend', () => {
        console.log('slide-up animation has ended');
        alertBanner.classList.remove("slide-up");
        hideAlertBanner();
    });
}


