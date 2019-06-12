import Vue from 'vue'
import Vuex from 'vuex'
/* import { stat } from 'fs'; */
import * as Firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    contagem: 0,
    errosCode: [
      { Ingles: 'auth/network-request-failed', Portugues: 'Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível).' },
      {
        Ingles: 'auth/wrong-password', Portugues: 'A senha é inválida ou o usuário não possui uma senha.'
      }
    ],
    loadedUsuarios: [
    ],
    user: null,
    loading: false,
    error: null,
    concluido: false
  },
  mutations: {
    updateCrianca(state, payload) {
      const crianca = state.loadedUsuarios.find(usuario => {
        return usuario.id === payload.id
      })
      if (payload.Nome) {
        crianca.Nome = payload.Nome
      }
      if (payload.Nascimento) {
        crianca.Nascimento = payload.Nascimento
      }
      if (payload.Endereco) {
        crianca.Endereco = payload.Endereco
      }
      if (payload.Bairro) {
        crianca.Bairro = payload.Bairro
      }
      if (payload.TelFixo) {
        crianca.TelFixo = payload.TelFixo
      }
      if (payload.TelCelular) {
        crianca.TelCelular = payload.TelCelular
      }
      if (payload.Pai) {
        crianca.Pai = payload.Pai
      }
      if (payload.Mae) {
        crianca.Mae = payload.Mae
      }
      if (payload.TelefonePai) {
        crianca.TelefonePai = payload.TelefonePai
      }
      if (payload.TelefoneMae) {
        crianca.TelefoneMae = payload.TelefoneMae
      }
    },
    setConcluido(state, payload) {
      state.concluido = payload
    },
    setLoadedCriancaCoral(state, payload) {
      state.loadedUsuarios = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
    createUsuario(state, payload) {
      state.loadedUsuarios.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    //Metodo para sair do sistema
    logout({ commit }) {
      commit('setLoading', true)
      Firebase.auth().signOut()
      commit('setUser', null)
      commit('setLoading', false)
      localStorage.removeItem('token')
    },
    //Informações do usuário
    UserInfo() {
      var user = Firebase.auth().currentUser
      /* console.log(user) */
    },
    //Caso esqueça senha
    ChangePassword({ commit }, payload) {
      commit('setLoading', true)
      var auth = Firebase.auth();

      auth.sendPasswordResetEmail(payload.email).then(function () {
        alert('Email enviado')
        commit('setLoading', false)
      }).catch(function (error) {
        alert(error)
      });
    },
    //Metodo para carregar os dados do Firebase
    loadUsuarios({ commit }) {
      commit('setLoading', true)
      Firebase.database().ref('criancaCoral').once('value')
        .then((data) => {
          const criancasCoral = []
          const obj = data.val()
          for (let key in obj) {
            criancasCoral.push({
              id: key,
              Nome: obj[key].Nome,
              Endereco: obj[key].Endereco,
              Nascimento: obj[key].Nascimento,
              Bairro: obj[key].Bairro,
              TelFixo: obj[key].TelFixo,
              TelCelular: obj[key].TelCelular,
              Email: obj[key].Email,
              Pai: obj[key].Pai,
              Mae: obj[key].Mae,
              TelefoneMae: obj[key].TelefoneMae,
              TelefonePai: obj[key].TelefonePai,
              Serie: obj[key].Serie,
              Escola: obj[key].Escola,
              FrequentaCat: obj[key].FrequentaCat,
              Etapa: obj[key].Etapa
            })
          }
          commit('setLoadedCriancaCoral', criancasCoral)
          commit('setLoading', false)

        })
        .catch(
          (error) => {
            commit('setLoading', false)
          }
        )
    },
    //Metodo para atualizar os dados da criança do coral
    UpdateUsuario({ commit }, payload) {
      commit('setLoading', true)
      const criancaCoral = {
        Nome: payload.Nome,
        Endereco: payload.Endereco,
        Nascimento: payload.Nascimento,
        Bairro: payload.Bairro,
        TelFixo: payload.TelFixo,
        TelCelular: payload.TelCelular,
        Email: payload.Email,
        Pai: payload.Pai,
        Mae: payload.Mae,
        TelefoneMae: payload.TelefoneMae,
        TelefonePai: payload.TelefonePai,
        Serie: payload.Serie,
        Escola: payload.Escola,
        FrequentaCat: payload.FrequentaCat,
        Etapa: payload.Etapa != "" ? payload.Etapa : ""
      }
      Firebase.database().ref('criancaCoral')
        .child(payload.id)
        .update(criancaCoral)
        .then(() => {
          /* const key = data.key
          commit('createUsuario', {
            ...criancaCoral,
            id: key
          }) */
          commit('setLoading', false)
          commit('updateCrianca', payload)
          commit('setConcluido', true)
          setTimeout(() => {
            commit('setConcluido', false)

          }, 1500)

        })
        .catch((error) => {
          commit('setError', error)
        })

    },
    //Metodo para cadastrar as crianças do coral
    createUsuario({ commit }, payload) {
      commit('setLoading', true)
      const criancaCoral = {
        Nome: payload.Nome,
        Endereco: payload.Endereco,
        Nascimento: payload.Nascimento,
        Bairro: payload.Bairro,
        TelFixo: payload.TelFixo,
        TelCelular: payload.TelCelular,
        Email: payload.Email,
        Pai: payload.Pai,
        Mae: payload.Mae,
        TelefoneMae: payload.TelefoneMae,
        TelefonePai: payload.TelefonePai,
        Serie: payload.Serie,
        Escola: payload.Escola,
        FrequentaCat: payload.FrequentaCat,
        Etapa: payload.Etapa
      }
      Firebase.database().ref('criancaCoral').push(criancaCoral)
        .then((data) => {
          const key = data.key
          commit('createUsuario', {
            ...criancaCoral,
            id: key
          })
          commit('setLoading', false)
          commit('setConcluido', true)
          setTimeout(() => {
            commit('setConcluido', false)

          }, 1500)

        })
        .catch((error) => {
        })
    },
    //Método para registrar usuario no firebase
    signUserUp({ commit }, payload) {
      //CSS Loading
      commit('setLoading', true)
      commit('clearError')
      Firebase.auth().createUserWithEmailAndPassword(payload.Email, payload.Password)
        .then(user => {
          commit('setLoading', true)

          user.user.updateProfile({
            displayName: payload.Nome,
          }).then((s) => {
            const newUser = {
              id: user.user.uid,
              Email: user.user.email,
              Nome: user.user.displayName
            }
            commit('setUser', newUser)
          })

        }).catch(
          error => {
            commit('setLoading', false)
          }
        )
    },
    //Metodo para autenticar um usuario no firebase
    signUserIn({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      Firebase.auth().signInWithEmailAndPassword(payload.Email, payload.Password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.user.uid,
              email: user.user.email,
              Nome: user.user.displayName
            }
            commit('setUser', newUser)
            localStorage.setItem('token', newUser)
          }
        )
        .catch(error => {
          commit('setError', 'Não foi possível concluir requerimento de acesso. Favor verificar suas credenciais ou se há conexão com a internet.')
          commit('setLoading', false)
        })
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid, email: payload.email, Nome: payload.displayName })
    },
  },
  getters: {
    getConcluido(state) {
      return state.concluido
    },
    errosCode(state) {
      return state.errosCode
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    },
    user(state) {
      return state.user
    },
    LengthUsers(state) {
      return state.loadedUsuarios.length
    },
    loadedUsuarios(state) {
      return state.loadedUsuarios
    },
    featuredUsuarios(state, getters) {
      return getters.loadedUsuarios.slice(0, 5)
    },
    loadedErrocode(state) {
      return (errorCode) => {
        return state.errosCode.find((error) => {
          return error.Ingles === errorCode
        })
      }
    },
    loadedUsuario(state) {
      return (usuarioid) => {
        return state.loadedUsuarios.find((usuario) => {
          return usuario.id === usuarioid
        })
      }
    }
  }
})
