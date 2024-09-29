const confettiSettings = { target: 'confetti-holder', max: 150, animate: true };
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

function updateTime() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let bday = new Date(currentYear, 9, 11); // October 11th (month is 0-indexed)

    // If this year's birthday has passed, set for next year
    if (now > bday) {
        bday = new Date(currentYear + 1, 9, 11);
    }

    const diff = bday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".day").textContent = days;
    document.querySelector(".hr").textContent = hr;
    document.querySelector(".min").textContent = mins;
    document.querySelector(".sec").textContent = sec;
}

setInterval(updateTime, 1000);