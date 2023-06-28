import express from 'express';
import bodyParser from'body-parser';
import cors from'cors';
import bcrypt from'bcryptjs';

const app=express();

app.use(bodyParser.json());
app.use(cors())

const database = {
    users: [
        {
            id:'123',
            name:'John',  
            email:'prateeksha8177',
            password:'cookies',
            enteries:0,
            joined:new Date()

        },
        {
            id:'124',
            name:'punkinn',
            email:'prate177',
            password:'cmolalala',
            enteries:0,
            joined:new Date()

        }
    ],
    login: [
        {
            id:'987',
            hash:'',
            email:'john@gmail.com'
        }
    ]
}

app.get('/',(req,res)=>{
    res.send(database.users)
})

app.post('/signin',(req,res)=>{
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json('success');
        } else{
            res.status(400).json('error logging in');
        }
})


app.post('/register',(req,res)=>{
    const{name,email,password} = req.body; 
    bcrypt.hash(password, null, null, function(err, hash) {
    console.log(hash);
});
    database.users.push({
            id:'125',
            name:name,
            email:email,
            password:password,
            enteries:0,
            joined:new Date()
    })
    res.json(database.users[database.users.length - 1]); 
})

app.get('/profile/:id' ,(req,res)=>{
    const{id} = req.params;
    let found=false;
    database.users.forEach(user =>{
        if(user.id === id){
          found=true;
          return res.json(user);
        }
    })
   if(!found){
    res.status(400).json('not found');
   }
})


// app.put('/image',(req,res)=>{
//     const{id} = req.body;
//     let found=false;
//     database.users.forEach(user =>{
//         if(user.id === id){
//           found=true;
//           user.enteries++
//           return res.json(user.enteries);
//         }
//     })
//    if(!found){
//     res.status(400).json('not found');
//    }
// })

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3001,()=>{
    console.log('app is running on post 3001');
})