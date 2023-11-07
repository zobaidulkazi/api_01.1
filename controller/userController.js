const User = require('../model/userModel')
const bcrypt = require('bcrypt')



exports.getUser =async (req, res) => {

    let user = [];

    try {
     user = await User.find();
        res.json(user)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(({
            mag: "User Not Found"
        }))
    }

   return res.status(200).send({
    mag: 'All user'
   })

}

// createUser controller
exports.createUser =async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const hashPass = await bcrypt.hash(password, 11)

        let user = new User({
            name,
            email,
            password:hashPass
        })

        let createUser = await user.save()
      res.status(200).send({
        mag: (`User create SuccessFully`, createUser)
      })

        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            mag: 'User save failed'
        })
    }
}




