document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const modal = document.getElementById('passwordModal');
    const welcome = document.getElementById('welcomeScreen');
    const main = document.getElementById('mainContent');

    // 1. 密碼登入
    document.getElementById('submitPassword').onclick = function() {
        const pin = document.getElementById('passwordInput').value.toLowerCase();
        if(pin === 'kitty0506') {
            if(music) music.play();
            modal.style.display = 'none';
            welcome.style.display = 'flex';
            setTimeout(() => {
                welcome.style.opacity = '0';
                setTimeout(() => {
                    welcome.style.display = 'none';
                    main.style.display = 'block';
                }, 800);
            }, 2000);
        }
    };

    // 2. 生成水獺與心心 (🦦)
    const icons = ['❤️', '🦦', '✨', '💖'];
    for (let i = 0; i < 15; i++) {
        const div = document.createElement('div');
        div.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        div.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:${Math.random()*100}vh; font-size:20px; z-index:-1; opacity:0.3; animation: float ${3+Math.random()*2}s infinite ease-in-out;`;
        document.body.appendChild(div);
    }

    // 3. Tab 切換
    document.querySelectorAll('.tab').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        };
    });

    // 4. 打開情書
    document.getElementById('loveLetter').onclick = function() {
        this.classList.toggle('expanded');
    };
});
