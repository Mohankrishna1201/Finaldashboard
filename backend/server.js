const env = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());

app.use(cors({
    origin: ['https://finaldashboard-nine.vercel.app', 'https://finaldashboard-1-frontend.onrender.com'],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
});

const User = mongoose.model('User', userSchema);
const Employee = mongoose.model('Employee', employeeSchema);

// Middleware for verifying token
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.sendStatus(403);

    jwt.verify(token, 'secretkey', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Routes
app.get('/OK', async (req, res) => {
    res.send('hello');
});

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User created');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
        });
        res.status(200).send('Logged in successfully');
    } else {
        res.status(400).send('Invalid credentials');
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.send('Logged out successfully');
});

// CRUD Operations for Employees with Authentication
app.get('/employees', authenticateToken, async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.post('/employees', authenticateToken, async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).send('Employee added');
});

app.put('/employees/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndUpdate(id, req.body);
    res.send('Employee updated');
});

app.delete('/employees/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.send('Employee deleted');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
