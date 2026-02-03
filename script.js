/* NAVBAR */

function toggleMenu(){

    document.getElementById("menu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
    document.getElementById("toggle").classList.toggle("active");

}

/* BOTÕES */

const nomes = [
"Felipe","Otto","Pam","Panda bugado","Cajoma","Lucca","","Repolho","","","","Buzz","","Fred","","","","Senac","","","","","Pablo","","","","","Mateus","","","","Carlinhos","","","","","Tom Hanks",
];

const container = document.getElementById("container");

const cores = ["ciano","verde","amarelo","vermelho"];

nomes.forEach(nome => {

    const botao = document.createElement("button");

    botao.textContent = nome;

    let estado = 0;

    botao.addEventListener("click", () => {

        botao.classList.remove(...cores);

        botao.classList.add(cores[estado]);

        estado++;

        if(estado >= cores.length){
            estado = 0;
        }

    });

    container.appendChild(botao);

});
