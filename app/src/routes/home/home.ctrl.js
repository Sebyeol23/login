"use strict";

const User = require("../../models/User");
const MemoStorage = require("../../models/MemoStorage");

const output = {
    home: async (req, res) => {
        const memos = await MemoStorage.getMemos();
        await res.render("home/index", memos);
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register")
    }
}

const process = {
    memo: async (req, res) => {
        const memo = req.body.memo;
        const response = await MemoStorage.save(memo);
        return res.json(response);
    },

    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
}