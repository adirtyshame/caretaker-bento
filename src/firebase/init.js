import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyCMFodYs53IVfRyh6-W05o9W5cBVDY4ypM',
  authDomain: 'caretaker-bento.firebaseapp.com',
  databaseURL: 'https://caretaker-bento.firebaseio.com',
  projectId: 'caretaker-bento',
  storageBucket: 'caretaker-bento.appspot.com',
  messagingSenderId: '426336701111',
  appId: '1:426336701111:web:99dcf8cbe7760e06a11b32',
  measurementId: 'G-PTH6ZNB050'
}

firebase.initializeApp(config)
