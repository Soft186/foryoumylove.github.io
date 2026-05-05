document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const submitBtn = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');

    // 1. 解鎖邏輯
    submitBtn.onclick = function() {
        if (passwordInput.value.toLowerCase() === 'kitty0506') {
            if (music) music.play();
            document.getElementById('passwordModal').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('passwordModal').style.display = 'none';
                setTimeout(() => {
                    document.getElementById('welcomeScreen').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('welcomeScreen').style.display = 'none';
                        document.getElementById('mainContent').style.display = 'block';
                    }, 800);
                }, 2000);
            }, 500);
        }
    };

    // 2. Tab 切換
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // 3. 信件展開
    document.getElementById('loveLetter').onclick = function() {
        this.classList.toggle('expanded');
    };

    // 4. 加返啲 🦦 飄浮效果
    const symbols = ['❤️', '🦦', '✨', '💖'];
    for (let i = 0; i < 15; i++) {
        const el = document.createElement('div');
        el.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:${Math.random()*100}vh; font-size:24px; z-index:1; opacity:0.2; pointer-events:none; animation: float 5s infinite ease-in-out;`;
        document.body.appendChild(el);
    }
});
