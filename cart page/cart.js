const firebaseConfig = {
    apiKey: "AIzaSyCDBjaZlnDrzdaI5lvVC6QdGNILyN_3RkA",
    authDomain: "miniproject-c68a5.firebaseapp.com",
    projectId: "miniproject-c68a5",
    storageBucket: "miniproject-c68a5.appspot.com",
    messagingSenderId: "483854894372",
    appId: "1:483854894372:web:fab69c68fb84a2bea79fb1"
  };

  console.log(firebase);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseref=firebase.database().ref('Cart');
  
    const pame = document.querySelector('.pname');
    const rice = document.querySelector('.price');

    


  document.getElementById("add").addEventListener("click", function () {

    var pname = pame.innerHTML;
    var price = rice.innerHTML;
    
    var data = {
      product: pname,
      Price: price
    };
    
    firebaseref.push(data).then(() => {

      window.alert('Sucessfully added to cart');

      setTimeout(function() {
        payment_form.reset();
      }, 1000)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
  });