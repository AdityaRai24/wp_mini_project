import express from 'express'
import cors from 'cors'
import router from './routes/router.js'
import Connection from "./connection/Connection.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/",router);

Connection()



app.listen(8000,()=>{
    console.log("hello world");
})