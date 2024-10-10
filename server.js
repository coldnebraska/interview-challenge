const express = require('express');
const path = require('path')
const fs = require('node:fs');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
)

// GET route for status of server
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

// GET route for reading file
app.get('/readfile', (req, res) => {
    try {
        fs.readFile('data.txt', 'utf8', (error, data) => {
            const results = {
                array: []
            }
            if (!error) {
                console.log('Incoming data:')
                console.log(data)
                data = data.split(' ')
                fs.writeFile('output.txt', `Results:\n`, () => {})
                data.forEach(element => {
                    if (element.includes('\n')) {
                        element = element.split('\n')[1]
                    }
                    
                    if(element.includes('.com')) {
                        console.log('Results:')
                        console.log(element)
                        results.array.push(element)
                        fs.appendFile('output.txt', `${element}\n`, () => {})
                    }
                });
                res.status(200).json(results)
            }
        })
    } catch (error) {
        console.error(error)
    }
})
