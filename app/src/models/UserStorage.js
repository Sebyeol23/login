"use stricts";

class UserStorage{
    static #users = {
        id: ["hyaxins", "yellow", "taeyeong"],
        pw: ["2325", "jisu", "0000"],
        name: ["박근영", "김지수", "박태영"],
    }

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if(users.hasOwnProperty(fields)){
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const usersKeys = Object.keys(users);
        const idx = users.id.indexOf(id);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;