const os = require("os");

// info about current users
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`They system uptime is ${os.uptime()} second`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
