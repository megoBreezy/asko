if(document.querySelectorAll(".product-slider").length) {
    
        var main = new Splide( '.product-slider', {
            rewind    : true,
            pagination: false,
            arrows    : false,
            type: "fade",
            height: 557,
            breakpoints : {
                1350: {
                    height: 496,
                    pagination: false,
                },
                1200: {
                    height: 496,
                    pagination: false,
                },
                1100: {
                    height: 311,
                    pagination: false,
                },
                992: {
                    height: 396,
                    pagination: false,
                },
                768: {
                    height: 311,
                    pagination: false,
                },
                658: {
                    height: 311,
                    pagination: true,
                },
                468: {
                    height: 270,
                    pagination: true,
                },
                399: {
                    height: 210,
                    pagination: true,
                },
                320: {
                    height: 160,
                    pagination: true,
                },
            },
        } );
    
        var thumbnails = new Splide( '.product-thumbs-slider', {
            perPage: 6,
            gap : 23,
            pagination  : false,
            isNavigation: true,
            rewind    : true,
            direction: "ttb",
            width: 93,
            height: 469,
            fixedWidth: 93,
            fixedHeight: 59,
            cover: true,
            breakpoints : {
                1350: {
                    height: 408,
                },
                1200: {
                    height: 308,
                },
                1100: {
                    height: 223,
                },
                992: {
                    height: 308,
                },
                768: {
                    height: 223,
                },
            },
        } );
    
        main.sync( thumbnails );
        main.mount();
        thumbnails.mount();
}

//reviwes-slider
if(document.querySelectorAll(".reviwes-slider").length) {
    var reviwesSlider = new Splide( '.reviwes-slider', {
        perPage: 6,
        pagination: false,
        perMove: 1,
        gap: 9,
        type: 'loop',
        arrows: true,
        focus  : 1,
        breakpoints: {
            1200: {
                perPage: 5,
            },
            1100: {
                perPage: 4,
            },
            992: {
                perPage: 6,
            },
            868: {
                perPage: 5,
            },
            768: {
                perPage: 4,
            },
            468: {
                perPage: 3,
            },
            390: {
                gap: 3,
                perPage: 3,
            },
        }
    } );
    reviwesSlider.mount();
}

//revised-slider
if(document.querySelectorAll(".revised-slider").length) {
    var revisedSlider = new Splide( '.revised-slider', {
        perPage: 4,
        pagination: false,
        perMove: 1,
        gap: 29,
        arrows: true,
        breakpoints: {
            1500: {
                gap: 15,
            },
            1450: {
                perPage: 3,
            },
            992: {
                perPage: 2,
            },
            668: {
                perPage: 1,
            },
        }
    } );
    revisedSlider.mount();
}

//card-slider
if(document.querySelectorAll(".card-slider").length) {
    var cards = document.querySelectorAll('.card');

    for (const card of cards) {
        var cardSlider = card.querySelector('.card-slider');
        var cardSliderFunc = new Splide(cardSlider, {
            type      : 'fade',
            rewind    : true,
            pagination: true,
            arrows    : false,
            height: 210,
            breakpoints: {
                1100: {
                    height: 190,
                },
                992: {
                    height: 170,
                },
                668: {
                    height: 170,
                },
            }
        } );

        var cardSliderHover = card.querySelector('.card-slider-hover');
        var cardSliderHoverFunc = new Splide(cardSliderHover, {
            type      : 'fade',
            rewind    : true,
            pagination: true,
            arrows    : false,
            height: 210,
            breakpoints: {
                1100: {
                    height: 190,
                },
                992: {
                    height: 170,
                },
                668: {
                    height: 170,
                },
            }
        } );
    
        cardSliderFunc.sync( cardSliderHoverFunc );
        cardSliderFunc.mount();
        cardSliderHoverFunc.mount();
        
    }
}

//select
const selects = document.querySelectorAll('.select');

for (const select of selects) {
    var config = {
        create: false,
    };
    new TomSelect(select,config);
}

//select-w-icon
const IconSelects = document.querySelectorAll('.select-w-icon');

for (const IconSelect of IconSelects) {
    var config = {
        create: false,
        render: {
            option: function (data, escape) {
                return `<div><span class="select__icon" style="${data.color}"></span>${data.text}</div>`;
            },
            item: function (item, escape) {
                return `<div><span class="select__icon" style="${item.color}"></span>${item.text}</div>`;
            }
        }
    };
    new TomSelect(IconSelect,config);
}

//tabs
var tabNavs = document.querySelectorAll(".tab-btn");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = this.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
        var contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("is-active");
            tabPanes[j].classList.add("is-active"); 
        } else {
            tabNavs[j].classList.remove("is-active");
            tabPanes[j].classList.remove("is-active");
        }
        };
    });
}

