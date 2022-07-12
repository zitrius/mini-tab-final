const BANNER = {
    init: function(){
        alertBanner = document.querySelector("#alert-banner"); 
        closeIcon = document.querySelector("#close-icon"); 
        alertBannerState = localStorage.getItem('bannerState');

        BANNER.addEventListeners();
    },
    addEventListeners: function(){
        alertBanner.addEventListener("mouseenter", BANNER.addBlueBorder),
        alertBanner.addEventListener("mouseleave", BANNER.removeBlueBorder),
        alertBanner.addEventListener("click", BANNER.slideAndHideBanner),
        window.addEventListener("pagehide", event => {
            localStorage.setItem('bannerState', alertBanner.length ? 'visible' : 'hidden')
        });

        function getBannerState(alertBannerState){
            if (alertBannerState === 'hidden'){
                BANNER.hideAlertBanner(); 
            }else{
                alertBanner.classList.remove("display-none"); 
            }
        }
            getBannerState(alertBannerState);

    },
    hideAlertBanner: function(){
        alertBanner.classList.add("display-none");
    },
    addBlueBorder: function(){
        alertBanner.classList.add('border-blue');
    },
    removeBlueBorder: function(){
        alertBanner.classList.remove('border-blue')
    },
    slideAndHideBanner: function(){
        alertBanner.classList.add("slide-up"); 
        alertBanner.addEventListener('animationend', () => {
            console.log('slideup animation has ended');
            alertBanner.classList.remove("slide-up");
            BANNER.hideAlertBanner();
        });
    },  
} 

document.addEventListener('DOMContentLoaded', BANNER.init )

