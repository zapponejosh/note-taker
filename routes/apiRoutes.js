const fs = require('fs');

module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    fs.readFile('./db/db.json', 'utf8', function(err,data) {
        if (err) console.log("Error reading database\n" + err);
        res.json(data);
    })
  });



app.post('/api/notes', function (req, res) {
    fs.readFile('./db/db.json', function(err,data) {
        if (err) console.log("Error reading database\n" + err);
        const list = JSON.parse(data);

        const post = {
            id: list.length + 1,
            title: req.body.title,
            text: req.body.text
        }
        list.push(post);
        fs.writeFile('./db/db.json', JSON.stringify(list), function(err){
            if (err) console.log("Error writing to database\n" + err);
            console.log("successfully saved update");
        })
    })

res.end()
});

app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json', function(err,data) {
        if (err) console.log("Error reading database\n" + err);
        const list = JSON.parse(data);

        const newArray = list.filter((entry) => entry.id != req.params.id);
        
        fs.writeFile('./db/db.json', JSON.stringify(newArray), function(err){
            if (err) console.log("Error writing to database\n" + err);
            console.log("successfully deleted note");
        })

    })

    res.end()

})

}