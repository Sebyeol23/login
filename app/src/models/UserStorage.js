"use stricts";

const fs = require("fs").promises;

class UserStorage{
    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields)){
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id){
        // const users = this.#users;
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static #getUserInfo(data, id){
        const users = JSON.parse(data);

        const usersKeys = Object.keys(users);
        const idx = users.id.indexOf(id);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);

        return {success: true};
    }
}

module.exports = UserStorage;