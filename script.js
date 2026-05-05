document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const passInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitPassword');

    submitBtn.onclick = function() {
        if (passInput.value.toLowerCase() === 'kitty0506') {
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

    document.querySelectorAll('.tab').forEach(tab => {
        tab.onclick = () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        };
    });

    document.getElementById('loveLetter').onclick = function() {
        this.classList.toggle('expanded');
    };
});
