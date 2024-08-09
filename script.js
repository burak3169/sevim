document.addEventListener('DOMContentLoaded', () => {
    const passwordContainer = document.getElementById('password-container');
    const contentContainer = document.getElementById('content-container');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const errorMessage = document.getElementById('error-message');

    const correctPassword = "sevim";  // Burada parolayı belirleyin

    passwordSubmit.addEventListener('click', () => {
        if (passwordInput.value === correctPassword) {
            passwordContainer.style.display = 'none';
            contentContainer.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Mevcut sorular ve diğer işlemler burada kalacak
    const questions = document.querySelectorAll('.questions .question');
    const result = document.querySelector('.result');
    const mainTitle = document.getElementById('main-title');
    const dreams = document.querySelector('.dreams');
    const finalMessage = document.querySelector('.final-message');
    const acceptButton = document.getElementById('accept-button');
    let currentQuestion = 0;

    questions[currentQuestion].style.display = 'block';

    questions.forEach((question, index) => {
        const buttons = question.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                question.style.display = 'none';
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    questions[currentQuestion].style.display = 'block';
                } else {
                    mainTitle.style.display = 'none';
                    result.style.display = 'block';
                    setTimeout(() => {
                        result.style.opacity = '0';
                        dreams.style.display = 'block';
                    }, 3000);
                }
            });
        });
    });

    acceptButton.addEventListener('click', () => {
        dreams.style.display = 'none';
        finalMessage.style.display = 'block';
        confetti();
    });

    function confetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});
