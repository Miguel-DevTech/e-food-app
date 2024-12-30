import { useParams } from 'react-router-dom';
import './CategoryPage.css';

function CategoryPage() {
  // Pegando o nome da categoria da URL
    const { category } = useParams<{ category: string }>();

    // Conteúdo das categorias (pode ser mais detalhado com produtos ou outros dados)
    const categories = {
        lanches: {
        title: "Lanches",
        description: "Os melhores hambúrgueres e batatas fritas!",
        items: [
            "Hambúrguer Clássico",
            "Cheeseburger",
            "Batata Frita"
        ]
        },
        bebidas: {
        title: "Bebidas",
        description: "Refrigerantes, sucos e mais para refrescar seu dia.",
        items: [
            "Coca-Cola",
            "Suco de Laranja",
            "Água"
        ]
        },
        doces: {
        title: "Doces",
        description: "Sobremesas deliciosas para adoçar sua refeição.",
        items: [
            "Brownie",
            "Torta de Limão",
            "Sorvete"
        ]
        }
    };

    // Verificando se a categoria existe no objeto categories
    const categoryData = categories[category as keyof typeof categories];

    return (
        <div className="categoria-page">
        {/* Exibe o nome da categoria */}
        <h1>{categoryData ? categoryData.title : 'Categoria Não Encontrada'}</h1>
        {/* Exibe a descrição da categoria */}
        <p>{categoryData ? categoryData.description : 'Essa categoria não existe.'}</p>

        {/* Exibe os itens da categoria */}
        {categoryData && categoryData.items && (
            <ul>
            {categoryData.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        )}
        </div>
    );
    }

export default CategoryPage;
