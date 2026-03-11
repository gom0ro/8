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

function getRandomWish() {
    wishDisplay.style.opacity = 0;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        wishDisplay.textContent = wishes[randomIndex];
        wishDisplay.style.opacity = 1;
        wishDisplay.style.transition = 'opacity 0.5s ease';
    }, 300);
}

wishBtn.addEventListener('click', getRandomWish);
