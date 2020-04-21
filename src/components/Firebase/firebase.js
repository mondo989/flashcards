console.log("firebasefileeeee");
import app from 'firebase/app';
import 'firebase/auth';

const config = {
	// apiKey: AIzaSyBaTtZyH6c4P-gT-3r2g8LkAcoLBHw_hjo,
	authDomain: REACT_APP_AUTH_DOMAIN,
	databaseURL: REACT_APP_DATABASE_URL,
	projectId: REACT_APP_PROJECT_ID,
	storageBucket: '',
	messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
}
export default Firebase;
  
  