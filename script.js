fetch('data/janvier.json')
  .then(response => response.json())
  .then(videos => {
    const calendar = document.getElementById('calendar');

    videos.forEach((url, index) => {
      const day = document.createElement('div');
      day.classList.add('day');
      day.innerText = index + 1;
      day.addEventListener('click', () => openLightbox(url));
      calendar.appendChild(day);
    });
  });

const lightbox = document.getElementById('lightbox');
const player = document.getElementById('vimeoPlayer');
const closeBtn = document.getElementById('closeBtn');

function openLightbox(videoURL) {
  player.src = videoURL;
  lightbox.classList.remove('hidden');
}

closeBtn.onclick = () => {
  player.src = '';
  lightbox.classList.add('hidden');
};
