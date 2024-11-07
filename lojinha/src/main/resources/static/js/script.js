// Função para buscar o JSON e renderizar as categorias
async function fetchCategories() {
    try {
        const response = await fetch('http://localhost:8081/categorias');
        const categories = await response.json();

        // Seleciona o elemento onde as categorias serão exibidas
        const categoriasList = document.getElementById('categorias-list');

        // Cria o HTML das categorias
        categories.forEach(categorias => {
            const categoriasItem = document.createElement('div');
            categoriasItem.className = 'categorias';
            categoriasItem.innerHTML = `
                <h2>${categorias.descricao}</h2>
                <p>ID: ${categorias.id}</p>
            `;
            categoriasList.appendChild(categoriasItem);
        });
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
    }
}

// Chama a função para carregar as categorias ao carregar a página
fetchCategories();

console.log("foi")
