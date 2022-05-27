
//js new pages

//banner-slider
if(document.querySelectorAll(".banner-slider").length) {
    var bannerSlider = new Splide( '.banner-slider', {
        type: 'loop',
        arrows: true,
        pagination: false,
    } );
    bannerSlider.mount();
}


//product-card
if(document.querySelectorAll(".product-card-slider").length) {
    var productCards = document.querySelectorAll('.product-card');

    for (const productCard of productCards) {
        var productCardSlider = productCard.querySelector('.product-card-slider');
        var productCardSliderFunc = new Splide(productCardSlider, {
            type      : 'fade',
            rewind    : true,
            pagination: true,
            arrows    : false,
        } );

        productCardSliderFunc.mount();
    }
}

//main-product-slider
if(document.querySelectorAll(".main-product-slider").length) {
    var mainProducts = document.querySelectorAll('.main-product-slider');

    for (const mainProduct of mainProducts) {
        var mainProductSliderFunc = new Splide(mainProduct, {
            perPage: 4,
            pagination: false,
            perMove: 1,
            gap: 24,
            arrows: true,
            rewind: true,
            breakpoints: {
                1280: {
                    gap: 15,
                    perPage: 3,
                },
                960: {
                    gap: 15,
                    perPage: 2,
                },
                668: {
                    gap: 15,
                    perPage: 1,
                },
            }
        } );

        mainProductSliderFunc.mount();
    }
}

//main-product-slider
if(document.querySelectorAll(".product-list").length) {
    var mainProducts = document.querySelectorAll('.product-list');

    for (const mainProduct of mainProducts) {
        var mainProductSliderFunc = new Splide(mainProduct, {
            perPage: 4,
            pagination: false,
            perMove: 1,
            gap: 24,
            arrows: false,
            breakpoints: {
                1280: {
                    gap: 15,
                    perPage: 3,
                },
                960: {
                    gap: 15,
                    perPage: 2,
                },
                668: {
                    gap: 15,
                    perPage: 1,
                },
            }
        } );

        mainProductSliderFunc.mount();
    }
}

//article-slider
if(document.querySelectorAll(".article-slider ").length) {
    var articleSliders = document.querySelectorAll('.article-slider ');

    for (const articleSlider of articleSliders) {
        var articleSliderFunc = new Splide(articleSlider, {
            perPage: 4,
            pagination: false,
            perMove: 1,
            gap: 24,
            arrows: true,
            rewind: true,
            breakpoints: {
                1100: {
                    gap: 20,
                    perPage: 3,
                    autoplay: true,
                },
                960: {
                    gap: 20,
                    perPage: 2,
                    autoplay: true,
                },
                668: {
                    gap: 20,
                    perPage: 1,
                    autoplay: true,
                },
            }
        } );

        articleSliderFunc.mount();
    }
}

//instagram-slider
if(document.querySelectorAll(".instagram-slider").length) {
    var instSliders = document.querySelectorAll('.instagram-slider');

    for (const instSlider of instSliders) {
        var instSliderFunc = new Splide(instSlider, {
            perPage: 4,
            pagination: false,
            perMove: 1,
            gap: 30,
            arrows: true,
            rewind: true,
            breakpoints: {
                1000: {
                    gap: 20,
                    perPage: 3,
                    autoplay: true,
                },
                768: {
                    gap: 20,
                    perPage: 2,
                    autoplay: true,
                },
                568: {
                    gap: 20,
                    perPage: 1,
                    autoplay: true,
                },
            }
        } );

        instSliderFunc.mount();
    }
}

//main-reviwe-sl
if(document.querySelectorAll(".main-reviwe-sl").length) {
    var reviweSliders = document.querySelectorAll('.main-reviwe-sl');

    for (const reviweSlider of reviweSliders) {
        var reviweSliderFunc = new Splide(reviweSlider, {
            perPage: 2,
            pagination: false,
            perMove: 1,
            gap: 30,
            arrows: true,
            rewind: true,
            autoplay: true,
            breakpoints: {
                768: {
                    gap: 20,
                    perPage: 1,
                },
            }
        } );
        
        reviweSliderFunc.mount();
    }
}

