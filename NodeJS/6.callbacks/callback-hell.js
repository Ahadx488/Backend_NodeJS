const fs = require('fs')

fs.readFile('input.txt' ,'utf8', (err,data)=>{
    if(err) {
        console.error('error in reading file : ',err)
        return 
    }
    
    const modifyFileData = data.toUpperCase();

    fs.writeFile('output.txt', modifyFileData , (err)=>{
        if(err){
            console.error('error in writing file : ',err)
            return 
        }
        
        console.log('data written to the new file')
    

        fs.readFile('output.txt','utf8',(err,data)=>{
            if(err){
                console.error('error in reading updated file',err)
                return
            }
            console.log(data)

        });
  });
})