const { Router } = require("express");

const indexRouter = Router();

let id = 0;
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: id
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: id += 1
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.post("/new", (req, res) => {
    const formData = req.body;
    messages.push({ text: formData.messageText, user: formData.authorName, added: new Date(), id: id +=1 });
    res.redirect("/");
}); // accesses form data, pushes the message, then redirects user back to index page

indexRouter.get("/:messageID", (req, res) => {
    const { messageID } = req.params;
    res.render("message_details", { messageID: messageID, message: messages[messageID] });
});

module.exports = indexRouter;