
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomesEscolhidos = ["Fran", "Franciele"];
    const nomeDigitado = document.getElementById('name').value.trim();

    if (nomesEscolhidos.includes(nomeDigitado)) {
        document.getElementById('question').style.display = 'block';
        document.getElementById('nameForm').style.display = 'none';
    } else {
        alert('Sai dae feia.');
    }
});

function handleAnswer(resposta) {
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const loveGif = document.getElementById('loveGif');
    const angryGif = document.getElementById('angryGif');
    const musicPlayer = document.getElementById('musicPlayer');
    const youtubePlayer = document.getElementById('youtubePlayer');
    const retryButton = document.getElementById('retryButton');

    if (resposta === 'sim') {
        resultText.innerText = 'Também te amo delícia';
        loveGif.src = 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif'; // URL do GIF
        loveGif.style.display = 'block';
        youtubePlayer.src = 'https://www.youtube.com/embed/nqJlNCs4qbI?autoplay=1'; // Substitua VIDEO_ID pelo ID do vídeo
        musicPlayer.style.display = 'block';
        retryButton.style.display = 'none';
    } else if (resposta === 'não') {
        resultText.innerText = 'Resposta incorreta, responde certo desgraça.';
        loveGif.style.display = 'none';
        angryGif.src = 'https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif'; // URL do GIF bravo
        angryGif.style.display = 'block';
        musicPlayer.style.display = 'none';
        retryButton.style.display = 'inline-block';
    }

    resultDiv.style.display = 'block';
    document.getElementById('question').style.display = 'none';
}

function retry() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}
