const fs = require('fs');
const path = require('path');

const datafolder = path.join(__dirname, "data");
if (!fs.existsSync(datafolder)) {
    fs.mkdirSync(datafolder);
    console.log('data folder is created');
}

const file = path.join(datafolder, "tempfile.txt");

// ===== Synchronous way =====

fs.writeFileSync(file, 'assalamualaikum');
console.log('file created successfully');

const readContentFromFile = fs.readFileSync(file, 'utf8');
console.log('content of the file:', readContentFromFile);

fs.appendFileSync(file, '\nSab khairiyat');
const readContentFile = fs.readFileSync(file, 'utf8');
console.log('content of the file:', readContentFile);

// ===== Asynchronous way =====

const asyncFilePath = path.join(datafolder, 'tempfile2.txt');

fs.writeFile(asyncFilePath, 'wa-alaikum-assalam', (error) => {
    if (error) throw error;
    console.log('async file is created successfully');

    fs.readFile(asyncFilePath, 'utf8', (error, data) => {
        if (error) throw error;
        console.log('asyncFileContent:', data);

        fs.appendFile(asyncFilePath, '\nalhamdulillah', (error) => {
            if (error) throw error;
            console.log('new line added to async file');

            fs.readFile(asyncFilePath, 'utf8', (error, updatedData) => {
                if (error) throw error;
                console.log('updated data:', updatedData);
            });
        });
    });
});
