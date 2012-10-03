var foo = require('../lib/foo');

exports.testFooHello = function(test){
    test.equal(foo.hello(),"Hello world");
    test.done();
};
