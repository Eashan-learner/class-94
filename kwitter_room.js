
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBbErVEmhVO9cWJIWfHY-aOn0XmlSitlWQ",
      authDomain: "kwitter-is-not-for-my-age.firebaseapp.com",
      databaseURL: "https://kwitter-is-not-for-my-age-default-rtdb.firebaseio.com",
      projectId: "kwitter-is-not-for-my-age",
      storageBucket: "kwitter-is-not-for-my-age.appspot.com",
      messagingSenderId: "533199618645",
      appId: "1:533199618645:web:aa8cfba5ffde5b85e68adc"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
