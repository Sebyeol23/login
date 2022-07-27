"use strict";

const name = document.querySelector("#name"),
id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
confirmPw = document.querySelector("#pw-confirm"),
registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register(){
    if(!name.value){
        return alert("이름을 입력해주세요.");
    }
    if(!id.value){
        return alert("아이디를 입력해주세요.");
    }
    if(!pw.value){
        return alert("비밀번호를 입력해주세요.");
    }
    if(pw.value !== confirmPw.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
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