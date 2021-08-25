# init
```bash
npm install
```

# compile protobuffer files
remove anything in output folder(don't remove the folder)
```bash
npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./output/ --grpc_out=./output/ test.proto
```

# run server
```bash
node test_server.js
```

# send request
```bash
node test_client.js
```

# try it on your own
1. code your own .proto file
2. compile with grpc_tools_node_protoc
3. implement all methods described in your proto 
```protobuf
rpc methodName (RequestInerface) returns (ReplyInterface) {}
```
4. run the server and code a client to send requests