document.getElementById('sim').addEventListener('click', function() {
    const celAleatorio = numeroAleatorio();
    alert('Meu número é: ' + celAleatorio);
});

document.getElementById('nao').addEventListener('click', function() {
    randon(this);
});

function numeroAleatorio() {
    const areaCode = Math.floor(Math.random() * 90) + 500; 
    const number = Math.floor(100000000 + Math.random() * 900000000); 
    return `(${areaCode}) ${number}`;
}

function randon(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    
    const randomX = Math.random() * (maxX - 100) + 100; 
    const randomY = Math.random() * (maxY - 100) + 100; 

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}