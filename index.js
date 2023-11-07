require('dotenv').config()
const express = require('express')
const { mongoose } = require('mongoose')
const morgan = require('morgan')


// Router import
const userRouter = require('./router/userRoute')
// const profileRoute = require('./router/profileRoute')

const app = express()
const PORT = process.env.PORT || 3331



// middleware for express
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended: true}),
    express.json(),
]
app.use(middleware)

// use all router path

const AllRoute = [
     userRouter,
    //  profileRoute
]

app.use('/auth',AllRoute)


app.listen(process.env.PORT, (err) => {
    if(err){
        console.log(err)
        console.log('Server Run Error')
    }else{
        console.log(`Server is connect success ${PORT}`)
    }
})

// monog_db connect
mongoose.connect(process.env.MONGODB_URL,{serverSelectionTimeoutMS: 10} )
.then(() => {
    console.log('MongoDB connact Successfully')
}).catch((err) => {
    console.log(err)
 })

// .finally(() => {
//     mongoose.connection.close()
// })


// try {
    
// } catch (error) {
    
// }