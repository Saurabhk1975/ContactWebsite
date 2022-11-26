const mongoose=require('mongoose');

// schema for database start
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }
});
// schema end
const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;