//rating
if(document.querySelectorAll(".estimate__star").length) {
    let stars = document.querySelectorAll(".estimate__star");
    document.querySelector(".estimate").addEventListener("click", starRating);

    function starRating(e) {
        
        stars.forEach((e) => e.classList.remove("is-active"));
            

        const i = [...stars].indexOf(e.target);
        if (i > -1) {
            stars[i].classList.add("is-active");
        }
    }
}

//reviwe-dropdown
var acc = document.getElementsByClassName("reviwe__dropdown-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(e) {
        e.preventDefault();

        var container = this.closest('.reviwe__bottom');

        this.classList.toggle("is-opened");
        container.classList.toggle("is-opened");

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

//filter-dropdown
var filterDropdownBtn = document.getElementsByClassName("filter__dropdown-btn");
var i;

for (i = 0; i < filterDropdownBtn.length; i++) {
    filterDropdownBtn[i].addEventListener("click", function(e) {
        e.preventDefault();

        this.classList.toggle("is-opened");

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

//filter__link-more
var filterDropdownBtn = document.getElementsByClassName("filter__link-more");
var i;

for (i = 0; i < filterDropdownBtn.length; i++) {
    filterDropdownBtn[i].addEventListener("click", function(e) {
        e.preventDefault();

        this.classList.toggle("is-opened");
        var dropdownContainer = this.closest(".filter__dropdown");

        var panel = this.previousSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            dropdownContainer.style.maxHeight = dropdownContainer.scrollHeight + panel.scrollHeight + "px";
        } 
    });
}

//range-slider
var stepsSliderContainers = document.querySelectorAll('.range-container');

stepsSliderContainers.forEach(function (stepsSliderContainer) {
        var stepsSlider = stepsSliderContainer.querySelector('.range-slider');
        var input0 = stepsSliderContainer.querySelector('.input-from');
        var input1 = stepsSliderContainer.querySelector('.input-to');
        var inputs = [input0, input1];
        var rangeMin = Number(stepsSlider.getAttribute('data-min'));
        var rangeMax = Number(stepsSlider.getAttribute('data-max'));
        var startMin = Number(stepsSlider.getAttribute('data-start-min'));
        var startMax = Number(stepsSlider.getAttribute('data-start-max'));
        var step = Number(stepsSlider.getAttribute('data-step'));
        
        noUiSlider.create(stepsSlider, {
            start: [startMin, startMax],
            step: step,
            connect: true,
            range: {
                'min': [rangeMin],
                'max': [rangeMax]
            },
            format: wNumb( { decimals: 0 })
        });

        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });
        // Listen to keydown events on the input field.
        inputs.forEach(function (input, handle) {
        
            input.addEventListener('change', function () {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });
        
        });
});

//filter
if(document.querySelectorAll(".btn-filter-mobile").length) {
    var filterBtn = document.querySelector('.btn-filter-mobile');
    var filter = document.querySelector('.catalog-sidebar');
    var overlay = document.getElementById('overlay');
    var filterClose = document.querySelector('.catalog-sidebar__close');
    
    filterBtn.addEventListener('click', function(e){
        e.preventDefault();
    
        filter.classList.add('is-opened');
        overlay.classList.add('is-opened');
        document.body.classList.add('body-overflow');
    });
    
    overlay.addEventListener('click', function(){
        filter.classList.remove('is-opened');
        overlay.classList.remove('is-opened');
        document.body.classList.remove('body-overflow');
    });
    
    filterClose.addEventListener('click', function(e){
        e.preventDefault();
    
        filter.classList.remove('is-opened');
        overlay.classList.remove('is-opened');
        document.body.classList.remove('body-overflow');
    });

}

//catalog-nav-mobile
var filterDropdownBtn = document.getElementsByClassName("catalog-nav__more-mobile");
var i;

for (i = 0; i < filterDropdownBtn.length; i++) {
    filterDropdownBtn[i].addEventListener("click", function(e) {
        e.preventDefault();

        this.classList.toggle("is-opened");

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

//link-modal-more
var filterDropdownBtn = document.getElementsByClassName("link-modal-more");
var i;

for (i = 0; i < filterDropdownBtn.length; i++) {
    filterDropdownBtn[i].addEventListener("click", function(e) {
        e.preventDefault();

        var dropdownContainer = this.closest(".modal-sidebar__row");

        var panel = dropdownContainer.querySelector('.modal-sidebar__dropdown');

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

//modal-sidebar
const modalBtnItems = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal-sidebar');
const modalsClose = document.querySelectorAll('.modal-sidebar__close');
var overlay = document.getElementById('overlay');

for (const modalBtn of modalBtnItems) {
    modalBtn.addEventListener('click', function(event) {
        event.preventDefault();

        for (const modal of modals) {
            modal.classList.remove('modal--active');
            overlay.classList.remove('is-opened');
            document.body.classList.remove('body-overflow');
        }

        const modalActive = document.getElementById(this.getAttribute('href')); 
        
        modalActive.classList.add('is-active');
        modalActive.style.top = window.pageYOffset + 'px';
        overlay.classList.add('is-opened');
        document.body.classList.add('body-overflow');
    });
}

for (const modalClose of modalsClose) {
    modalClose.addEventListener('click', function(event) {
        event.preventDefault();

        for (const modal of modals) {
            modal.classList.remove('is-active');
            overlay.classList.remove('is-opened');
            document.body.classList.remove('body-overflow');
        }
    });
}

overlay.addEventListener('click', function(){
    overlay.classList.remove('is-opened');
        
    for (const modal of modals) {
        modal.classList.remove('is-active');
        document.body.classList.remove('body-overflow');
    }
});

//fixed-product-previve
if(document.querySelectorAll(".product-previwe").length) {
    var container = document.querySelector(".modal-sidebar__inner");
    var containerImg = document.querySelector(".modal-sidebar__img");
    var previwe = document.querySelector(".product-previwe");
    var fixed = containerImg.offsetHeight;

    container.onscroll = function() {Fixed()};
    function Fixed() {
        console.log(fixed, container.scrollTop)

        if (container.scrollTop > fixed) {
            previwe.classList.add("is-active");
            
        } else {
            previwe.classList.remove("is-active");
        }
    }
}

//mobile-navbar 
var Navs = document.querySelectorAll(".mobile-navbar__btn");
var Panes = document.querySelectorAll(".mobile-navbar__item");
var overlay = document.getElementById("overlay");

for (var i = 0; i < Navs.length; i++) {

    Navs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");
    filter.classList.remove('is-opened');

    for (const modal of modals) {
        modal.classList.remove('is-active');
        overlay.classList.remove('is-opened');
        document.body.classList.remove('body-overflow');
    }

    for (var j = 0; j < Navs.length; j++) {
        var contentAttr = Panes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
            Navs[j].classList.toggle("is-active");
            Panes[j].classList.toggle("is-active");
            
            if (Panes[j].classList.contains('is-active')) {
                overlay.classList.add('is-opened');
            }
            else {
                overlay.classList.remove('is-opened');
            }
        } else {
            Navs[j].classList.remove("is-active");
            Panes[j].classList.remove("is-active");
        }
        };
    });
}

overlay.addEventListener('click', function(){
    overlay.classList.remove('is-opened');
    for (var i = 0; i < Navs.length; i++) {
        Navs[i].classList.remove("is-active");
        Panes[i].classList.remove("is-active");
    }
});

//phone-nav
var phoneNavs = document.querySelectorAll(".phone-nav__link");
var phonePanes = document.querySelectorAll(".phone-tab");

for (var i = 0; i < phoneNavs.length; i++) {

    phoneNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < phoneNavs.length; j++) {
        var contentAttr = phonePanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
            phoneNavs[j].classList.add("is-active");
            phonePanes[j].classList.add("is-active");
        } else {
            phoneNavs[j].classList.remove("is-active");
            phonePanes[j].classList.remove("is-active");
        }
        };
    });
}

