// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var test_pb = require('./test_pb.js');

function serialize_test_UserReply(arg) {
  if (!(arg instanceof test_pb.UserReply)) {
    throw new Error('Expected argument of type test.UserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_UserReply(buffer_arg) {
  return test_pb.UserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_UserRequest(arg) {
  if (!(arg instanceof test_pb.UserRequest)) {
    throw new Error('Expected argument of type test.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_UserRequest(buffer_arg) {
  return test_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getUser: {
    path: '/test.User/getUser',
    requestStream: false,
    responseStream: false,
    requestType: test_pb.UserRequest,
    responseType: test_pb.UserReply,
    requestSerialize: serialize_test_UserRequest,
    requestDeserialize: deserialize_test_UserRequest,
    responseSerialize: serialize_test_UserReply,
    responseDeserialize: deserialize_test_UserReply,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
