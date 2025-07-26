function showLove() {
  document.getElementById("popup").style.display = "block";
}

const text = `ever since i met you, every day has felt much much lighter. you've brought so much joy and happiness into my life, and i'm so grateful to have you in it.

i made this website to keep a piece of you close to me. i hope you know that i love you so so much C: always and forever!!!`;
let i = 0;
const speed = 30;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;

const btn = document.getElementById('runaway-btn');
let shakeLevel = 1;
const rainbowColors = ['#ff69b4', '#ffb347', '#ffff66', '#baffc9', '#85e3ff', '#d3a4ff'];

function moveButton() {
  shakeLevel++;
  if (shakeLevel > 10) shakeLevel = 10;

  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);

  btn.style.transition = 'all 0.5s ease';
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.animation = `intense-shake 0.3s ${shakeLevel}`;

  spawnHeart(x + btn.offsetWidth / 2, y + btn.offsetHeight / 2);
  clickSound.play();
  
  setTimeout(() => {
    btn.style.animation = '';
  }, 300);
}

function spawnHeart(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const messages = [
    'i wuv you', 'cutie ʚ♡ɞ', 'babyyyy', 'mine >:3', 'mwa mwa mwa',
    'kyutipaiii', 'stay w me forever', 'my wifeyyy', 'hai kateykatee',
    'ur so pretty :(((', 'angel on earth', 'i love youuu'
  ];

  heart.textContent = messages[Math.floor(Math.random() * messages.length)];
  const color = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  heart.style.color = color;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

btn.addEventListener('mouseover', moveButton);
btn.addEventListener('click', moveButton);

// 💕 PWA install functionality
let deferredPrompt;

const clickSound = new Audio('/chomp.wav');
clickSound.volume = 0.5; // optional, set volume to taste :3

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-btn').style.display = 'inline-block';
});
  
function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✨ nopi installed the app!');
      }
      deferredPrompt = null;
      document.getElementById('install-btn').style.display = 'none';
    });
  }
}
