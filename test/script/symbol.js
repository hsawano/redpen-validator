var expectedResult = 16;
var exec = require('child_process').exec;
var fs = require('fs');

var r = fs.createReadStream('symbol.js'),
    w = fs.createWriteStream('test/symbol.js');

r.pipe(w);
w.on('close', function(){
  exec('redpen -c test/redpen-conf.xml test/doc/symbol.md -r json -l 100', function(err, stdout, stderr){
    if (err) throw err;
    fs.unlink('test/symbol.js',function(){
      var result = JSON.parse(stdout)
      if (result[0].errors.length !== expectedResult){
        throw new Error(result[0].errors.length + " error was occured. It is unexpected.")
      } else {
        console.log(result[0].errors.length + " error was occured. This is expected.")
      }
    });
  });
});
