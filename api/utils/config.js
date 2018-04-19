const sessionSecret = 'super secret'; // make sure to change in produciton
const db = 'Some Db String'
module.exports = {
    sessionSecret,
    db:{
        'local' : 'mongodb://localhost/coupon',
        "atlas" : "mongodb://sandun:qwerty123@cluster0-shard-00-00-5uxxy.mongodb.net:27017,cluster0-shard-00-01-5uxxy.mongodb.net:27017,cluster0-shard-00-02-5uxxy.mongodb.net:27017/coupons?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
       // 'mlab'  : 'MLAB ID REQUIRED'
    },
};
