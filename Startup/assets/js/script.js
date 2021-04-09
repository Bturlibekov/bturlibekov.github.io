$(document).ready(function(){
	$('#slider').slick({
		arrows: true,
		dots: false,
		// adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
	});
    $('#sliderRewiews').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,   
    });
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const tabsBtn   = document.querySelectorAll(".tabs-nav-btn");
const tabsItems = document.querySelectorAll(".tabs-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs-nav-btn').click();