// Display list of all users.
exports.client_list = async (req, res) => {
    //res.send("hie")
    res.render("index", { title: "Home" })
};