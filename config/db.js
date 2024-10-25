const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://satishkanaujiya19:NZRTtDM3WVRmsmeH@role-base-api-cluster.ytldd.mongodb.net/Role-base_api').then((res)=>{
    console.log('Database Connected Succesfully');
}).catch((err)=>{
    console.log('err',err);
    
})