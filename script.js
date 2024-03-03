const sidebar = document.querySelector('.sidebar')
    const bars = document.querySelector('.fa-bars')
    const times = document.querySelector('.fa-times')

    bars.addEventListener("click",()=>{
        sidebar.style.left = '0px';
    })

    times.addEventListener("click",()=>{
        sidebar.style.left = '-100%';
    })