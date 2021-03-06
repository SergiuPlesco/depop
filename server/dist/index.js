"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
    console.log("Server running at localhost:", PORT);
});
// "server": "\"tsc -w\" \"nodemon dist/index.js\""
