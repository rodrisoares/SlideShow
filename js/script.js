let slideAtual = 0; // slide que está sendo mostrado atualmente
let sliderWidth = document.querySelector('.slider_width');
let totalSlides = 0;
let pausado = false;

// Definir altura dos controles
document.querySelector('.slider_controls').style.height =
    `${document.querySelector('.box').clientHeight}px`;

function inicio() {
    // colocando
    let itens = '';
    for (let i = 0; i < imgSlide.length; i++) {
        itens += `<div class="slider_item"></div>`;
    }
    sliderWidth.innerHTML = itens;

    totalSlides = document.querySelectorAll('.slider_item').length;
    // definindo a largura baseado na quantidade de fotos
    sliderWidth.style.width = `calc(100vw * ${totalSlides})`;
    colocarFotos();
}

function colocarFotos() {
    let slides = document.querySelectorAll('.slider_item');
    for (let i = 0; i < imgSlide.length; i++) {
        slides[i].style.backgroundImage = `url(img/${imgSlide[i].url})`;
        slides[i].innerHTML = `<div class="info">
                                    <h1>${imgSlide[i].titulo}</h1>
                                    <h2>${imgSlide[i].local}</h2>
                                </div>`;
    }
}

function goPrev() {
    slideAtual = slideAtual > 0 ? slideAtual - 1 : totalSlides - 1;
    updateMargin();
}

function goNext() {
    slideAtual = slideAtual === (totalSlides - 1) ? slideAtual = 0 : slideAtual + 1;
    updateMargin();
}

function pause(){
    trocarIcone = document.querySelector('.iconeMeio');
    if(!pausado){
        clearInterval(intervalo);
        pausado = true;
        trocarIcone.innerHTML = 'play_arrow'; 
    } else{
        intervalo = setInterval(goNext, 4000);
        pausado = false;
        trocarIcone.innerHTML = 'pause';
    }
}

function updateMargin() {
    let sliderItem = document.querySelector('.slider_item').clientWidth;
    let newMargin = (slideAtual * sliderItem);
    sliderWidth.style.marginLeft =
        `-${newMargin}px`;
}

inicio();
intervalo = setInterval(goNext, 4000); // passa de slide automáticamente a cada 4 segundos