import * as firebase from "firebase";

let config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
};
firebase.initializeApp(config);

export default firebase;
