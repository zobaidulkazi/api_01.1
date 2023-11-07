import MongoDB from './mongodb';

const MongoClient = MongoDB.MongoClient;


const usl = 'localhost';
const client = new MongoClient(usl, {useNewUrlParser: true});

client.connect(err => {
    const collection = client.db()
})