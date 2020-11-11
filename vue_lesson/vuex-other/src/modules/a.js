const a = {
    namespaced: true,
    state: () => ({
        number: 100
    }),
    mutations: {
        changeNum(state, newNum) {
            state.number = newNum
        }
    },
    actions: {
        // changeNum({ commit }, newNum) {
        //     commit('changeNum', newNum)
        // }
        changeNum: {
            root: true,
            handler({ commit }, newNum) {
                commit('changeNum', newNum)
            }
        }
    }
}

export default a