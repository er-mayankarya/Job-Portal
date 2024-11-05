import app from './app.js'

app.listen(process.env.PORT , () => {
    console.log(`Port is listening at ${process.env.PORT }`);
});