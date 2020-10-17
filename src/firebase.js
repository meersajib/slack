// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyBpxaCoaxOogZwPm5776yiURuFacG-Sljk',
  authDomain: 'slack-clone-1514f.firebaseapp.com',
  databaseURL: 'https://slack-clone-1514f.firebaseio.com',
  projectId: 'slack-clone-1514f',
  storageBucket: 'slack-clone-1514f.appspot.com',
  messagingSenderId: '919254391090',
  appId: '1:919254391090:web:0e0e07c4e63b92d63ddf2b',
  measurementId: 'G-T8JTJYYE2T',
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db