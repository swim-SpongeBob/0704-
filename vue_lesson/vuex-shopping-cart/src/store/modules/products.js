import axios from 'axios'
// store 内的 products 模块
// 包括 state mutations actions getters
const products = {
    state: () => ({
        products: []
    }),
    mutations: {
        getProducts(state, payload) {
            state.products = payload.products
        },
        checkout(state, productsInCart) {
            state.products.forEach((ele) => {
                const product = productsInCart.find((item) => item.id === ele.id)
                if (product) {
                    ele.inventory = ele.inventory - product.quantity
                }
            })
        }
    },
    actions: {
        getProducts({ commit }) {
            axios.get('http://localhost:3008/products').then(res => {
                setTimeout(() => {
                    commit({
                        type: 'getProducts',
                        products: res.data
                    })
                }, 1000);
            })
        }
    },
    getters: {}
}

export default products