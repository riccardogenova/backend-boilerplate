"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    res.json({ message: "Benvenuto nell'API!" });
});
app.listen(PORT, () => {
    console.log(chalk_1.default.bold.green(`Server run on http://localhost:${PORT}`));
});
