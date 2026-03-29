<script>
    // 1. CRONÔMETRO DE ESCASSEZ (15 Minutos)
    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;
        const interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration; // Reinicia para o usuário não sair da página
            }
        }, 1000);
    }

    // 2. NOTIFICAÇÕES DE VENDA (Prova Social em Tempo Real)
    const nomes = ['João P.', 'Maria V.', 'Lucas R.', 'Ana C.', 'Marcos S.', 'Beatriz L.'];
    const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Belo Horizonte', 'Salvador'];

    function showNotification() {
        // Cria o elemento da notificação
        const notif = document.createElement('div');
        notif.className = 'fake-notification';
        
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const cidade = cidades[Math.floor(Math.random() * cidades.length)];
        
        notif.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <div style="background:#ff6600; width:10px; height:10px; border-radius:50%;"></div>
                <p style="margin:0; font-size:0.85rem; color:#fff;">
                    <b>${nome}</b> de ${cidade} <br> acabou de adquirir o curso!
                </p>
            </div>
        `;

        // Estilo rápido via JS para não precisar mexer no CSS anterior
        Object.assign(notif.style, {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: '#1a1a1a',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #333',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            zIndex: '9999',
            transition: 'opacity 0.5s ease'
        });

        document.body.appendChild(notif);

        // Remove a notificação depois de 5 segundos
        setTimeout(() => {
            notif.style.opacity = '0';
            setTimeout(() => notif.remove(), 500);
        }, 5000);
    }

    // Inicialização ao carregar a página
    window.onload = function () {
        // Iniciar Timer
        const fifteenMinutes = 60 * 15;
        const display = document.querySelector('.timer b');
        startTimer(fifteenMinutes, display);

        // Mostrar primeira notificação após 3 segundos
        setTimeout(showNotification, 3000);

        // Repetir notificações em intervalos aleatórios
        setInterval(() => {
            showNotification();
        }, Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000); // Entre 10 e 20 segundos
    };

    // 3. LOGICA DE BOTÃO (Simulação de redirecionamento)
    const buyButtons = document.querySelectorAll('.btn-buy, .btn-main');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Se não houver link real, apenas um alerta de sucesso
            if(btn.getAttribute('href') === "#" || btn.getAttribute('href') === "#checkout") {
                console.log("Redirecionando para o Checkout Seguro...");
            }
        });
    });
</script>