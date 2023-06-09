const express = require('express')
const router = express.Router();
const con  = require("../config");
const {getMenu,addMenu, deleteMenu, updateMenu} = require('../controllers/menu')

router.get('/',getMenu);

router.post('/',addMenu)

router.put('/:id',updateMenu)

router.delete('/:id',deleteMenu)

module.exports = router


