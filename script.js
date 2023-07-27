document.querySelector("#form").addEventListener("submit", (e)=>{
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password =document.querySelector("#password").value;

    if(email == "" || password == ""){
        alert("Please enter all fields");
    }
    else{
        setCookie(email, password,365)
        alert("Your Data Is Stored In Cookies");
    }
});

function setCookie(email,password,time){
    // get the current time
    let date = new Date();
    date.setTime(date.getTime() + (time*24*60*60*1000));

    let expireTime = "expireTime" + date.toUTCString();

    document.cookie = `${email}=${password};${expireTime}` 
}