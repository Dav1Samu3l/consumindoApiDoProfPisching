async function fetchCategories() {
    try {
        const response = await fetch('http://localhost:8081/categorias');
        const categories = await response.json();
        const categoriasList = document.getElementById('categorias-list');
        categoriasList.innerHTML = '';

        categories.forEach(categoria => {
            const categoriasItem = document.createElement('div');
            categoriasItem.className = 'categorias';
            categoriasItem.innerHTML = `
                <h2>${categoria.descricao}</h2>
                <p>ID: ${categoria.id}</p>
                <a href="editar.html?id=${categoria.id}">Editar</a>
                <button onclick="deleteCategory(${categoria.id})">Excluir</button>
            `;
            categoriasList.appendChild(categoriasItem);
        });
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
    }
}

async function deleteCategory(id) {
    try {
        const response = await fetch(`http://localhost:8081/categorias/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            fetchCategories();
        } else {
            alert('Erro ao excluir categoria');
        }
    } catch (error) {
        console.error('Erro ao excluir categoria:', error);
    }
}

fetchCategories();
