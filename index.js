const protoLoader = require('@grpc/proto-loader');
const grpcLibrary = require('grpc');

protoLoader.load('./test.proto', {}).then(packageDefinition => {
  const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
  const test = packageObject.test;
});