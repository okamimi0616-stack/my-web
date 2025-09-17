// うんこが降ってくるアニメーション
const poopContainer = document.getElementById('poop-fall-container');
function createPoop() {
  const poop = document.createElement('div');
  poop.className = 'poop';
  poop.textContent = '💩';
  poop.style.left = Math.random() * 90 + 'vw';
  poop.style.animationDuration = (1.8 + Math.random() * 1.5) + 's';
  poopContainer.appendChild(poop);
  setTimeout(() => poop.remove(), 2500);
}
setInterval(createPoop, 600);

// 再生ボタン
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<svg viewBox="0 0 60 60"><rect x="15" y="10" width="10" height="40"/><rect x="35" y="10" width="10" height="40"/></svg>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<svg viewBox="0 0 60 60"><polygon points="15,10 50,30 15,50"/></svg>';
  }
});

// いいね機能
const likeBtn = document.getElementById('likeBtn');
const likeIcon = document.getElementById('likeIcon');
const likeCount = document.getElementById('likeCount');
let liked = false;
let count = 0;
likeBtn.addEventListener('click', () => {
  liked = !liked;
  likeIcon.textContent = liked ? '❤️' : '♡';
  count += liked ? 1 : -1;
  if (count < 0) count = 0;
  likeCount.textContent = count;
});

// コメント機能
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');
commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = commentInput.value.trim();
  if (text) {
    const li = document.createElement('li');
    li.textContent = text;
    commentList.appendChild(li);
    commentInput.value = '';
  }
});