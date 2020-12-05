import firebase from 'firebase/app';
import 'firebase//firebase-auth';
import 'firebase/firebase-database';

import firebaseconfig from './firebaseconfig';

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
        return await firebaseApp.auth().currentUser
    },
    ResetarSenha:async (email) => {
        return await firebaseApp.auth().sendPasswordResetEmail(email);
    },
    CarregarUsuarios: async () => {
        return db.ref('criancaCoral').on('value').then((data => {
            
        }))
    }
}