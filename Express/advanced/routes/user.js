const express = require("express");
const { User, validateUser } = require("../models/user.js")
const router = express.Router();

router.get("/", async (req, res, next) => {
    const users = await User.find();
    res.send(users);
    next();
});

router.get("/:id", async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.send(user);
    next();
});

router.post("/", async (req, res, next) => {
    if (validateUser(req.body.error)) {
        res.status(400);
        next();
        return;
    }
    const user = new User({
        name: req.body.name
    });
    const result = await user.save();
    res.status(200).send(result);
    next();
})

module.exports = router;