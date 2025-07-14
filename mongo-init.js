// Create a new database and switch to it
db = db.getSiblingDB('MyDB');
db.createCollection('Users');

db = db.getSiblingDB('TestDB');
db.createCollection('Users');