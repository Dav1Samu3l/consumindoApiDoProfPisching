document.getElementById('adicionar-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const descricao = document.getElementById('descricao').value;

    try {
        const response = await fetch('http://localhost:8081/categorias', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ descricao })
        });

        if (response.ok) {
            alert('Categoria adicionada com sucesso!');
            window.location.href = 'index.html';
        } else {
            alert('Erro ao adicionar categoria');
        }
    } catch (error) {
        console.error('Erro ao adicionar categoria:', error);
    }
});
