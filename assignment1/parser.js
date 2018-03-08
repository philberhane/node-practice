const https = require('https')
const url = 'https://github.com'
https.get(url, (response) => {
    let webpageText = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        /*
        Write some code that
        (a) finds all of the words from inside the <h1> tag of a webpage, and
        (b) converts those words into an array.
        So, if a webpage has the following tags:
        ------------------------------------------------------------------------
        <body>
            ...
            <h1>Welcome to Node.js!</h1>
            ......
            <h1>Working with npm</h1>
            ....
            <h1>Installing MongoDB</h1>
            ...
        </body>
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
        */

        // YOUR CODE HERE:
        const list = webpageText.split('h1')
          for ( let i=0; i<list.length; i++ ) {
                const endPoint = list[i].indexOf('<')
                const startPoint = list[i].indexOf('>')
                
                if (list[i].indexOf('<!DOCTYPE html>') === -1) {
        
                    if (list[i].indexOf('<') !== -1 ) {
                        console.log(list[i].substring(startPoint+1, endPoint))  
                        }
                }
          }




    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})