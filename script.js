const prev=document.getElementById('prev');
const next=document .getElementById('next');
const progress=document.getElementById('progress');
const circles=document.querySelectorAll(".circle");
 let  currentActive=1;
 let numberOfcircles=circles.length;
// next.addEventListener('click',()=>{
//    currentActive++;
//     prev.removeAttribute('disabled');
//     if(currentActive>numberOfcircles){
//         currentActive=numberOfcircles;
//     }
    
//     circles[currentActive-1].classList.add('active');
    
//     updateCss();
    
// })

// prev.addEventListener('click',()=>{
//     currentActive--;

//     next.removeAttribute('disabled');
//     if(currentActive<1){
//         currentActive=1;
//     }
//     circles[currentActive-1].classList.remove('active')
//     updateCss();
// })

// function updateCss(){
//     const widthxyz=(currentActive-1)/(numberOfcircles-1)*100;

//     progress.style.width=widthxyz+"%";
//     if(currentActive===numberOfcircles){
//         next.setAttribute("disabled",true);
//     }
//     if(currentActive===1){
//         prev.setAttribute('disabled',true);
//     }
// }
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const progress = document.getElementById("progress");
// const circles = document.querySelectorAll(".circle");

//let currentActive = 1;
//let numberOfCircles = circles.length;

next.addEventListener("click", () => {
  currentActive++;
  if(currentActive>numberOfcircles){
    currentActive= numberOfcircles;
  }
  console.log(currentActive);
  updateCSS();
})

prev.addEventListener("click", ()=>{
  currentActive--;
  if(currentActive<1){
    currentActive=1
  }
  console.log(currentActive);
  updateCSS();
})

function enableDisable(){
  if(currentActive===1){
    prev.disabled = true;
  }
  else if(currentActive === numberOfcircles){
    next.disabled=true;
  }
  else{
    prev.disabled= false;
    next.disabled= false;
  }
}
function updateCSS(){
    console.log("entered css");
  for(var i=0; i<numberOfcircles;i++){
    const circle = circles[i];

    if(i<currentActive){
      circle.classList.add("active")
    }
    else{
      circle.classList.remove("active");
    }
  }
  const activesxyz = document.querySelectorAll(".active");
  const widthxyz = (activesxyz.length-1) / (circles.length-1) *100;
  progress.style.width = widthxyz+"%";
  enableDisable();
}


