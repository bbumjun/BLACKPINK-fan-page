const express = require('express')
const cors = require('cors')
const app  = express()
const port = process.env.PORT || 3001
const galleryImages = require('./gallery-images.json')
app.use(cors())
app.get('/',(req,res)=>{
    res.json({
        success:true,
    })
})

app.get('/gallery/pictures/:index',(req,res)=>{
    const index = Number(req.params.index)
    console.log(index,index+10)
    res.json({srcList : galleryImages.src.slice(index,index+10)})
})

app.listen(port,()=>{
    console.log(`server is listening at ${port} port`)
})