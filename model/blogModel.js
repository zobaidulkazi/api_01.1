const {mongoose, model, Schema} = require('mongoose')



const blogSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]

});

const storySchema = new Schema({

    author: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    title: {
        type: String,
        required: true,
        min: [6, 'Too fe Cipher'],
        max: 12
    },
    fans: [{type: Schema.Types.ObjectId, ref: 'Person'}],
    date: {type: Date, required}
})


const Story = model('Story', storySchema);
const Blog = model('Blog', blogSchema);

module.exports = {
    Blog,
    Story
}