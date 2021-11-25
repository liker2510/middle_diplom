const timer = (deadline) => {
    const timerdays = document.querySelectorAll('.timer-days');
    const timerHours = document.querySelectorAll('.timer-hours');
    const timerMinutes = document.querySelectorAll('.timer-minutes');
    const timerSeconds = document.querySelectorAll('.timer-seconds');

    const getTimeRemaning = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        // let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds }

    }
    const zero = (x) => {
        if (x >= 0 && x < 10) {
            return '0' + x;
        } else {
            return x;
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaning();
        timerdays.forEach(index => {
            index.textContent = zero(getTime.days);
        })
        timerHours.forEach(index => {
            index.textContent = zero(getTime.hours);
        })
        timerMinutes.forEach(index => {
            index.textContent = zero(getTime.minutes);
        })
        timerSeconds.forEach(index => {
            index.textContent = zero(getTime.seconds);
        })

        if (getTime.timeRemaining < 0) {
            clearInterval(idInterval);
            timerdays.forEach(index => {
                index.textContent = "00";
            })
            timerHours.forEach(index => {
                index.textContent = "00";
            })
            timerMinutes.forEach(index => {
                index.textContent = "00";
            })
            timerSeconds.forEach(index => {
                index.textContent = "00";
            })
        }
    }
    let idInterval = setInterval(() => {
        updateClock()
    }, 1000);
}

export default timer