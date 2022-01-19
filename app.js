var https = require('https');
const lineReader = require('line-reader');

Myargs = process.argv.slice(2)
var url = Myargs[0]
var wordlist = Myargs[2]

    if(Myargs[1] == '-w' || Myargs[1] == '-wordlist'){
        if(url.indexOf('.') >= 0 && (url.indexOf('https://')  || url.indexOf('http://'))){
            lineReader.eachLine(wordlist, function(line) {
                var path = url+line;
                https.get(path, function(res) {
                    if(res.statusCode == 200)
                    console.log('Path Finded : ' + path)
                  })
              });
        }else{
            console.log('Try use the http:// or https://');
        }
    }else{
        console.log('Usage : node directoryscanner.js https://example.com/ -w /home/user/desktop/wordlist.txt')
    }
    







 
  