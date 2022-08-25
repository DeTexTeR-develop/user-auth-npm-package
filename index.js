const bcrypt = require('bcrypt');

module.exports.comparePass = (password, hashedPassword, salt) => {
    let hashedInput = bcrypt.hash(password, salt);
    if(hashedInput === hashedPassword){
        return true;
    }
    else return false;
};

