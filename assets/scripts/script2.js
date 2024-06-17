
        const stickers = document.querySelectorAll('.sticker');
        const inputs = document.querySelectorAll('.input-sticker');
        const resultado = document.querySelector('.resultado');

        function calcularStickers() {
            let totalStickers = 0;

            for (let i = 0; i < stickers.length; i++) {
                totalStickers += parseInt(inputs[i].value);
            }

            return totalStickers;
        }

        function actualizarResultado() {
            const totalStickers = calcularStickers();

            if (totalStickers <= 10) {
                resultado.textContent = `Llevas ${totalStickers} stickers`;
            } else {
                resultado.textContent = "Llevas demasiados stickers";
            }
        }

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', actualizarResultado);
        }

        actualizarResultado(); // Mostrar resultado inicial