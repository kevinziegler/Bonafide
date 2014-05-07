var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var organizationalUnitSchema = new Schema({
    name : { type: String, unique: true, required: true },
    description : String
});

module.exports = mongoose.model('OrganizationalUnit', organizationalUnitSchema);
