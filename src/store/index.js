import Vue from 'vue'
import Vuex from 'vuex'
/* import { stat } from 'fs'; */
/* import * as Firebase from 'firebase' */
import Api from '../helpers/Api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    contagem: 0,
    errosCode: [{
        Ingles: 'auth/network-request-failed',
        Portugues: 'Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível).'
      },
      {
        Ingles: 'auth/wrong-password',
        Portugues: 'A senha é inválida ou o usuário não possui uma senha.'
      }
    ],
    loadedUsuarios: [],
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
    async logout({
      commit
    }) {
      commit('setLoading', true)
      await Api.LogOff().then(() => {
        commit('setUser', null)
        commit('setLoading', false)
        localStorage.removeItem('token')
      });
      /* Firebase.auth().signOut() */

    },
    //Informações do usuário
    //Caso esqueça senha
    async ChangePassword({
      commit
    }, payload) {
      commit('setLoading', true)

      await Api.ResetarSenha(payload.email).then(() => {
        alert('Email enviado')
        commit('setLoading', false)
      }).catch((error) => {
        alert(error)
        commit('setLoading', false)
      })
    },
    //Metodo para carregar os dados do Firebase
    async Action_VerificarEstado({dispatch}){
      await Api.VerificarLogin().then((user) => {
        dispatch("autoSignIn", { id: user.uid, email: user.email, Nome: user.displayName })
      })
    },
    async RemoverCrianca({dispatch}, payload){
      if(await Api.RemoverCrianca(payload)){
        alert("Criança removida com sucesso")
        dispatch("loadUsuarios")
      }
    },
    async loadUsuarios({commit}) {
      commit('setLoading', true)
      await Api.CarregarCriancaCoral().then((data) => {
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
      }).catch(
        (error) => {
          commit('setLoading', false)
        }
      )

    },
    //Metodo para atualizar os dados da criança do coral
    async UpdateUsuario({
      commit
    }, payload) {
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

      await Api.AtualizarCriancaCoral(payload.id, criancaCoral).then(() => {
        commit('setLoading', false)
        commit('updateCrianca', payload)
        commit('setConcluido', true)
        setTimeout(() => {
          commit('setConcluido', false)
        }, 1500)
      }).catch((error) => {
        commit('setError', error)
      })
    },
    //Metodo para cadastrar as crianças do coral
    async createUsuario({
      commit
    }, payload) {
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

      await Api.NovaCriancaCoral(criancaCoral).then((data) => {
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
    },
    //Método para registrar usuario no firebase
    async signUserUp({
      commit
    }, payload) {
      //CSS Loading
      commit('setLoading', true)
      commit('clearError')

      await Api.NovoUsuario(payload.email, payload.Password).then((user) => {
        commit('setLoading', true)
        user.user.updateProfile({
          displayName: payload.Nome,
        }).then(() => {
          const newUser = {
            id: user.user.uid,
            Email: user.user.email,
            Nome: user.user.displayName
          }
          commit('setUser', newUser)
        })
      }).catch(
        () => {
          commit('setLoading', false)
        }
      )
    },
    //Metodo para autenticar um usuario no firebase
    async signUserIn({
      commit
    }, payload) {
      commit('setLoading', true)
      commit('clearError')
      await Api.Autenticacao(payload.Email, payload.Password).then((user) => {
        commit('setLoading', false)
        const newUser = {
          id: user.user.uid,
          email: user.user.email,
          Nome: user.user.displayName
        }
        commit('setUser', newUser)
        localStorage.setItem('token', newUser)
      }).catch( () => {
        commit('setError', 'Não foi possível concluir requerimento de acesso. Favor verificar suas credenciais ou se há conexão com a internet.')
        commit('setLoading', false)
      })
    },
    autoSignIn({
      commit
    }, payload) {
      commit('setUser', {
        id: payload.uid,
        email: payload.email,
        Nome: payload.Nome
      })
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