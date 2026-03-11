const wishes = [
    "Көктем мерекесі көңілдеріңізге қуаныш сыйлап, жүздеріңізге нұр шашсын!",
    "Әрқашан шаңырақтарыңыздың берекесі болым, үйіңізден жылылық кетпесін.",
    "Жанарың әрдайым нұр шашып, жүзің күндей күлімдеп, жүрегің көктемдей жайнасын!",
    "Өмірдің бар асылын, бақытын, шаттығын тілеймін!",
    "Көктемнің гүліндей құлпырып, әсемдіктің иесі болып қала беріңіз!",
    "Сізге зор денсаулық, баянды бақыт, көтеріңкі көңіл-күй тілейміз!",
    "Әлемнің нұры, өмірдің гүлі болып жүре беріңіз!",
    "Жүрегіңіз жылуға, құшағыңыз гүлге толсын!",
    "Мерекелік көңіл-күй серігіңіз болсын!"
];

const wishDisplay = document.getElementById('random-wish');
const wishBtn = document.getElementById('generate-wish-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const forgiveStatus = document.getElementById('forgive-status');

let yesScale = 1;
let noScale = 1;
let noClickCount = 0;
const maxNoClicks = 5;

const noPhrases = [
    "Сенімдісіз бе? 😢",
    "Өтінеміз! 🙏",
    "Ойланыңызшы... 💔",
    "Жоқ түймесі бұзылды! 🛠️",
    "Ия-ны басу керек! 🔥",
    "Болды, басқа амал жоқ! 😎"
];

if (yesBtn && noBtn) {
    yesBtn.addEventListener('click', () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        forgiveStatus.innerHTML = "🎉 РАХМЕЕЕЕТ! Сіздер ең жақсысыздар! ❤️<br><small>Енді төменге түсіп, тілек алыңыз!</small>";
        noBtn.style.display = 'none';
        yesBtn.style.transform = 'scale(1.2)';
        yesBtn.textContent = "РАХМЕТ! ❤️";
        yesBtn.disabled = true;
    });

    noBtn.addEventListener('click', () => {
        noClickCount++;

        if (noClickCount >= maxNoClicks) {
            noBtn.style.display = 'none';
            yesBtn.style.transform = `scale(${yesScale + 0.5})`;
            yesBtn.style.boxShadow = "0 0 30px rgba(255, 77, 109, 0.5)";
            return;
        }

        yesScale += 0.4;
        noScale -= 0.15;

        yesBtn.style.transform = `scale(${yesScale})`;
        noBtn.style.transform = `scale(${noScale})`;

        noBtn.textContent = noPhrases[noClickCount] || "Жоқ";

        // Add a little wiggle to no button
        noBtn.style.position = 'relative';
        noBtn.style.left = `${(Math.random() - 0.5) * 20}px`;
        noBtn.style.top = `${(Math.random() - 0.5) * 20}px`;
    });
}

function getRandomWish() {
    if (!wishDisplay) return;
    wishDisplay.style.opacity = 0;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        wishDisplay.textContent = wishes[randomIndex];
        wishDisplay.style.opacity = 1;
        wishDisplay.style.transition = 'opacity 0.5s ease';
    }, 300);
}

if (wishBtn) {
    wishBtn.addEventListener('click', getRandomWish);
}