//main-reviwe-sl
if(document.querySelectorAll(".main-categories").length) {
    var categoriesSliders = document.querySelectorAll('.main-categories');

    for (const categoriesSlider of categoriesSliders) {
        var categoriesSliderFunc = new Splide(categoriesSlider, {
            perPage: 6,
            pagination: false,
            perMove: 1,
            gap: 30,
            arrows: false,
            autoplay: true,
            breakpoints: {
                1200: {
                    gap: 15,
                    perPage: 5,
                },
                920: {
                    gap: 15,
                    perPage: 4,
                },
                740: {
                    gap: 15,
                    perPage: 3,
                },
                568: {
                    gap: 10,
                    perPage: 2,
                },
            }
        } );
        
        categoriesSliderFunc.mount();
    }
}

//point-block
if(document.querySelector('.point-block')) {
    const buttons = document.querySelectorAll('.point-block');

    for (const button of buttons) {
        
        button.addEventListener('click', function () {
            this.classList.add('is-active');
        });
        
        button.addEventListener('mouseenter', function () {
            this.classList.add('is-active');
        });
        
        button.addEventListener('blur', function () {
            this.classList.remove('is-active');
        });
        
        button.addEventListener('mouseleave', function () {
            this.classList.remove('is-active');
        });
    }

    window.addEventListener('click', function (e) {
    
        if (!e.target.closest('.point-block')) {
            for (const button of buttons) {
                button.classList.remove('is-active');
            }
        }
    });
}


//shop-slider
if(document.querySelectorAll(".shop-slider").length) {
    
    var mainShop = new Splide( '.shop-slider', {
        rewind    : true,
        pagination: false,
        arrows: false,
        type: 'fade',
        cover: true,
    } );

    var thumbnailsShop = new Splide( '.shop-slider-thumb', {
        perPage: 4,
        gap : 9,
        pagination  : false,
        rewind    : true,
        isNavigation: true,
        arrows: false,
    } );

    mainShop.sync( thumbnailsShop );
    mainShop.mount();
    thumbnailsShop.mount();

    var thumbnailsCounter = document.querySelector('.shop-slider-thumb-counter')
    var thumbnailsSlides = thumbnailsShop.length - 4
    thumbnailsCounter.innerText = '+' + thumbnailsSlides;
}

//shop-filter
if(document.querySelectorAll(".shop-filter__link").length) {
    let menuShops = document.querySelector('.shop-filter')
    let ShopsBtns = menuShops.querySelectorAll('.shop-filter__link')
    let ShopsSelect = document.querySelector('.shop-filter__holder')
    let ShopsSelectText = document.querySelector('.shop-filter__holder-text')

    for (const ShopsBtn of ShopsBtns) {
        ShopsBtn.addEventListener('click', function(e){
            e.preventDefault();

            for (const ShopsBtn of ShopsBtns) {
                ShopsBtn.classList.remove('is-active');
            }
            this.classList.add('is-active');

            menuShops.style.maxHeight = null;
            ShopsSelect.classList.remove('is-active')

            var text = this.textContent;
            ShopsSelectText.textContent = text;
        });
    }

    ShopsSelect.addEventListener('click', function(){
        if (menuShops.style.maxHeight){
            menuShops.style.maxHeight = null;
            this.classList.remove('is-active');
        } else {
            menuShops.style.maxHeight =  menuShops.scrollHeight + "px";
            this.classList.add('is-active');
        }
    });
}

//sub
if(document.querySelector('.subscription-fixed')) {

    window.onscroll = function() {
        if(document.querySelector('.subscription-fixed')) {subscribtionFixed()}
    };
    
    var subscribtion = document.querySelector(".subscription-fixed");

    var fixed = '130';

    function subscribtionFixed() {
        if (window.pageYOffset > fixed) {
            subscribtion.classList.add("is-fixed");
        } else {
            subscribtion.classList.remove("is-fixed");
        }
    }

    var subscriptionClose = document.querySelector('.subscription__close')

    subscriptionClose.addEventListener('click', function(e){
        e.preventDefault();
        this.closest('.subscription-fixed').remove()
    });
}

//popup
const popupBtnItems = document.querySelectorAll('.popup-btn');
const popups = document.querySelectorAll('.popup');
const popupsClose = document.querySelectorAll('.popup__close');
var overlay = document.getElementById('overlay');

for (const popupBtn of popupBtnItems) {
    popupBtn.addEventListener('click', function(event) {
        event.preventDefault();

        for (const popup of popups) {
            popup.classList.remove('popup--active');
            overlay.classList.remove('is-opened');
            document.body.classList.remove('body-overflow');
        }

        const popupActive = document.getElementById(this.getAttribute('href')); 
        
        popupActive.classList.add('is-active');
        popupActive.style.top = window.pageYOffset + 'px';
        overlay.classList.add('is-opened');
        document.body.classList.add('body-overflow');
    });
}

