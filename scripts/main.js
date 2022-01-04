function addCheckboxClickListener(hiddenTextLabel){
  var checkbox=hiddenTextLabel.children[0];
  checkbox.addEventListener("change",function(){
    if(this.checked){
      hiddenTextLabel.style.transform="translateY(-50%) translateY(15px)";
      if(swiperWrapper) swiperWrapper.style.height="332px";
      this.nextElementSibling.nextSibling.textContent='Скрыть';
    }
    else{
      hiddenTextLabel.style.removeProperty("transform");
      if(swiperWrapper) swiperWrapper.style.removeProperty("height");
      this.nextElementSibling.nextSibling.textContent=this.parentElement.getAttribute("defaultContent");
    }
  });
}
var swiperWrapper=document.querySelector(".swiper-wrapper");
var hiddenTextLabel=document.querySelectorAll(".continuation__text");

if(hiddenTextLabel.length>0){
  for(var i=0;i<hiddenTextLabel.length;i++){
    addCheckboxClickListener(hiddenTextLabel[i]);
  }
}

window.addEventListener("resize",function(event){
    if(window.innerWidth<768){
      if(swiperWrapper&&swiperWrapper.style.height) swiperWrapper.style.removeProperty("height");
    }
    else if(swiperWrapper && !swiperWrapper.style.height && document.querySelector(".swiper__continuation .continuation__checkbox").checked){
      swiperWrapper.style.height="332px";
    }
  })