var swiper = new Swiper('.swiper', {
  CSSWidthAndHeight: true,
  slidesPerView:'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return'<span class="' + className + '"></span>';
    }    
  },
});
swiper.on('fromEdge', function (swiper) {
  var brandItems=document.querySelectorAll(".brand-item");
  if(brandItems && swiper.activeIndex!==0){
    for(var i=0;i<brandItems.length;i++){
      brandItems[i].style.removeProperty('margin-left');
    }
  }  
});
swiper.on('reachEnd', function () {
  var brandItems=document.querySelectorAll(".brand-item");
  if(brandItems){
    for(var i=0;i<brandItems.length;i++){
      brandItems[i].style.marginLeft="-65px";
    }
  }  
});
swiper = document.querySelector('.swiper').swiper;

