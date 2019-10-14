router.get('/', function (req, res, next) {
    const error = e => {
      throw e
    }
    
    PhoneBook.find()
    .then(data => {
      if (data) {
      const newPhonebooks = []
      console.log('data Phonebooks > ', newphonebooks);
      
      data.forEach(data => {
        newPhonebooks.push({
         _id: data._id,
         idUser: data.idUser,
         name: data.name,
         phone: data.phone 
        })
      })
      return res.status(200).json(newPhonebooks)
    }
      error("phonebooks not found")
    }).catch(err => {
      res.status(401).json({
        message: 'data not found'
      })
    })
  
  });