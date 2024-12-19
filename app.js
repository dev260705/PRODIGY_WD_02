        let timerDisplay = document.getElementById('timer');
        let startPauseBtn = document.getElementById('startPauseBtn');
        let lapBtn = document.getElementById('lapBtn');
        let stopBtn = document.getElementById('stopBtn');
        let lapsContainer = document.getElementById('lapsContainer');

        let timer = null;
        let startTime = 0;
        let elapsedTime = 0;
        let isRunning = false;

        
        startPauseBtn.addEventListener('click', () => {
            if (isRunning) {
                clearInterval(timer);
                isRunning = false;
                startPauseBtn.textContent = 'Start';
            } else {
                startTime = Date.now() - elapsedTime;
                timer = setInterval(updateTimer, 1000);
                isRunning = true;
                startPauseBtn.textContent = 'Pause';
            }
        });

        
        stopBtn.addEventListener('click', () => {
            clearInterval(timer);
            isRunning = false;
            elapsedTime = 0;
            timerDisplay.textContent = '00:00:00';
            startPauseBtn.textContent = 'Start';
            lapsContainer.innerHTML = '';
        });

       
        lapBtn.addEventListener('click', () => {
            if (isRunning) {
                const lapTime = timerDisplay.textContent;
                const lapElement = document.createElement('div');
                lapElement.classList.add('lap-item');
                lapElement.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
                lapsContainer.appendChild(lapElement);
            }
        });

        
        function updateTimer() {
            elapsedTime = Date.now() - startTime;
            let totalSeconds = Math.floor(elapsedTime / 1000);
            let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            let seconds = String(totalSeconds % 60).padStart(2, '0');
            timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

        }