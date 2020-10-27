const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

//database connection 
const Url ='mongodb://localhost:27017/allinclusive'
mongoose.connect(Url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true
})
const Connection = mongoose.connection ;
Connection.on('error',console.error.bind(console,'connection error:'))
Connection.once('open',function(){
console.log('Database is connected ')
})


//crud operation for users 
const User = require('../database/Schema/Users.js');

app.get('/user',async(req,res)=>{
  await User.find({},(err,data)=>{
    res.json(data)
  })
});

app.post('/user/add',async(req,res)=>{
  newUser = new User ({
     userName: req.body.userName,
     email:req.body.email,
     password:req.body.password,
     phoneNumber:req.body.phoneNumber,
     specialNeed :req.body.specialNeed,
     imgUrl :req.body.imgUrl 
  })
  await newUser.save(()=>{res.json(newUser)})
});

app.delete('/user',async(req,res)=>{
  await User.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
});


app.delete('/user/:id',async(req,res)=>{
  await User.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'specific data deleted'})
});


app.put('/user/:id',async(req,res)=>{
  await User.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'specific data updated'})
});

//crud operations for events
const Event = require('../database/Schema/Events.js');

app.get('/event',async(req,res)=>{
  await Event.find({},(err,data)=>{
    res.json(data)
  })
});

app.get('/event/:id',async(req,res)=>{
  await Event.findById(req.params.id,(err,data)=>{
    res.json(data)
  })
})


app.post('/event/add',async(req,res)=>{
  newEvent = new Event ({
     name: req.body.name,
     type:req.body.type,
     place:req.body.place,
     date:req.body.date,
     imgUrl :req.body.imgUrl,
     like :req.body.like,
     disLike : req.body.disLike
  })
  await newEvent.save(()=>{res.json(newEvent)})
});



app.delete('/event',async(req,res)=>{
  await Event.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
});


app.delete('/event/:id',async(req,res)=>{
  await Event.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'specific data deleted'})
});

app.put('/event/:id',async(req,res)=>{
  await Event.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'specific data updated'})
});

//crud operation for company
const Company = require('../database/Schema/Companies.js');

app.get('/company',async(req,res)=>{
  await Company.find({},(err,data)=>{
    res.json(data)
  })
});

app.get('/company/:id',async(req,res)=>{
  await Company.findById(req.params.id,(err,data)=>{
    res.json(data)
  })
})


app.post('/company/add',async(req,res)=>{
  newCompany = new Company ({
     name: req.body.name,
     email:req.body.email,
     password:req.body.password,
     phoneNumber:req.body.phoneNumber,
     adress :req.body.adress,
     imgUrl :req.body.like
  })
  await newCompany.save(()=>{res.json(newCompany)})
});


app.delete('/company',async(req,res)=>{
  await Company.deleteMany(req.params.id,req.body)
  res.json({'message':'all data deleted'})
});


app.delete('/company/:id',async(req,res)=>{
  await Company.findByIdAndDelete(req.params.id,req.body)
  res.json({'message':'specific data deleted'})
});

app.put('/company/:id',async(req,res)=>{
  await Company.findByIdAndUpdate(req.params.id,req.body)
  res.json({'message':'specific data updated'})
});




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});