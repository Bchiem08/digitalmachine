import firebase from "../../../../firebase";

export default async function sendMessageToServer(message) {
  var addMessage = firebase.functions().httpsCallable("addMessage");
  const result = await addMessage({ message: message });
  console.log(result);
}
