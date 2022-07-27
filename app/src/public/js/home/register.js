"use strict";

const name = document.querySelector("#name"),
id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
confirmPw = document.querySelector("#pw-confirm"),
registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register(){
    const req = {
        name: name.value,
        id: id.value,
        pw: pw.value,
        confirmPw: confirmPw.value,
    };
    console.log(req);
    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        }
        else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
}