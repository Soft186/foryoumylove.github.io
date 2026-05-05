document.addEventListener('DOMContentLoaded', function() {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const playMusicBtn = document.getElementById('playMusicBtn');
    const musicIframe = document.getElementById('video-music');

    // 播放音樂的函式
    function startMusic() {
        if (musicIframe) {
            musicIframe.src = "https://www.youtube.com/embed/VRpzJabYlQQ?autoplay=1&mute=0";
        }
    }

    submitPassword.addEventListener('click', function() {
        if (passwordInput.value.toLowerCase() === 'kitty0506') { 
            passwordModal.style.opacity = '0';
            setTimeout(() => {
                passwordModal.style.display = 'none';
                welcomeScreen.style.display = 'flex';
                
                setTimeout(() => {
                    welcomeScreen.style.opacity = '0';
                    setTimeout(() => {
                        welcomeScreen.style.display = 'none';
                        mainContent.style.display = 'block';
                    }, 800);
                }, 2500);
            }, 500);
        } else {
            passwordInput.placeholder = 'Try again...';
            passwordInput.value = '';
        }
    });

    // 點擊音樂按鈕時播放
    playMusicBtn.addEventListener('click', function() {
        startMusic();
        this.innerHTML = "🎵 Playing...";
        this.style.backgroundColor = "#ff4d4d";
    });

    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitPassword.click();
    });

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) content.classList.add('active');
            });
        });
    });

    const loveLetter = document.getElementById('loveLetter');
    if (loveLetter) {
        loveLetter.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    }
});
