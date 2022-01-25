
const firebaseConfig = {
    apiKey: "AIzaSyAvWVg1vCoquNecXCRIqONcylBe4EVAwZQ",
    authDomain: "kwitter-app-f9a57.firebaseapp.com",
    projectId: "kwitter-app-f9a57",
    storageBucket: "kwitter-app-f9a57.appspot.com",
    messagingSenderId: "912138134374",
    appId: "1:912138134374:web:afdbdfba795e7574b65ea7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
