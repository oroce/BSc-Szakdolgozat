db.newCollection
    .find({
         "dbT|í|pus": /mongodb/i
     })
    .limit( 100 )
    .skip( 20 )
    .sort({
        "l|é|trehozva": -1
    })
