// retrying the connection mongoose for looping

const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost', {
    ssl: true,
    sslValidate: false,
})

const serverSelectionTimeoutMS =    3000;


for (let i = 0; i < 3; i++) {
    try {
        await mongoose.connect('mongodb://localhost'), {
            serverSelectionTimeoutMS: serverSelectionTimeoutMS

        }
        break;
    } catch (error) {
        console.log('Error connecting to server', i)

        if(i >= 2) {
         throw error;
        }
    }
}



const user = 'root';

user.validate()

user.save()