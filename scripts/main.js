var hiddenTextLabel=document.querySelectorAll(".continuation__text");

function addCheckboxClickListener(hiddenTextLabel){
  var swiperShowAllBlock=hiddenTextLabel.parentElement;
  var checkbox=hiddenTextLabel.children[0];
  checkbox.addEventListener("change",function(){
    if(this.checked){
      hiddenTextLabel.style.transform="translateY(-50%) translateY(15px)";
      if(swiperWrapper) swiperWrapper.style.height="auto";
      this.nextElementSibling.nextSibling.textContent='Скрыть';
      this.parentElement.parentElement.style.position="relative";
    }
    else{
      hiddenTextLabel.style.removeProperty("transform");
      if(swiperWrapper) swiperWrapper.style.removeProperty("height");
      this.nextElementSibling.nextSibling.textContent=this.parentElement.getAttribute("defaultContent");
      this.parentElement.parentElement.style.removeProperty("position");
    }
  });
}

if(hiddenTextLabel.length>0){
  for(var i=0;i<hiddenTextLabel.length;i++){
    addCheckboxClickListener(hiddenTextLabel[i]);
  }
}

window.addEventListener("resize",function(event){
  if(window.innerWidth<768){
    if(swiperWrapper&&swiperWrapper.style.height) swiperWrapper.style.removeProperty("height");
    if(hiddenTextLabel) hiddenTextLabel.parentElement.style.removeProperty("position");
  }
  else{ 
    swiperWrapper.removeAttribute("style");
    if(swiperWrapper && !swiperWrapper.style.height && document.querySelector(".swiper__continuation .continuation__checkbox").checked){
      swiperWrapper.style.height="auto";
      hiddenTextLabel.parentElement.style.position="relative";
    }
  }
})