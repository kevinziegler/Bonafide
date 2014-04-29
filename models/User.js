var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');


var userSchema = new Schema({
    email : { type: String, unique: true, required: true},
    name: { 
        first: String,
        last: String,
    },
    registered : { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose);


/* Validation Methods */
/*
userSchema.path('email').validate(function (email) {
    // FIXME: Find a better regex to use here.  
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text);
}, 'A valid email is required for registration'); 
*/

/* Virtuals */
userSchema.virtual('name.full').get(function () {
    return this.name.first + ' ' + this.name.last;
});

userSchema.virtual('name.reverse').get(function() {
    return this.name.last + ', ' + this.name.first;
});

module.exports = mongoose.model('User', userSchema);
