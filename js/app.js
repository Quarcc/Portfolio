const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var getSgTime = function(){
    document.getElementById("sgTime").innerHTML = new Date().toLocaleString("en-SG",{timeZone:'Asia/Singapore',timeStyle:'medium',hourCycle:'h24'});
}
getSgTime();
setInterval(getSgTime, 1000);