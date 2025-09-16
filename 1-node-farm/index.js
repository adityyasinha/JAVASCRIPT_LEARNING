const fs = require('fs');  //fs=file system
const http = require('http');
const url = require('url');

/////// FILES
//BLOCKING, SYNCHRONOUS WAY

// const textIn = fs.readFileSync('./txt/input.txt','utf-8')
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;  //'this is :' +textIn
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('File written!');


// const http = require('http');

//NON-BLOCKING, ASYNCHRONOUS WAY

// fs.readFile('./txt/start.txt','utf-8',(err, data1) => {
//     if(err) return console.log('ERROR! 💥');
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err, data2) => {
//        console.log(data2);
//         fs.readFile('./txt/append.txt','utf-8',(err, data3) => {
//            console.log(data3);

//            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//               console.log('Your file has been written 😁');
//             })
       
//         });
   
//     });

// });
// console.log('Will read file!');

///////////// SERVER

const server = http.createServer((req,res) => {
    console.log(req.url);


    const pathName = req.url;

    if( pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product'){
        res.end('This is the PRODUCT');
    } else if (pathName === '/api') {

fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data)=> {
    const productData = JSON.parse(data);
    console.log(productData);
    res.writeHead(200,{ 'Content-type' : 'application/json'});
    res.end('data');

       })

        res.end('API');
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
    res.end('<h1>Page not found!</h1>');
    }
});

server.listen(5900, '127.0.0.1', () => {
    console.log('Listening to requests on port 5900');
});