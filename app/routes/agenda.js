var express = require('express');
var router = express.Router();
const Agenda = require('../models/agenda');


router.post('/', async function (req, res) {
    const { nome, idade, estadoCivil, cpf, cidade, estado } = req.body;

    var agenda = new Agenda({ nome: nome, idade: idade, estadoCivil: estadoCivil, cpf: cpf, cidade: cidade, estado: estado });

    try {
        await agenda.save();
        res.json(agenda);
    } catch (error) {
        res.status(500).send(err);

    }
});

router.put('/:id', async function (req, res) {
    const { nome, idade, estadoCivil, cpf, cidade, estado } = req.body;
    const { id } = req.params;

    try {
        var agenda = await Agenda.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    nome: nome,
                    idade: idade,
                    estadoCivil: estadoCivil,
                    cpf: cpf,
                    cidade: cidade,
                    estado: estado
                }
            },
            { upsert: true, 'new': true }
        );
        res.json(agenda);
    } catch (error) {
        res.status(500).send(err);
    }
});

router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    Agenda.remove({ _id: id })
        .exec()
        .then(() => {
            res.status(200).json({
                message: 'Contato Deletado'
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});
module.exports = router;


