db.CreateUser({
    user:"admin",
    pwd:"admin",
    roles:[{
        role:'readWrite',
        db:'UnitsDb'
    }]
});
db.createCollection(Units)