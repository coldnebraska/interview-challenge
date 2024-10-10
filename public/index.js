const dataFile = document.getElementById('data-file-input')
dataFile.addEventListener('click', handleFiles)

function handleFiles() {
    try {
        fetch('http://localhost:3001/readfile', {
            method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            const resultsTag = document.getElementById('results')
            resultsTag.innerHTML = ''

            data.array.forEach(element => {
                const content = document.createElement('p')
                content.innerHTML = element

                resultsTag.appendChild(content)
            });
        })
    } catch (error) {
        console.log(error)
    }
}
