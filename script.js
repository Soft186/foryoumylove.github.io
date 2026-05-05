document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitPassword');

    function unlock() {
        if (passwordInput.value.toLowerCase() === 'kitty0506') {
            if (bgMusic) bgMusic.play();
            document.getElementById('passwordModal').style.display = 'none';
            document.getElementById('welcomeScreen').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('welcomeScreen').style.display = 'none';
                document.getElementById('mainContent').style.display = 'block';
            }, 2000);
        }
    }

    submitBtn.addEventListener('click', unlock);
    passwordInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') unlock(); });

    // 飄浮元素 (心心 + 水獺)
    const icons = ['❤️', '🦦', '✨', '💖'];
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        el.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:${Math.random()*100}vh; font-size:24px; z-index:-1; opacity:0.4; animation: float 3s infinite ease-in-out;`;
        document.body.appendChild(el);
    }

    // Tabs 切換
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
        t.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            t.classList.add('active');
            document.getElementById(t.dataset.tab).classList.add('active');
        });
    });

    document.getElementById('loveLetter').addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});
