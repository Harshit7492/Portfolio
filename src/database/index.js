// const express=require('express')

const mongoose=require('mongoose')


export default async function conectToDB(params) {
    try {
        await mongoose.connect('mongodb+srv://Harshit:xpFznSBcUQ2yibap@cluster0.xh1qn.mongodb.net/',{
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })

        console.log("Database is connected succesfully")
    } catch (err) {
        console.log(err)
        
    }
}