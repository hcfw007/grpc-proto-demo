const messages = require('./output/test_pb');
const services = require('./output/test_grpc_pb');

const grpc = require('grpc');

const client = new services.UserClient('localhost:50051',
  grpc.credentials.createInsecure());

const request = new messages.UserRequest();
request.setUserid(1);
client.getUser(request, function(err, response) {
  if (!err) {
    console.log(response.getMessage());
  } else {
    console.debug(err)
  }
})

// const protoLoader = require('@grpc/proto-loader');

// protoLoader.load('./test.proto', {}).then(packageDefinition => {
//   const packageObject = grpc.loadPackageDefinition(packageDefinition);
//   const test = packageObject.test;
//   console.log(test.User)
//   const client = new test.User('localhost:50051', grpc.credentials.createInsecure());
// });