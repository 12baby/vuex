export default {
    state: {
        count: 0,
        obj: {}
    },
    actions: {
        getData ({ commit, dispatch }, _this) {
            console.log(dispatch);
            return new Promise((resolve, reject) => {
                _this.axios.get('/shop').then((data) => {
                    resolve(data.data);
                });
            });
        },
        jia_S ({ dispatch, commit }, _this) {
            // commit('jia_S', count);
            console.log(_this.axios);
            let allAsync = async function () {
                try {
                    let data = await dispatch('getData', Object.assign({axios: _this.axios}));
                    return data;
                } catch (err) {
                    console.log(err);
                };
            };
            allAsync().then((data) => {
                console.log(data); // 请求回来的数据对象
                commit('jia_A', data);
            }).catch((err) => {
                console.log(err);
            });
        },
        jia_J ({ dispatch, commit }, _this) {
            // commit('jia_L', count);
            let allAsync = async function () {
                try {
                    let data = await dispatch('getData', Object.assign({ axios: _this.axios }));
                    console.log(data);
                    return data;
                } catch (err) {
                    console.log(err);
                };
            };
            allAsync().then((data) => {
                commit('jia_L', data);
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    mutations: {
        jia_A (state, data) {
            state.obj = data;
            state.count += data.coun;
        },
        jia_L (state, data) {
            state.obj = data;
            if (state.count > 0) {
                state.count -= data.coun;
            } else {
                state.count = 0;
            }
        }
    }
};
