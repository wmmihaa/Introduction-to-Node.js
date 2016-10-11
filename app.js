var mongoDb = require('mongodb');
var url = "mongodb://localhost:27017/local"
var temperatures;

var d = Date.parse(new Date());

mongoDb.MongoClient.connect(url, function(err,db){
     temperatures = db.collection("temperatures");
     
     temperatures.aggregate(
        [
           { $project: { temp:'$temp', "timeSpan": { $add: [new Date(0), "$_dateTime"] } }},
           { $project: { "timestamp": { $minute: "$timeSpan" }, temp:'$temp' } },
           {
               $group: {
                   _id: { minuteRead: "$timestamp" },
                   label : { $avg :"$timestamp" },
                   avgTemp : { $avg :"$temp" }
               }
           }
        ],
        function (err, result) {
            if (err)
                console.log("ERROR " + err);
            else
                console.log(result);
        }
    );

});








