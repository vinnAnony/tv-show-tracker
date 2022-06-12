const favouriteMovies = JSON.parse(localStorage.getItem('favMovies'));


export const favMovies = {
    namespaced: true,
    state: {
        notEmptyFavs: favouriteMovies ? true : false,
        favMovies: favouriteMovies
    },

    getters: {
        notEmptyFavs: state => state.notEmptyFavs,
        favMovies: state => state.favMovies,
    },

    actions: {
        addFavMovies({commit},data) {
            if (data) {
                localStorage.setItem('favMovies', JSON.stringify(data));
            }
            console.log(data);
            commit('addFavMovies',data);
        },
    },
    mutations: {
        addFavMovies(state,favMovies) {
            state.notEmptyFavs = true;
            state.favMovies = favMovies;
        },
    }
};