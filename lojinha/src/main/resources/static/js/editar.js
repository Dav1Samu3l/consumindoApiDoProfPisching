async function fetchCategory(id) {
    try {
        const response = await fetch(`http://localhost:8081/categorias/${id}`);
        const category = await response.json();
        document.getElementById('categoria-id').value = category.id;
        document.getElementById('descricao').value = category.descricao;
    } catch (error) {
        console.error('Erro ao buscar categoria:', error);
    }
}

document.getElementById('editar-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('categoria-id').value;
    const descricao = document.getElementById('descricao').value;

    try {
        const response = await fetch(`http://localhost:8081/categorias/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, descricao })
        });

        if (response.ok) {
            alert('Categoria atualizada com sucesso!');
            window.location.href = 'index.html';
        } else {
            alert('Erro ao atualizar categoria');
        }
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error);
    }
});

// Obtenha o ID da categoria da URL
const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('id');
if (categoryId) {
    fetchCategory(categoryId);
}
