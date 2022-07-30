"use strict";

const fs = require("fs").promises;

class MemoStorage{
    static async getMemos(){
        return fs
        .readFile("./src/databases/memos.json")
        .then((data) => {
            return JSON.parse(data);
        })
        .catch(console.error);
    }

    static async save(memo){
        const memos = await this.getMemos();

        memos.first = memos.second;
        memos.second = memos.third;
        memos.third = memo;
        fs.writeFile("./src/databases/memos.json", JSON.stringify(memos));

        return {success: true};
    }
}

module.exports = MemoStorage;