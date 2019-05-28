config={
  '_id' : 'my-mongo-set',
  protocolVersion: 1,	
  'members' : [
    {'_id' : 0, 'host' : '172.31.31.74:27017', priority: 3},
    {'_id' : 1, 'host' : '172.31.30.139:27017', priority: 1}
  ]
};
rs.initiate(config)
