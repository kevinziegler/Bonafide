var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var organizationSchema = new Schema({
    name : { type: String, unique: true, required: true},
    description: String,
    country: String,
    state: String
});

module.exports = mongoose.model('Organization', organizationSchema);
