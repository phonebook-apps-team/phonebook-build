var express = require('express');
var router = express.Router();
var PhoneBook = require('../models/users')


router.get('/', function (req, res, next) {
  let response = {
    name: '',
    phone: ''
  }
  PhoneBook.find().then(result => {
    res.status(200).json(result)
  }).catch(err => {
    res.status(401).json({
      message: 'data not found'
    })
  })

});

router.post('/', (req, res, next) => {
  PhoneBook.create({
    name: req.body.name,
    numberPhone: req.body.numberPhone
  })
    .then(result => {
      res.status(200).json({
        status: "SUCCESS",
        RESPONSE: {
          _id: result._id,
          name: result.name,
          numberPhone: result.numberPhone
        }
      })
        .catch(err => {
          res.status(401).json({
            status: "NOT FOUND",
            RESPONSE: {
              _id: '',
              name: '',
              numberPhone: ''
            }
          })
        })
    })
})


router.put('/:id', (req, res) => {
  PhoneBook.findOneAndUpdate(
    { _id: req.params.id },
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
    _id: req.params.id
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
