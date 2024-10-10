const fs = require('fs');


// const array = ['.gif', '.jpg']
// fs.writeFile('log.txt', array[0], (err) =>
    //     err ? console.error(err) : console.log('Success!')
// );

// fs.appendFile('log.txt', `${array}\n`, (err) =>
    //     err ? console.error(err) : console.log('Commit logged!')
// );

const dataFile = document.getElementById('data-file-input')
dataFile.addEventListener('change', handleFiles)

function handleFiles() {
    console.log('file uploaded')
    fs.readFile('data.csv', 'utf8', (error, data) =>
        error ? console.error(error) : console.log(data)
    );
}
