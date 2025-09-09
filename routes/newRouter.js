const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("All messages"));
newRouter.get("/:messageId", (req, res) => {
    const { messageId } = req.params;
    res.send(`Message ID: ${messageId}`);
});

module.exports = newRouter;