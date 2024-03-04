const sidebar = document.querySelector('.sidebar')
    const bars = document.querySelector('.fa-bars')
    const times = document.querySelector('.fa-times')

    bars.addEventListener("click",()=>{
        sidebar.style.left = '0px';
    })

    times.addEventListener("click",()=>{
        sidebar.style.left = '-100%';
    })



    // acordino
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



//loader
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});