const firebaseConfig = {
    apiKey: "AIzaSyCfefIDPCtjNH4sHqGXLFen-asHZFMOFRI",
    authDomain: "kwitter3-c72c0.firebaseapp.com",
    databaseURL: "https://kwitter3-c72c0-default-rtdb.firebaseio.com",
    projectId: "kwitter3-c72c0",
    storageBucket: "kwitter3-c72c0.appspot.com",
    messagingSenderId: "1098740704787",
    appId: "1:1098740704787:web:a8dcdde98110fb292341e6"
  };
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");





function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
   
}
function send(){
   msg=document.getElementById("msg").value;
  
  firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like:0
    });
}

