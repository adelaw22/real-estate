import app from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


class FireBase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();

        // To retrieve tables i.e Users, homes, user list based on authUser
        // All of these is stored in the database.
        // this uses Firebase realtime database to keep track of user entities
        // This was changed from app.database to shift to cloud Firestore from firebase realtime database
        this.db = app.firestore();

        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    // Auth API 
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInUserWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    // Made available to authentication and authorization.
    onAuthUserListener = (next, fallback) => this.auth.onAuthStateChanged(authUser =>{
        if(authUser) {
            this.props.firebase
            .user(authUser.uid)
            .once('value')
            .then(snapshot => {
                const dbUser  = snapshot.val();

                // check if user has roles set otherwise set it to an empty.
                if(dbUser.roles) {
                    dbUser.roles = {}
                };

                // merge authUser to the db
                authUser  = {
                    uid: authUser.uid,
                    email: authUser.email,
                    ...dbUser
                }

                next(authUser)

            });
        } else {
            fallback();
        }
    })
    // User API
    // The paths in the ref() method match the location where the entities (users) will be stored
    //  in Firebase's realtime database API
    user = uid => this.db.doc(`users/${uid}`);

    users = () => this.db.doc('users');
}

export default FireBase
