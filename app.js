require('babel-register')
const express =require('express')
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser=require('body-parser')



//Variable globale
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('views'))
app.set('view engine','ejs')
console.log('Pas d\'erreur')

//connexion a la base de donnéé

const db = mysql.createConnection({
    host:'localhost',
    database :'foot',
    user :'root',
    password :''
})
//les requestes
db.connect((err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('connected')
  
        app.get('/',(req,res)=>{
            
             if(req.query.name && req.query.message){
                
            var name =req.query.name;
            var message = req.query.message;  
        
        db.query('INSERT INTO user(name,message) VALUES(?,?)', [name,message],(err,result)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log('message envoyé avec success!!!!!')
            }
        })
    }
            
            
            
            
            
            
            
            
            
            
            
      db.query('SELECT * FROM user',(err,result)=>{

                 if(err){
                      console.log(err.message)
                 } else{
                     
             console.log(result)    
              res.render('index',{
                 noms :result
                
            })
                 
                    
                 }
                 
             })
            
             
            
            
            
            
            
            })
        
        
    app.get('/',(req,res)=>{
    res.render('index')                
  
            
            
       
            
      })
        
        
        
        
        
        
    }
})
app.listen(3000,(req,res)=>{
    console.log('Start on port 3000')
})