for (const popupClose of popupsClose) {
    popupClose.addEventListener('click', function(event) {
        event.preventDefault();

        for (const popup of popups) {
            popup.classList.remove('is-active');
            overlay.classList.remove('is-opened');
            document.body.classList.remove('body-overflow');
        }
    });
}


//single-slider
var singleSliderContainers = document.querySelectorAll('.single-slider-container');

singleSliderContainers.forEach(function (singleSliderContainer) {
        var stepsSlider = singleSliderContainer.querySelector('.single-slider');
        var rangeMin = Number(stepsSlider.getAttribute('data-min'));
        var rangeMax = Number(stepsSlider.getAttribute('data-max'));
        var start = Number(stepsSlider.getAttribute('data-start'));
        var step = Number(stepsSlider.getAttribute('data-step'));
        
        noUiSlider.create(stepsSlider, {
            start: [start],
            step: step,
            connect: true,
            range: {
                'min': [rangeMin],
                'max': [rangeMax]
            },
            tooltips: [
                wNumb({decimals: 0}),
            ],
            connect: [true, false],
        });
});

//steps
if(document.querySelector('.next-btn')) {
    var nextSteps = document.querySelectorAll('.next-btn');
    var prevSteps = document.querySelectorAll('.prev-btn');

    for (const nextStep of nextSteps) {
        nextStep.onclick = function (e) {
            e.preventDefault();
            nextPrev(1);
        };
    }

    for (const prevStep of prevSteps) {
        prevStep.onclick = function (e) {
            e.preventDefault();
            nextPrev(-1);
        };
    }

    var currentTab = 0;
    showTab(currentTab);

    function showTab(n) {
        var x = document.getElementsByClassName("selection-step");
        x[n].classList.add('is-active')
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        
        var x = document.getElementsByClassName("selection-step");
        if (n == 1 && !validateForm()) return false;
        
        x[currentTab].classList.remove('is-active');
        currentTab = currentTab + n;


        if (currentTab >= x.length - 1) {
            var stepContainer = document.querySelector(".selection-wrap");
            var popup = stepContainer.closest('.selection-popup');
            popup.classList.add('is-last');
            stepContainer.classList.add("is-last");
        }
        if (currentTab < x.length - 1) {
            var stepContainer = document.querySelector(".selection-wrap");
            var popup = stepContainer.closest('.selection-popup');
            popup.classList.remove('is-last');
            stepContainer.classList.remove("is-last");
        }

        showTab(currentTab);
    }

    function fixStepIndicator(n) {
        var i, x = document.getElementsByClassName("step-info__item");
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("is-active");
        }

        x[n].classList.add("is-active");
    }

    function validateForm() {
        var y, i, valid = true;
        var x = document.getElementsByClassName("selection-step");
        y = x[currentTab].getElementsByTagName("input");

        for (i = 0; i < y.length; i++) {
            if (y[i].value == "") {
                valid = false;
            }
            if (!y[i].checked) {
                valid = false;
            }else if (y[i].checked){
                valid = true;
                return valid;
            }
        }
        return valid;
    }
}

//selaction-table hover
if(document.querySelector('.selaction-table')) {
    var tableCont = document.querySelector('.selaction-table-right')
    var tr = tableCont.querySelectorAll('tr')
    var th = tableCont.querySelectorAll('th');
    var tableLeft = document.querySelector('.selaction-table-left')
    var leftTr = tableLeft.querySelectorAll('tr')

    tr.forEach((el) => {
        el.addEventListener('mouseenter', function () {
            var rowIndex = [...this.parentNode.children].indexOf(this);
            
            var td = this.querySelectorAll('td');
            

            td.forEach((el) => {
                el.addEventListener('mouseenter', function () {
                    var itemIndex = [...this.parentNode.children].indexOf(this);
                    
                    th.item(itemIndex).classList.add('is-active');
                    leftTr.item(rowIndex + 1).classList.add('is-active');
                });
            });
            td.forEach((el) => {
                el.addEventListener('mouseleave', function () {
                    th.forEach((el) => {
                        el.classList.remove('is-active');
                    });
                });
            });
        });

        el.addEventListener('mouseleave', function () {
            leftTr.forEach((el) => {
                el.classList.remove('is-active');
            });
        });
    });
}

