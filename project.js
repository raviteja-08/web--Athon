var a=document.getElementById("i1");
function readUrl(input){
    if(input.files){
            var reader=new FileReader();
            reader.readAsDataURL(input.files[0])
            reader.onload=(e)=>{
            a.src=e.target.result;
        }
    }
}
var inputFile=document.getElementById("inputFile");
removeImg=()=>{
    a.src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
    inputFile.value="";
}

fetch('./data.json')
.then((response)=>response.json())
.then((users)=>{
    //getinput username,password;
    let userName ="anjani@gmail.com";
    let placeholder = document.querySelector('#d2');
    let output = "";
    
    for(let user in users){
        console.log(users[user].username);
        if(users[user].username===userName){
            output=`
            <h2>      Name :${users[user].name} </h2>
            <h2>Profession :${users[user].profession} </h2>
            <h2> Mobile No :${users[user].phone} </h2>
            <h2>  Email Id :${users[user].username} </h2>
            <h2>LinkedIn Profile :  </h2>
            
            `
        }
    }
    placeholder.innerHTML = output;

})