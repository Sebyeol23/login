"use strict";

const memo = document.querySelector("#memo"),
btn = document.querySelector("button");

btn.addEventListener("click", submit);

function submit(){
    const req = {
        memo: memo.value,
    };

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        alert("반가워요");
        location.reload(res.success);
    })
    .catch((err) => {
        console.error(new Error("방명록 등록 중 에러 발생"));
    });
}