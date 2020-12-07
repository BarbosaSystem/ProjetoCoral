import firebase from 'firebase/app';
import 'firebase//firebase-auth';
import 'firebase/firebase-database';

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
});

const db = firebaseApp.database();


export default {
    RemoverCrianca: async (key) => {
        let resultado = null
        await db.ref('criancaCoral').child(key).remove().then(() => {
            resultado = true
        })
        return resultado;
    },
    Autenticacao:async (email, senha) => {
        let result = await firebaseApp.auth().signInWithEmailAndPassword(email, senha);
        return result;
    },
    LogOff: async () => {
        return await firebaseApp.auth().signOut();
    },
    UsuarioAtual:async () => {
        let usuarioAutal =  await firebaseApp.auth().currentUser
        return usuarioAutal
    },
    ResetarSenha:async (email) => {
        return await firebaseApp.auth().sendPasswordResetEmail(email);
    },
    CarregarCriancaCoral: async () => {
        return await db.ref('criancaCoral').once('value')
    },
    AtualizarCriancaCoral: async (codigo, criancaCoral) => {
        return await db.ref('criancaCoral').child(codigo).update(criancaCoral)
    },
    NovaCriancaCoral:async (criancaCoral) => {
        return await db.ref('criancaCoral').push(criancaCoral)
    },
    NovoUsuario:async (usuario) => {
        let result = await firebaseApp.auth().createUserWithEmailAndPassword(usuario.email, usuario.password)
        return result;
    },
    VerificarLogin:async () => {
        return new Promise((resolve, reject) => {
            const unsubs = firebaseApp.auth().onAuthStateChanged((user) => {
                unsubs()
                if(user){
                    resolve(user)
                }
            })
        })
    },
    
}