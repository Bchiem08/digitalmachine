const functions = require("firebase-functions");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.addMessage = functions.https.onCall((data, context) => {
  console.log(data.message);
  const SENDGRID_API_KEY = functions.config().sendgrid.key;
  sgMail.setApiKey(functions.config().sendgrid.key);
  const { Firstname, Lastname, email, phonenumber, message } = data.message;
  const text = `<div>
  <h4>Email</H4>
   <ul>
     <li> Firstname - ${Firstname || ""}</li>
    </ul>
    <ul>
    <li> Lastname - ${Lastname || ""}</li>
   </ul>
   <ul>
   <li> email - ${email || ""}</li>
  </ul>
  <ul>
  <li> Phonenumber - ${phonenumber || ""}</li>
 </ul>
 <ul>
 <h4>message</H4>
 <p>  ${message || ""}</p>
</ul>
  </div>`;

  const msg = {
    to: "digitalmachineltd@gmail.com",
    from: "digitalmachineltd@gmail.com",
    subject: "Client Email",
    text: text,
    html: text,
  };
  return sgMail
    .send(msg)
    .then(() => console.log("email sent"))
    .catch((err) => console.log(err));
});
