require("dotenv").config()
const app = require("./app")

const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000


const startServer = async() => {
    try{
    await connectDB();

    app.listen(PORT , () =>{
        console.log(`server is running on ${PORT}`)
    });
    } catch(error){
        console.log("failed from server file")
    }   
};

startServer();



