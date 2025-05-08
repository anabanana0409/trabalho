const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Adiciona efeito de hover via JavaScript para melhor compatibilidade
botoes.forEach(botao => {
    botao.addEventListener('mouseenter', function() {
        if(!this.classList.contains('ativo')) {
            this.style.backgroundColor = 'var(--rosa-escuro)';
        }
    });
    
    botao.addEventListener('mouseleave', function() {
        if(!this.classList.contains('ativo')) {
            this.style.backgroundColor = 'var(--botao-inativo)';
        }
    });
});