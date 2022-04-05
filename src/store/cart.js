import axios from 'axios'

export default {
    actions: {
        async fetchCart({commit}, id) {
            const res = await axios.get('http://localhost:3001/products');
            const newProducts = res.data;
            const filteredProduct = newProducts[id];
            commit('addProductsCart', filteredProduct, id)
        },
        removeAll({commit}) {
            commit('clearProducts')
        },
        removeSingleProduct({commit}, receivedID) {
            commit('clearSingle', receivedID)
        }              
    },
    mutations: {
        addProductsCart(state, filteredProduct) {
            state.cart.push(filteredProduct)
            state.fullPrice = state.fullPrice + state.cart[state.cart.length-1].price
        },
        clearProducts(state) {
            state.cart = []
            state.fullPrice = 0
        },
        clearSingle(state, receivedID) {
            state.cart.splice(receivedID, 1)
        },
        // filterProducts(state) {
        //     filter(function callbackFn(element, index, array){ ... })
        // }
    },
    state: {
        cart: [],
        fullPrice: 0
    },
    getters: {
        cartProducts(state) {
            return state.cart
        },
        cartProductsN(state) {
            return state.cart.length
        },
        cartProductsPrice(state) {
            return state.fullPrice
        }
    }
}