const express = require('express')
const router = express.Router();
const con  = require("../config");

router.get('/',(req,res,next)=>{
    con.query('select menu_id,menu_name,description from menu where is_deleted = 0',(err,result)=>{
        if(err){
            res.status(404).send("no data")
        }else{
            res.send(result)
        }
    })
});

router.post('/',(req,res,next)=>{
    const data = {menu_name:req.body.menu_name,description:req.body.description};
    con.query('insert into menu set ?',data,(err,result)=>{
     if(err){
        res.status(201).send(err)
     } else{
        res.send(result)
     }  
    })
})

router.put('/:id',(req,res,next)=>{
    const data  = {menu_name:req.body.menu_name,description:req.body.description};
        con.query('Update menu set menu_name=?,description=? where menu_id = ?',[req.body.menu_name,req.body.description,Number(req.params.id)],(err,result)=>{
            if(err){
                console.warn(err)
            }else{
                console.log("data updated")
                res.send(result)
            }
        })
})

router.delete('/:id',(req,res,next)=>{
    const data = {}
    con.query('update menu set is_deleted=1 where menu_id=?',req.params.id,(error,result)=>{
        if(error){
            console.warn("can not delete")
        }res.send(result)
    })
})

module.exports = router


