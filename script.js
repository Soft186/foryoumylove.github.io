document.addEventListener('DOMContentLoaded', function() {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');

    submitPassword.addEventListener('click', function() {
        // 如果想改密碼，請改下面這一行
        if (passwordInput.value.toLowerCase() === 'hehe') { 
            
            // 重要：透過 iframe 啟動音樂
            const musicIframe = document.getElementById('video-music');
            if (musicIframe) {
                // 使用 YouTube 嵌入式網址並啟動 autoplay
                musicIframe.src = "https://www.youtube.com/embed/VRpzJabYlQQ?autoplay=1&mute=0";
            }

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
            passwordInput.value = '';
            passwordInput.placeholder = 'Try again...';
            passwordInput.style.borderColor = '#ff4d4d';
        }
    });

    // 支持 Enter 鍵
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitPassword.click();
    });

    // Tab 切換
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

    // 信封點擊
    const loveLetter = document.getElementById('loveLetter');
    if (loveLetter) {
        loveLetter.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    }
});
