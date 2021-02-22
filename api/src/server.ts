import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    return res.json({
        name: "Adriano",
        birth: "1987-01-27",
        email: "adrianojrodrigues12@gmail.com"
    });
});

app.listen(3333, () => console.log('api is running'));