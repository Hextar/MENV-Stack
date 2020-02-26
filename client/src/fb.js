import firebase from 'firebase'
import 'firebase/firestore'

// Inizialize Firebase
const config = {
  apiKey: 'AIzaSyBZSMJkV0yjVzl1cl-rYfoxJvTjlI6zDZE',
  authDomain: 'mytodoapp-c9753.firebaseapp.com',
  databaseURL: 'https://mytodoapp-c9753.firebaseio.com',
  projectId: 'mytodoapp-c9753',
  storageBucket: 'mytodoapp-c9753.appspot.com',
  messagingSenderId: '824222030276',
  appId: '1:824222030276:web:ca6c4b725a4222b956ec91'
}
firebase.initializeApp(config)
const db = firebase.firestore()

export default db
