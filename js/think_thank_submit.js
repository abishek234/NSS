//Think form handling
function ThinkFunc(){

// Initialize Firebase
var config = {
        apiKey: "AIzaSyBHUEgKa66dwsnhW7N_bCFDid0QsbciXLw",
        authDomain: "nssunit2-c6743.firebaseapp.com",
        databaseURL: "https://nssunit2-c6743-default-rtdb.firebaseio.com/",
        projectId: "nssunit2-c6743",
        storageBucket: "nssunit2-c6743.appspot.com",
        messagingSenderId: "39874785245"
  };
  firebase.initializeApp(config);

  // Reference think thank collection
var ThinkRef=firebase.database().ref('ThinkIdea');

document.getElementById('ThinkThankForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

//Get values
var name= getInputVal('TName');
var email= getInputVal('TEmail');
var phone= getInputVal('TPhone');
var thought= getInputVal('TThought');

//Save Message
saveMessage(name,email,phone,thought);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3seconds
setTimeout(function(){
    document.querySelector('.alert').style.display='none';
},3000);

document.getElementById('ThinkThankForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save form to firebase
function saveMessage(name,email,phone,thought){
    var  newThinkRef=ThinkRef.push();
    newThinkRef.set({
        name: name,
        email: email,
        phone: phone,
        thought: thought
    });
}
}

//----------------------------------------------------------//

//Thank Form Handling
function ThankFunc(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBHUEgKa66dwsnhW7N_bCFDid0QsbciXLw",
        authDomain: "nssunit2-c6743.firebaseapp.com",
        databaseURL: "https://nssunit2-c6743-default-rtdb.firebaseio.com/",
        projectId: "nssunit2-c6743",
        storageBucket: "nssunit2-c6743.appspot.com",
        messagingSenderId: "39874785245"
      };
      firebase.initializeApp(config);
    
      // Reference think thank collection
    var ThankRef=firebase.database().ref('ThankFeedback');
    
    document.getElementById('ThinkThankForm').addEventListener('submit',submitForm);
    
    //Submit form
    function submitForm(e){
        e.preventDefault();
    
    //Get values
    var name= getInputVal('TName');
    var email= getInputVal('TEmail');
    var phone= getInputVal('TPhone');
    var thought= getInputVal('TThought');
    
    //Save Message
    saveMessage(name,email,phone,thought);
    
    //Show alert
    document.querySelector('.alert').style.display='block';
    
    //Hide alert after 3seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    },3000);
    
    document.getElementById('ThinkThankForm').reset();
    }
    
    //Function to get form values
    function getInputVal(id){
        return document.getElementById(id).value;
    }
    
    //Save form to firebase
    function saveMessage(name,email,phone,thought){
        var  newThankRef=ThankRef.push();
        newThankRef.set({
            name: name,
            email: email,
            phone: phone,
            thought: thought
        });
    }
    }