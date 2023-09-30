// let direita = document.querySelector('.pra-frente');
// let esquerda = document.querySelector(".pra-traz");

// let slides = document.querySelectorAll(".image-slider .slides .slide");

// let div_bolinhas = document.querySelector(".image-slider .bolinhas");
// let quant_bolinhas = 0

// let index = 0;

// while(quant_bolinhas<slides.length){
//     let div_bolinha = document.createElement("div");
//     div_bolinha.classList.add('bolinha');
//     div_bolinhas.appendChild(div_bolinha);
//     quant_bolinhas += 1;
// }
// let div_todas_bolinhas = document.querySelectorAll('.image-slider .bolinhas .bolinha');
// div_todas_bolinhas[index].classList.toggle('active');


// function virar_esquerda(){
    

//     slides[index].className = "slide meio_direita";
//     div_todas_bolinhas[index].classList.remove("active");
//     index -= 1;

//     if(index < 0){
//         index = slides.length - 1;
//     }

//     slides[index].className = "slide esquerda_meio";
//     div_todas_bolinhas[index].classList.add("active");
// }

// function virar_direita(){
    

//     slides[index].className = "slide meio_esquerda";
//     div_todas_bolinhas[index].classList.remove("active");
//     index += 1;

//     index = index%slides.length;
//     slides[index].className = "slide direita_meio";
//     div_todas_bolinhas[index].classList.add("active");
// }

// esquerda.addEventListener("click", virar_esquerda);
// direita.addEventListener("click", virar_direita);
