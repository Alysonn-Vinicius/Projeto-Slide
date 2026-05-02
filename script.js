
const c = (el) => document.querySelector(el);
//var p/controlar estados
let currentSlides = 0;
let totalImgs = document.querySelectorAll('.slide--item').length; //pegar quantas imgs


c('.slider--width').style.width=`calc(100vw * ${totalImgs})`

//ajustando altura dos botoes

c('.sliders-controls').style.height = `${document.querySelector('.slider').clientHeight}px`; /*nao ntendi muito bem, mas ao que parece ele pega a altura de slider, e como slider esta com flex 1, que pega o resto da altura o header */



//events
c('.prev').addEventListener('click', prev);
c('.next').addEventListener('click', next);

//functions
function prev(){
    currentSlides--;
    if(currentSlides < 0){  //se ja tver no primeiro e voltar
        currentSlides = totalImgs - 1;  //vai pegar o ultimo na tela
    }
    //apos isto, vamos chamar a funcao q vai mudar a margin-left
    uptadeMargin();
}
function next(){
    currentSlides++;
    if(currentSlides > (totalImgs - 1)){
        currentSlides = 0;//voltar pro primeiro se acbar os slides
    }
    uptadeMargin();
}


function uptadeMargin(){
    let sliderItemWidth = document.querySelector('.slide--item').clientWidth; //pegando largura do slider
    let newMargin = (currentSlides * sliderItemWidth); //pega o width da tela e * por valor de currenctSlide

    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;  
}

//setInterval(next, 3000)