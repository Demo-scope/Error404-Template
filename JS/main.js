// بسم الله الرحمن الرحيم 



// for skills section
let Spans = document.querySelectorAll(".our-skills .contaner .skills .box .progress span")
let SkillsSection = document.querySelector(".our-skills")


// state section -> exsept first if cindition
let nums = document.querySelectorAll(".state .contaner .box .num")
let section = document.querySelector(".state")
let started = false


window.onscroll = function() {
    if (window.scrollY >= SkillsSection.offsetTop -200) {
        Spans.forEach(element => {
            element.style.width = element.dataset.width
        });

        if (section.offsetTop <= window.scrollY) {
            if(!started){
                nums.forEach(element => {
                    StartCount(element)
                });  
                started = true;
            }
        }
    }
}


function StartCount(ele) {
    let goal = ele.dataset.goal

    let count = setInterval(() => {
        ele.textContent++
        if (ele.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}



// latest-events section
let CounDownDate = new Date("2022/12/31 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime(); // => from time start with maill second 
    let dateDiff = CounDownDate - dateNow

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) // العدد الصحيح الناتج من القسمه هو عدد الأيام
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) // باقي القسمه هو عدد الساعات 
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60 ))
    let seconds = Math.floor(dateDiff % (1000 * 60 ) / (1000))

    document.querySelector(".latest-events .days").innerHTML = days < 10 ? `0${days}`: days ;
    document.querySelector(".latest-events .hours").innerHTML = hours < 10 ? `0${hours}`: hours ;
    document.querySelector(".latest-events .minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes ;
    document.querySelector(".latest-events .seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds ;
    
}, 1000)