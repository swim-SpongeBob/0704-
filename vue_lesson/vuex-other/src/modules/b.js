import axios from 'axios'
const b = {
    state: () => ({
        posts: [],
        comments: []
    }),
    mutations: {
        getPosts(state, posts) {
            state.posts = posts
        },
        getComments(state, comments) {
            state.comments = comments
        },
    },
    // action的作用 使用异步请求 触发对应的 mutations 来修改 state
    actions: {
        // action 函数内的 第一个参数 context 内部其实有很多属性可以使用比如 commit(触发mutations用的)  dispatch(触发Action用的)  state ...
        // getPosts({ commit }) {
        //     // axios.get(`http://localhost:3009/post`).then((res) => {
        //     //     commit('getPosts', res.data)
        //     //     console.log(2222);
        //     // })
        //     return new Promise((resolve, reject) => {
        //         axios.get(`http://localhost:3009/post`).then((res) => {
        //             if (res.status === 200) {
        //                 commit('getPosts', res.data)
        //                 resolve() // 成功之后的回调
        //             } else {
        //                 reject() // 请求出错的错误处理
        //             }

        //             console.log(2222);
        //         }).catch(() => {
        //             reject()
        //         })
        //         // setTimeout(() => {
        //         //     commit('someMutation')
        //         //     resolve()
        //         // }, 1000)
        //     })
        // },
        async getPosts({ commit }) {
            const res = await axios.get(`http://localhost:3009/post`)
            console.log(2222);
            //  await 关键词作用是将后面的异步可以看做同步，就是等待异步执行之后在赋值，而且后续操作都会在之后执行
            // await 后面需要跟着 promise
            commit('getPosts', res.data)
        },
        getComments({ commit }) {
            axios.get(`http://localhost:3009/comments`).then((res) => {
                commit('getComments', res.data)
            })
        }
    }
}
export default b