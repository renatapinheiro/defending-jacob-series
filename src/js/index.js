const carouselButtons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image')

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        const selectedButton = document.querySelector('.selected');
        selectedButton.classList.remove('selected');

        button.classList.add('selected')

        const activeImage = document.querySelector('.active');
        activeImage.classList.remove('active');

        images [index].classList.add('active');

        let video = document.querySelector(".active");
            video.play();
            video.loop = true;
            image.classList.remove('active');
    })
})