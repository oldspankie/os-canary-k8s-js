const http = require('http');

let today = new Date().toISOString().slice(0, 10)

// Just App Stuff
const requestListener = (req, res)=>{
  console.log("Request is Incoming");

  res.writeHead(200, {"Content-Type": "application/json"})
  var jso = JSON.stringify({
    message:"hello there",
    envData: {
      hostname: process.env.HOSTNAME,
      node: process.env.NODE_VERSION,
      home: process.env.HOME
    },
    appData: {
      imageName: process.env.IMAGENAME,
      appVersion: process.env.APPVERSION,
      podName: process.env.POD_NAME,
      podNamespace: process.env.POD_NAMESPACE
    },
    date: today,
    appVersion: process.env.APPVERSION
  })
  res.end(jso);
};


const server = http.createServer(requestListener);
const port = 3001;
server.listen(port);
console.debug('Server listening on port ' + port);

// Test reading env vars
console.debug('home is where the ' + process.env.HOME + ' is.');
console.debug('path is :: ' + process.env.PATH);
console.debug('junk is :: ' + process.env.JUNK);
