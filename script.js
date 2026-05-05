document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitPassword');

    function handleUnlock() {
        if (passwordInput.value.toLowerCase() === 'kitty0506') {
            if (bgMusic) bgMusic.play(); // 音樂啟動
            
            document.getElementById('passwordModal').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('passwordModal').style.display = 'none';
                document.getElementById('welcomeScreen').style.display = 'flex';
                setTimeout(() => {
                    document.getElementById('welcomeScreen').style.opacity = '0';
                    setTimeout(() => {
                        document.getElementById('welcomeScreen').style.display = 'none';
                        document.getElementById('mainContent').style.display = 'block';
                    }, 800);
                }, 2000);
            }, 500);
        }
    }

    submitBtn.addEventListener('click', handleUnlock);
    passwordInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleUnlock(); });

    // 加入水獺 🦦
    const icons = ['❤️', '🦦', '✨'];
    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        el.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:${Math.random()*100}vh; font-size:25px; z-index:-1; opacity:0.4; animation: float 4s infinite;`;
        document.body.appendChild(el);
    }

    // Tab 切換與信件展開
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    document.getElementById('loveLetter').addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});
