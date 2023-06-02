import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

// Function to sign up a user with email and password
const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email
    }
    return user
}

// Function to log in a user with email and password
const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(email) // Log the email for debugging
    console.log(password) // Log the password for debugging
    const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email
    }
    return user
}

// Function to log out a user
const logout = async () => {
    return await signOut(auth)
}

// Object containing the authentication service methods
const authService = {
    signup, // Method to sign up a user
    login, // Method to log in a user
    logout, // Method to log out a user
}

export default authService
