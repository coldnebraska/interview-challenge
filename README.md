# interview-challenge [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
This application parses through a text file with http request logs once a button on the frontend is clicked. It looks for URLs that have ".com" in the domain and then creates a new output log file with those results and sends the URLs to the frontend where it displays the URLs on the webpage.

## Table of Contents
[Images](#images)   
[Installation](#setup-instructions)  
[Code Overview](#code-overview)  
[License](#license)  
[Questions](#questions)  

## Images
![webpage](/readmeImages/webpage.png)
![code](/readmeImages/code.png)

## Setup Instructions
To set this application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies for the backend using npm install in the terminal.
4. Run the server using npm run test.
5. Access the application in your browser at http://localhost:3001.

## Code Overview

### Frontend
The frontend of this application is a simple webpage with no styling. It uses a fetch request to hit the backend endpoint that retrieves the data that it displays.

### Backend
The backend of this application uses express to create a route for the frontend to fetch. It is a GET request that takes the info from data file (data.txt) and sorts through it to find a certain parameter. In the example, it searches for any URL that has ".com" in the domain. Then it takes those results and writes them to a new file (output.txt) as well as sending it to the frontend to be displayed.

## Licenses
This application uses the [MIT LICENSE](./LICENSE), please refer to the link for more details.

## Questions
Please reach out to me for questions or comments.  
[David Brush](https://github.com/coldnebraska)

