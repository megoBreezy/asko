//text-tabs
if(document.querySelectorAll('.text-nav__link').length) {
    var textTabNavs = document.querySelectorAll(".text-nav__link");
    var textTabPanes = document.querySelectorAll(".text-pane");
    var textTabHolder = document.querySelector(".text-nav__holder");
    
    for (var i = 0; i < textTabNavs.length; i++) {
    
        textTabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        var activeTabAttr = this.getAttribute("data-text-tab");
        var tabInner = this.innerHTML;
        var tabContainer = this.closest('.text-nav');
        var tabNavsContainer = tabContainer.querySelector('.text-nav__inner');
    
        for (var j = 0; j < textTabNavs.length; j++) {
            var contentAttr = textTabPanes[j].getAttribute("data-text-tab-content");
    
            if (activeTabAttr === contentAttr) {
                textTabNavs[j].classList.add('is-active');
                textTabPanes[j].classList.add('is-active'); 
                textTabHolder.innerHTML = tabInner;
                tabContainer.classList.remove('is-active');
                tabNavsContainer.style.maxHeight = null;
            } else {
                textTabNavs[j].classList.remove('is-active');
                textTabPanes[j].classList.remove('is-active');
            }
            };
        });
    }
    
    textTabHolder.addEventListener('click', function(){
        var tabContainer = this.closest('.text-nav');
        var tabNavsContainer = tabContainer.querySelector('.text-nav__inner');
        tabContainer.classList.toggle('is-active')
    
        if (tabNavsContainer.style.maxHeight){
            tabNavsContainer.style.maxHeight = null;
        } else {
            tabNavsContainer.style.maxHeight = tabNavsContainer.scrollHeight + "px";
        }
    });
}