document.addEventListener('DOMContentLoaded', function() {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const playMusicBtn = document.getElementById('playMusicBtn');
    const musicIframe = document.getElementById('video-music');

    // 密碼驗證邏輯
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

    // 關鍵修正：點擊按鈕時「重新注入」最乾淨的 YouTube Embed 網址
    playMusicBtn.addEventListener('click', function() {
        // 使用最精簡的 Embed 網址格式
        const youtubeId = "VRpzJabYlQQ";
        musicIframe.src = "https://www.youtube.com/embed/" + youtubeId + "?autoplay=1&controls=1&enablejsapi=1";
        
        this.innerHTML = "🎵 Loading & Playing...";
        this.style.backgroundColor = "#ff4d4d";
        
        // 為了保證萬無一失，1秒後再檢查一次按鈕文字
        setTimeout(() => {
            this.innerHTML = "🎵 Music Started";
        }, 2000);
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
