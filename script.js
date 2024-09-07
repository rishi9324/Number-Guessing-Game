let number = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        function submitGuess() {
            const guessInput = document.getElementById('guess');
            const guess = parseInt(guessInput.value);
            attempts++;
            let result;
            if (guess > number) {
                result = "Too high! Try again.";
                document.getElementById('result').classList.remove("text-success");
                document.getElementById('result').classList.add("text-danger");
            } else if (guess < number) {
                result = "Too low! Try again.";
                document.getElementById('result').classList.remove("text-success");
                document.getElementById('result').classList.add("text-warning");
            } else {
                result = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
                document.getElementById('result').classList.remove("text-danger", "text-warning");
                document.getElementById('result').classList.add("text-success");
                number = Math.floor(Math.random() * 100) + 1;
                attempts = 0;
            }
            document.getElementById('result').innerText = result;
            guessInput.value = '';
            guessInput.focus();
        }
        document.getElementById('guess').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                submitGuess();
            }
        });