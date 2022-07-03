# =========================
# jsharmony-db-mssql-native
# =========================

jsHarmony Database Connector for SQL Server (MS Native Driver)

## Installation

npm install jsharmony-db-mssql-native --save

## Usage

```javascript
var JSHmssql = require('jsharmony-db-mssql-native');
var JSHdb = require('jsharmony-db');
var dbconfig = { _driver: new JSHmssql(), server: "server.domain.com", database: "DBNAME", options: { trustedConnection: true } };
var db = new JSHdb(dbconfig);
db.Recordset('','select * from c where c_id >= @c_id',[JSHdb.types.BigInt],{'c_id': 10},function(err,rslt){
  console.log(rslt);
  done();
});
```

This library uses the NPM mssql library.  Use any of the connection settings available in that library.

## Release History

* 1.0.0 Initial release