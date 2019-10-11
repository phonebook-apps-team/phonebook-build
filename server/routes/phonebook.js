var express = require('express');
var router = express.Router();
var PhoneBook = require('../models/users')


router.get('/', function (req, res, next) {
  let response = {
    idUser: '',
    name: '',
    phone: ''
  }
  PhoneBook.find().then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(401).json({
      message: 'data not found'
    })
  })

});

router.post('/', (req, res, next) => {

  console.log('req Body > ', req.body);
  
  PhoneBook.create({
    idUser: req.body.idUser,
    name: req.body.name,
    phone: req.body.phone
  })
    .then(data => {
      res.status(200).json({
        status: "SUCCESS",
        RESPONSE: {
          idUser: data.idUser,
          name: data.name,
          phone: data.phone
        }
        
      })
        .catch(err => {
          res.status(401).json({
            status: "NOT FOUND",
            RESPONSE: {
              idUser:'',
              name: '',
              phone: ''
            }
          })
        })
    })
})


router.put('/:id', (req, res) => {

  console.log('data request >', req.body);
  
  PhoneBook.findOneAndUpdate(
    { idUser: req.params.id },
    { name: req.body.name, numberPhone: req.body.numberPhone }, { new: true }
  ).then(data => {
    res.status(201).json({
      success: true,
      message: 'data have been update',
      data
    })
  }).catch(err => {
    res.status(204).json({
      status: false,
      message: 'updated failed',
    })
  })
})


router.delete('/:id', (req, res) => {
  PhoneBook.findOneAndRemove({
    idUser: req.params.id
  })
    .then(data => {
      console.log('this >>', data)
      res.status(200).json({
        status: 'SUCCESS',
        data
      })
    })
    .catch(err => {
      res.status(401).json({
        status: 'FAILED'
      })
    })
})

module.exports = router;
