export const entity = {
    isFetching: false
};

export default {
    categories: {
        ...entity,
        data: []
    },
    products: {
        ...entity,
        data: []
    },
    selectedCategory: null,
    searchTerm: ''
}