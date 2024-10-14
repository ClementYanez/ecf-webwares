import { createStore } from 'vuex';

export default createStore({
  state: {
    categories: [
      { id: 1, name: "Mobilier d'intérieur" },
      { id: 2, name: 'Luminaires' },
      { id: 3, name: 'Tapis' },
      { id: 4, name: 'Objets de décorations' },
    ],
    productsList: [
      {
        id: 1,
        image: 'mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 2,
        image: 'mobilier-4.jpg',
        titre: 'Canapé Krug',
        description: 'Un canapé tout en finesse et élégance.',
        prix: 499.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 3,
        image: 'mobilier-3.jpg',
        titre: 'Canapé Munzen',
        description: 'Un canapé en cuir marron et confortable.',
        prix: 499.99,
        moq: 5,
        categorieId: 1,
      },
      {
        id: 4,
        image: 'mobilier-2.jpg',
        titre: 'Étagère en bois',
        description: 'Une étagère pratique et minimaliste.',
        prix: 99.99,
        moq: 15,
        categorieId: 1,
      },
      {
        id: 5,
        image: 'mobilier-1.jpg',
        titre: 'Table de chevet',
        description: 'Table de chevet en bois. Pratique et discrète.',
        prix: 199.99,
        moq: 15,
        categorieId: 1,
      },
      {
        id: 6,
        image: 'luminaire-1.jpg',
        titre: 'Lampe moderne',
        description: 'Lampe avec un design moderne et éclairage ajustable.',
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 7,
        image: 'luminaire-2.jpg',
        titre: 'Lampe de cuisine',
        description: "Lampe sobre à l'éclairage ajustable.",
        prix: 119.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 8,
        image: 'luminaire-3.jpg',
        titre: "Lampe d'extérieur",
        description: 'Lampe en bois avec un design moderne.',
        prix: 149.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 9,
        image: 'luminaire-4.jpg',
        titre: 'Lampe industrielle',
        description: 'Lampe au design moderne et industriel.',
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 10,
        image: 'luminaire-5.jpg',
        titre: 'Lampe en bois',
        description: 'Lampe au design enfantin et simple.',
        prix: 129.99,
        moq: 10,
        categorieId: 2,
      },
      {
        id: 11,
        image: 'tapis-1.jpg',
        titre: 'Tapis en poil de yaourt',
        description: 'Tapis doux en poil de yaourt sauvage.',
        prix: 189.99,
        moq: 10,
        categorieId: 3,
      },
      {
        id: 12,
        image: 'tapis-2.jpg',
        titre: 'Tapis en laine',
        description: 'Tapis doux en laine avec motif géométrique.',
        prix: 99.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 13,
        image: 'tapis-3.jpg',
        titre: 'Tapis en laine',
        description:
          'Tapis doux en laine avec motif géométrique mais plus grand.',
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 14,
        image: 'tapis-4.jpg',
        titre: 'Tapis en crochet',
        description: "Tapis doux réalisé au crochet avec motif d'éléphant.",
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 15,
        image: 'tapis-5.jpg',
        titre: 'Tapis en moumoute',
        description: 'Tapis en moumoute toute douce et naturelle.',
        prix: 89.99,
        moq: 20,
        categorieId: 3,
      },
      {
        id: 16,
        image: 'deco-1.jpg',
        titre: "Vase en bois d'arbre",
        description: "Vase réalisé à base d'arbre venus d'une forêt.",
        prix: 49.99,
        moq: 20,
        categorieId: 4,
      },
      {
        id: 17,
        image: 'deco-2.jpg',
        titre: 'Vase imprimé en 3D',
        description: 'Vase imprimé en 3D en plastique recyclable.',
        prix: 49.99,
        moq: 40,
        categorieId: 4,
      },
      {
        id: 18,
        image: 'deco-3.jpg',
        titre: 'Vase éthnique en argile',
        description: 'Vase éthnique en argile avec motifs gravés à la main.',
        prix: 49.99,
        moq: 20,
        categorieId: 4,
      },
      {
        id: 19,
        image: 'deco-4.jpg',
        titre: 'Vase arrondis',
        description: 'Vase à la forme tout à la fois élégante et rigolote.',
        prix: 69.99,
        moq: 10,
        categorieId: 4,
      },
      {
        id: 20,
        image: 'deco-5.jpg',
        titre: 'Vase rectangulaire',
        description:
          'Vase au design futuriste et aux méthodes de réalisation résolument classiques.',
        prix: 49.99,
        moq: 20,
        categorieId: 4,
      },
    ],

    filteredCategory: null,
    filteredProductsListByCategory: [],
    filteredProductsList: [],
    searchQuery: '',
    cart: [],
  },
  mutations: {
    getProductDetails(state, productDetails) {
      state.productDetails = productDetails;
    },
    getFilteredProductsList(state, filteredProductsList) {
      state.filteredProductsList = filteredProductsList;
    },

    getFilteredProductsListByCategory(state, filteredProductsListByCategory) {
      state.filteredProductsListByCategory = filteredProductsListByCategory;
    },
    getCart(state, cart) {
      state.cart = cart;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    changeCategory(state, category) {
      state.filteredCategory = category;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
  },
  actions: {
    filterProductsByCategory(context, category) {
      // if (category === context.state.filteredCategory) {
      // context.commit('changeCategory', null);
      // } else if (context.state.filteredCategory === null) {
      context.commit('changeCategory', category);
      // }
      const filteredProductsListByCategory = context.state.productsList.filter(
        (product) => product.categorieId === category
      );
      if (filteredProductsListByCategory.length === 0) {
        context.commit(
          'getFilteredProductsListByCategory',
          context.state.productsList
        );
      } else {
        context.commit(
          'getFilteredProductsListByCategory',
          filteredProductsListByCategory
        );
      }
    },
    resetCategory(context) {
      context.commit('changeCategory', null);
    },
  },
  getters: {
    lastImagesByCategory(state) {
      const lastImages = [];

      // Boucle sur chaque catégorie
      state.categories.forEach((category) => {
        // Filtrer les produits par catégorie
        const productsInCategory = state.productsList.filter(
          (product) => product.categorieId === category.id
        );

        // Prendre le dernier produit ajouté dans chaque catégorie
        if (productsInCategory.length > 0) {
          lastImages.push(productsInCategory[productsInCategory.length - 1]);
        }
      });

      return lastImages;
    },
    filterProductByQuery(state) {
      state.filteredProductsList = state.filteredProductsListByCategory;

      if (!state.searchQuery) {
        return state.filteredProductsListByCategory;
      }
      console.log(state.filteredProductsList);
      state.filteredProductsList = state.filteredProductsListByCategory.filter(
        (product) => {
          return (
            product.titre
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
          );
        }
      );
    },
  },
  modules: {},
});
