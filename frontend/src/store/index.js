import {createStore} from "vuex"
import axios from "axios"

const store = createStore({
    state() {
        return {
            allFoods: [],
            recommendedFoods : [],
            user: undefined,
            admin: undefined,
        }
    },
    mutations: {
        setFoodsData(state, payload){
            state.allFoods = payload;
        },

        setFoodsRecommendations(state, payload){
            state.recommendedFoods = payload;
        },


        setUser(state, payload){
            state.user = payload;
        },
        setAdmin(state, payload){
            state.admin = payload;
        }
    },
    actions: {
        async getFoodsData(context){
            await axios.get('/foods')
            .then(function (response) {
                context.commit("setFoodsData", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getFoodsRecommendations(context){
            await axios.get('/recommendfoods')
            .then(function (response) {
                context.commit("setFoodsRecommendations", response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    }
})

export default store;