        var firebaseConfig = {
                apiKey: "AIzaSyDvxEERhd-YpYVX_r_7X_okLlTahwkKkhY",
                authDomain: "instagram-18aa0.firebaseapp.com",
                projectId: "instagram-18aa0",
                storageBucket: "instagram-18aa0.appspot.com",
                messagingSenderId: "105315596965",
                appId: "1:105315596965:web:cd13e56f6a06ee0401eb4c"
              };
      
      // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

function addRoom()
{
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose:"adding user"
        });
}

