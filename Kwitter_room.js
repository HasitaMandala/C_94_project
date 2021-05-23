// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDWm15E5XDmNXhF5cdSaMsmBiXhpW4Xy8",
    authDomain: "kwitter94.firebaseapp.com",
    projectId: "kwitter94",
    storageBucket: "kwitter94.appspot.com",
    messagingSenderId: "241383960733",
    appId: "1:241383960733:web:5fb39d418506f435dd2474"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
