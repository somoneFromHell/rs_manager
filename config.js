const mysql = require('mysql')

const con = mysql.createConnection({

    host:'www.db4free.net',
    user:'mitesh_rs',
    password:'My@#$sql23',
    database:'rs_management'
})

con.connect((err)=>{
    if(err){
        console.warn("can not connect to database..")
    }else{
        console.log("connected to database...")
    }
}
)



module.exports = con;