//zoomslider
if(document.querySelectorAll(".zoom-slider").length) {
    
    var zoomMain = new Splide( '.zoom-slider', {
        rewind    : true,
        pagination: false,
        arrows    : true,
        type: "fade",
        breakpoints : {
            768: {
                pagination: true,
            }
        },
    } );

    var zoomThumbnails = new Splide( '.zoom-thumbs-slider', {
        perPage: 6,
        gap : 23,
        pagination  : false,
        arrows    : false,
        isNavigation: true,
        rewind    : true,
        breakpoints: {
            1100: {
                perPage: 5,
                gap: 15,
            },
            992: {
                perPage: 4,
                gap: 15,
            },
        }
    } );
}

//modalZoom
const modalZoomBtns = document.querySelectorAll('.modal-btn-zoom');
const zoomModals = document.querySelectorAll('.modal-zoom');
const modalsZoomClose = document.querySelectorAll('.zoom-close');
var overlay = document.getElementById('overlay');

for (const modalZoomBtn of modalZoomBtns) {
    modalZoomBtn.addEventListener('click', function(event) {
        event.preventDefault();

        zoomMain.sync( zoomThumbnails );
        zoomMain.mount();
        zoomThumbnails.mount();

        for (const zoomModal of zoomModals) {
            zoomModal.classList.remove('is-active');
            overlay.classList.remove('is-opened');
            document.body.classList.remove('body-overflow');
        }

        const modalActive = document.getElementById(this.getAttribute('href')); 
        
        modalActive.classList.add('is-active');
        overlay.classList.add('is-opened');
        document.body.classList.add('body-overflow');
    });
}

for (const modalZoomClose of modalsZoomClose) {
    modalZoomClose.addEventListener('click', function(event) {
        event.preventDefault();
        zoomMain.destroy();
        zoomThumbnails.destroy();

        for (const zoomModal of zoomModals) {
            zoomModal.classList.remove('is-active');
            document.body.classList.remove('body-overflow');

            for (const modal of modals) {
                if (!modal.classList.contains('is-active')) {
                    overlay.classList.remove('is-opened');
                }
            }
        }
    });
}
