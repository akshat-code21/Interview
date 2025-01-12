"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const JWT_SECRET = "s3r3t";
app.use((0, express_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const users = [
    {
        email: "admin123@gmail.com",
        password: "password@123"
    }
];
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    const passwordCheck = users.find((user) => user.password === password);
    if (!user || !passwordCheck) {
        res.status(403).json({
            message: "user not found"
        });
        return;
    }
    else {
        res.json({
            message: "user found."
        });
    }
});
app.post('/signin', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);
    const passwordCheck = users.find((user) => user.password === password);
    if (!user || !passwordCheck) {
        res.status(403).json({
            message: "user not found"
        });
        return;
    }
    const token = jsonwebtoken_1.default.sign({
        email: user.email
    }, JWT_SECRET);
    res.json({
        message: "user signed in",
        token: token
    });
});
app.listen(3000, () => {
    console.log('server up at port 3000');
});
