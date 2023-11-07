const { Model, Schema } = require("mongoose");


const childSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [6, 'Too fe Cipher'],
        max: 12,
        unique: true
    }
})


const signInSchema = new Schema({
    childSchema: childSchema,
    
    user: {
        type: String,
        required: true,
        min: [6, 'Too fe Cipher'],
        max: 12
    },
    drink: {
        enum: ['drink', 'Tea'],
        required: function() { return this.drink >5 },

    },
    phone: {
        type: String,
        validate: {
            validator: function(value) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        },
        required: [true, 'Please enter a valid phone number']
    }

})