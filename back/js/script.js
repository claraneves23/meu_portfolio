
    function loadContent(page) {
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
                })
                .catch(error => console.error('Erro ao carregar a página:', error));
        }