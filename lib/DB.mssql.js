/*
Copyright 2022 apHarmony

This file is part of jsHarmony.

jsHarmony is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jsHarmony is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this package.  If not, see <http://www.gnu.org/licenses/>.
*/

var mssqlDBDriver = require('jsharmony-db-mssql');
var mssql = require('mssql/msnodesqlv8');
var process = require('process');

module.exports = mssqlDBDriver.bind(mssqlDBDriver, mssql, {
  onInitDBConfig: function(dbconfig){
    if(!dbconfig.connectionString){
      var isWindows = /^win/.test(process.platform);
      if(isWindows){
        var conString = '';
        if(dbconfig.options.odbcDriver) conString += 'Driver={'+dbconfig.options.odbcDriver+'};';
        else conString += 'Driver={SQL Server Native Client 11.0};';
        conString += 'Server=#{server}';
        if(dbconfig.options.instanceName) conString += '\\#{instance}';
        if(dbconfig.port) conString += ',#{port}';
        conString += ';';
        if(dbconfig.user) conString += 'Uid=#{user};';
        if(dbconfig.password) conString += 'Pwd=#{password};';
        if(dbconfig.database) conString += 'Database=#{database};';
        if(dbconfig.options.trustedConnection) conString += 'Trusted_Connection=#{trusted};';
        if('encrypt' in dbconfig.options) conString += 'Encrypt=#{encrypt};';
        dbconfig.connectionString = conString;
      }
    }
  }
});