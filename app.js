// Instead of waiting for a button click, just call the function
const confettiSettings = { target: 'confetti-holder', max: 150, animate: true };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


// function updateTime() {
//     const  now = new Date();
//     const currentyear = now.getFullYear();
//     let Bday = new Date(2023,11,10)
//     if (now > Bday) {
//         Bday = new Date(currentyear +1, 11, 31);
//     }
//         const diff = Bday - now;

//         const hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         const sec = Math.floor((diff % (1000 * 60)) / 1000);
        

 
//         document.querySelector(".day").textContent = days
//         document.querySelector(".hr").textContent = hr;
//         document.querySelector(".min").textContent = mins;
//         document.querySelector(".sec").textContent = sec;

   
// }


function updateTime() {
    const now = new Date();
    const currentyear = now.getFullYear();
    let Bday = new Date(2023, 9, 11);
    if (now > Bday) {
        Bday = new Date(currentyear + 1, 11, 10);
    }
    const diff = Bday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".day").textContent = days;
    document.querySelector(".hr").textContent = hr;
    document.querySelector(".min").textContent = mins;
    document.querySelector(".sec").textContent = sec;
}



setInterval(updateTime, 1000)