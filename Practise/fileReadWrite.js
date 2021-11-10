// const {readFileSync, writeFileSync} = require('fs');
// const read1 = readFileSync('./File/read.txt', 'utf-8');
// console.log(read1)
// writeFileSync('./File/newfile.txt',
// `Here is overridden text: ${read1}`
// )
const {readFile, writeFile} = require('fs');
readFile('./File/read.txt', 'utf8', (err, result)=>
{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    writeFile('./File/newfile.txt', 
   `Hi my friend this is new way to write okay: ${first}`,(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
   }

    )
})

