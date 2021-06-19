const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.status(200).sendfile('./index.html');
})

app.post('/test', (req, res) =>{
    console.log(req.body);
    res.json({
        return_string: everyThirdLetter(req.body.string_to_cut)
    });
})

function everyThirdLetter(inputStr){
    if(!inputStr || inputStr.length < 3){
        return '';
    }else {
        let answer = '';
        for(let i = 2; i < inputStr.length ; i = i +3){
            answer += inputStr[i];
        }
        return answer;
    }
}



const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})