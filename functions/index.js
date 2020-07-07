const functions = require("firebase-functions");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.addMessage = functions.https.onCall((data, context) => {
  console.log(data.message);
  sgMail.setApiKey(process.env.REACT_APP_SEND_GRID_API_KEY);
  const msg = {
    to: "digitalmachineltd@gmail.com",
    from: "text@example.com",
    subject: "senging emails is fun",
    text: "easy to do",
    html: "<strong>easy to do</strong>",
  };
  sgMail.send(msg);
});

// const { Firstname, Lastname, email, phonenumber, message } = data.message;
// return cors(data, context, () => {
//   const text = `<div>
//   <h4>Email</H4>
//    <ul>
//      <li> Firstname - ${Firstname || ""}</li>
//     </ul>
//     <ul>
//     <li> Lastname - ${Lastname || ""}</li>
//    </ul>
//    <ul>
//    <li> email - ${email || ""}</li>
//   </ul>
//   <ul>
//   <li> Phonenumber - ${phonenumber || ""}</li>
//  </ul>
//  <ul>
//  <h4>message</H4>
//  <p>  ${message || ""}</p>
// </ul>
//   </div>`;
//   const msg = {
//     to: "digitalmachineltd@gmail.com",
//     from: "no-reply@mail.com",
//     subject: `${Firstname} ${Lastname} sent you a message`,
//     text: text,
//     html: text,
//   };
//   sgMail.setApiKey(process.env.REACT_APP_SEND_GRID_API_KEY);
//   sgMail.send(msg);
//   data.status(200).send("success");
// }).catch(() => {
//   data.status(500).send("error");
// });
