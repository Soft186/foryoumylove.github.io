document.addEventListener('DOMContentLoaded', function() {
    // 定義所有需要用到嘅元素
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');
    const bgMusic = document.getElementById('bg-music');

    /**
     * 解釋：
     * 瀏覽器唔准網頁無啦啦播聲，一定要有用家「撳過嘢」先得。
     * 所以我哋將播放音樂嘅 code 擺喺「撳 Enter 登入」嗰一下。
     */
    function handleLogin() {
        const password = passwordInput.value.toLowerCase();
        
        if (password === 'kitty0506') { 
            // 1. 啟動音樂
            if (bgMusic) {
                bgMusic.play();
            }

            // 2. 隱藏登入介面
            passwordModal.style.opacity = '0';
            setTimeout(() => {
                passwordModal.style.display = 'none';
                
                // 3. 顯示過場歡迎畫面
                welcomeScreen.style.display = 'flex';
                setTimeout(() => {
                    welcomeScreen.style.opacity = '0';
                    setTimeout(() => {
                        welcomeScreen.style.display = 'none';
                        // 4. 顯示最後的主內容
                        mainContent.style.display = 'block';
                    }, 800);
                }, 2500);
            }, 500);
        } else {
            // 密碼錯咗嘅反應
            passwordInput.placeholder = '再試吓啦...';
            passwordInput.value = '';
        }
    }

    // 監聽撳掣登入
    submitPassword.addEventListener('click', handleLogin);

    // 支援鍵盤 Enter 登入
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleLogin();
    });

    /**
     * 解釋：
     * 動態生成飄浮嘅圖標（心心、熊熊、水獺）。
     * 我哋加咗 🦦 入去，仲會隨機分佈位置同大細。
     */
    function addFloatingElements() {
        const icons = ['❤️', '🧸', '💖', '✨', '🦦']; 
        // 生成 20 個飄浮物
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            
            element.innerHTML = randomIcon;
            element.style.position = 'fixed';
            element.style.zIndex = '-1'; // 擺喺底層，唔好遮住字
            element.style.left = Math.random() * 100 + 'vw';
            element.style.top = Math.random() * 100 + 'vh';
            element.style.fontSize = (Math.random() * 20 + 20) + 'px';
            element.style.opacity = '0.5';
            
            // 加上飄浮動畫
            element.style.animation = `float ${Math.random() * 4 + 4}s ease-in-out infinite`;
            element.style.animationDelay = Math.random() * 5 + 's';
            
            document.body.appendChild(element);
        }
    }

    addFloatingElements();

    // Tab 分頁轉換邏輯
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 移除所有 active 狀態
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 為點擊嘅分頁加上 active
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 情書點擊展開/收埋
    const loveLetter = document.getElementById('loveLetter');
    if (loveLetter) {
        loveLetter.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    }
});

