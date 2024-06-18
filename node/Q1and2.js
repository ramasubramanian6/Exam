const os = require('os');
const path = require('path');
const fs = require('fs');






const filepath=path.join(__dirname,'text1.text');

fs.readFile(filepath,'utf-8',(error,data)=>
{
    if(error)
        {
            console.log(error)
            return;
        }
    console.log(data);


    fs.appendFile(filepath,'Hello',(err) =>
    {
        if(err)
            {
                return;
            }
    })

    fs.writeFile(filepath,'Hello World',(error)=>
    {
        if(error)
            {
                console.error(error)
            }

    })
})

const rs=fs.createReadStream(filepath,{encoding:'utf8'})
const ws=fs.createWriteStream(path.join(__dirname,'text2.text'))


rs.on('data',(dataChunk)=>
{
    ws.write(dataChunk)
})


