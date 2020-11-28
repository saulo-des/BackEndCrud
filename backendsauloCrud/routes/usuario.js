const Usuario = require('../model/Usuario')
const express = require('express')
const { check, validationResult } = require ("express-validator")
const router = express.Router()
const auth = require('../middleware/auth')

//Listar Usuario
router.get("/", auth, async(req, res) => {
    try{
        const usuarios = await Usuario.find().sort({nome:1})
        res.json(usuarios)
    }catch (e){
        res.send({error: 'Erro'})
    }
})

//Incluindo

router.post("/",
[
    check("nome", "Informe o nome do usuario").not().isEmpty(),    
],
async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    
    try {
        const {nome, idade, email} = req.body
        usuario = new Produto({nome, idade, email})
        await usuario.save()
    }catch (err){
        return res.status(500).json({
            errors: `Erro ao salvar o usuario: ${err.message}`
        })
    }
})

module.exports = router