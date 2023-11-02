import { Store, createStore, useStore } from 'vuex'
import axios from "axios"
import createPersistedState from 'vuex-persistedstate'


export default createStore({
  state: {
    points: 0,
    uti: null,
    user: null,
    erreur: null,
    employe: null
  },
  getters: {
    liste: state => state.points
  },
  mutations: {
    UpdatePoints(state, payload) {
      state.points = state.points + payload
    },
    AddUsser(state, payload) {
      state.uti = payload
    },
    AjoutUtilisateur(state, payload) {
      state.user = payload
    },
    AjoutStateEmploye(state, payload) {
      state.employe = payload
    },
    AddErreur(state, payload) {
      state.erreur = payload
    },
    DéconnexionUtilisateur(state) {
      state.points = 0;
      state.uti = null;
      state.user = null;
      state.erreur = null;
      state.employe = null;
    },
  },
  actions: {
    async loginActions(context, { email, mdp, token, user }) {
      try {
        // const response = await axios.post("http://127.0.0.1:8000/api/user/connect", {
        //   email: email,
        //   password: mdp
        // });

        // console.log(response)

        // if (response.data.token) {
        //   let token = response.data.token;
        //   let user = response.data.user;
        context.commit("AjoutUtilisateur", { email, mdp, token, user });
        // } else {
        //   context.commit("AddErreur", "Erreur");
        //   throw new Error("Erreur");
        // }
      } catch (error) {
        console.error(error);
        // Gérer l'erreur d'API ici (par exemple, afficher un message d'erreur à l'utilisateur)
        throw error;
      }
    }
    ,
    déconnexionAction(context) {
      context.commit("DéconnexionUtilisateur");
    },
  },
  plugins: [
    createPersistedState({
      paths: ['user', 'employe'],

    })
  ],
});


if (localStorage.getItem('vuex') != null) {
  setInterval((interv) => {
    console.log(interv)
    console.log("gfd");
    localStorage.removeItem('vuex');
    window.location.reload();
  }, 60 * 60 * 1000);
}
