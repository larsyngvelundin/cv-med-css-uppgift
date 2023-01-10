function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let clock = document.getElementById("clock");

async function updateClock() {
    while (true) {
        let today = new Date();
        let time = String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0')
        clock.innerHTML = time;
        await sleep(10000);
    }
}

updateClock();