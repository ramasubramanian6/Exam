const fs=require('fs').promises;
const path=require('path');



const filepath=path.join(__dirname,'text1.text');

const greet= async ()=>
    {
        try
        {
            const data=await fs.readFile(filepath,'utf8');
            await fs.writeFile(filepath,'Vanakam DI Mapla');
            await fs.rename(filepath,path.join(__dirname,'data.text'))
            console.log(data);

        }
        catch(err)
        {
            console.log(err);
        }
    } 
greet();