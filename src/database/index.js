// const express=require('express')

const mongoose=require('mongoose')
require('dotenv').config();

const URI = process.env.MONGODB_URI;

export default async function conectToDB(params) {
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        console.log("Database is connected succesfully")

    } catch (err) {
        console.log(err)
        
    }
}