const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.post("/new", (req, res) => {
    const formData = req.body;
    messages.push({ text: formData.messageText, user: formData.authorName, added: new Date() });
    res.redirect("/");
}); // accesses form data, pushes the message, then redirects user back to index page

module.exports = indexRouter;