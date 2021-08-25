const messages = require('./output/test_pb');
const services = require('./output/test_grpc_pb');

const grpc = require('grpc');
const data = require('./data.json')

function getUser(call, callback) {
  const reply = new messages.UserReply();
  const id = call.request.getUserid();
  let result = 'No Match';
  for (let person of data) {
    if (Number(person.id) === Number(id)) {
      result = person.name;
    }
  }
  reply.setName(result)
  callback(null, reply)
}

const server = new grpc.Server();
server.addService(services.UserService, { getUser });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});