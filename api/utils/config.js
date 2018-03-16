const sessionSecret = 'super secret'; // make sure to change in produciton
const db = 'Some Db String'
module.exports = {
    sessionSecret,
    db:{
        'local' : 'mongodb://localhost/coupon',
       // 'mlab'  : 'MLAB ID REQUIRED'
    }
};
