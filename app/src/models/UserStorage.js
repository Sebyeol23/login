"use stricts";

const mysql = require("mysql");

const dbConfig = require("../config/db");

class UserStorage{
    static getUserInfo(id){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";

            const db = mysql.createConnection(dbConfig);

            db.query(query, [id], (err, data) => {
                if(err) reject(`${err}`);
                resolve(data[0]);

                db.end((err) => {
                    if(err){
                        console.log("end: " + err);
                    }
                })
            });
        });
    }

    static async save(userInfo){
        const user = await this.getUserInfo(userInfo.id);

        if(user){
            return {success: false, msg: "존재하는 아이디입니다."};
        }
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, pw) VALUES(?, ?, ?);";

            const db = mysql.createConnection(dbConfig);

            db.query(query, [userInfo.id, userInfo.name, userInfo.pw], (err) => {
                if(err) reject(`${err}`);
                resolve({success: true});

                db.end((err) => {
                    if(err){
                        console.log("end: " + err);
                    }
                })
            });
        });
    }
}

module.exports = UserStorage;