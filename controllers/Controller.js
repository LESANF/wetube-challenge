//global controllers
export const home = (req, res) => res.send("home");
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const confirm = (req, res) => res.send("Confirm-account");

//courses controllers
export const courses = (req, res) => res.send("Courses");
export const newCourses = (req, res) => res.send("new");
export const mine = (req, res) => res.send("mine");

//api controllers
export const api = (req, res) => res.send("api");
export const documentation = (req, res) => res.send("documentation");

//v1 controllers
export const v1 = (req, res) => res.send("v1");
export const buy = (req, res) => res.send("buy");
export const refund = (req, res) => res.send("refund");

//v2 controllers
export const v2 = (req, res) => res.send("v2");
export const remove = (req, res) => res.send("remove");
export const edit = (req, res) => res.send("edit");
