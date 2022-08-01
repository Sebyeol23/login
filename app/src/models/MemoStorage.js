"use strict";

const mysql = require("mysql");

const dbConfig = require("../config/db");

class MemoStorage{
    static async getMemos(){
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM memos;";

            const db = mysql.createConnection(dbConfig);

            db.query(query, (err, data) => {
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

    static async save(memo){
        const memos = await this.getMemos();

        return new Promise((resolve, reject) => {
            const query_delete = "DELETE FROM memos;";
            const query_add = "INSERT INTO memos(first, second, third) VALUES(?, ?, ?);";

            const db = mysql.createConnection(dbConfig);

            db.query(query_delete);

            db.query(query_add, [memos.second, memos.third, memo], (err) => {
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

module.exports = MemoStorage;