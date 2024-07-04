const firebaseConfig = {
    apiKey: "AIzaSyCDBjaZlnDrzdaI5lvVC6QdGNILyN_3RkA",
    authDomain: "miniproject-c68a5.firebaseapp.com",
    projectId: "miniproject-c68a5",
    storageBucket: "miniproject-c68a5.appspot.com",
    messagingSenderId: "483854894372",
    appId: "1:483854894372:web:fab69c68fb84a2bea79fb1"
  };

  firebase.initializeApp(firebaseConfig);
console.log(firebase);
var sum=0;
function Displaydata(){
  firebase.database().ref('Cart').on('value',
  function(AllRecords){
    
      AllRecords.forEach(
          (CurrentRecord) => {
              var product = CurrentRecord.val().product;
              var price = CurrentRecord.val().Price;
              var temp = price.match(/\d+/g);
              var temps=parseFloat(temp[0]);
              sum+=temps;
              AddItems(product, price);
            console.log(CurrentRecord.parrent);
              
              
          }
      );
  });
  
}

window.onload=Displaydata();

function AddItems(var1,var2){
    var tbody=document.getElementById('content');
    var trow=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');

    td1.innerHTML=var1;
    td2.innerHTML=var2;
   
    trow.appendChild(td1);
    trow.appendChild(td2);

    tbody.appendChild(trow);
    console.log(sum);
}
setTimeout(()=>{
    var tfooter=document.getElementById('total');
    var sumtd=document.createElement('td');
    sumtd.innerHTML="Nu." +sum;
    tfooter.appendChild(sumtd);
},2000);

