import firebase from 'firebase/app';
import 'firebase//firebase-auth';
import 'firebase/firebase-database';

import firebaseconfig from './firebaseconfig';
import { resolve } from 'core-js/fn/promise';

const firebaseApp = firebase.initializeApp(firebaseconfig);

const db = firebaseApp.database();


export default {
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
async function CarregaUsuario(user) {
    return user
}