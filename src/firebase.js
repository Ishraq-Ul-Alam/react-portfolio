import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyB40ffHoprV4IQ9dTAxGf2qbB4QsUVfO_4',
  authDomain: 'react-portfolio-2d63f.firebaseapp.com',
  projectId: 'react-portfolio-2d63f',
  storageBucket: 'react-portfolio-2d63f.appspot.com',
  messagingSenderId: '91290872312',
  appId: '1:91290872312:web:a93f334923460d04dc8e0d',
  measurementId: 'G-K5V8YN2KYD',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
