const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
// app.use(express.static('*'))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.status(200).sendfile('./index.html');
})

app.post('/test', (req, res) =>{
    res.json({
        return_string: everyThirdLetter(req.body.string_to_cut)
    });
})

function everyThirdLetter(inputStr){
    if(inputStr.length < 3){
        return '';
    }else {
        let answer = '';
        for(let i = 2; i < inputStr.length ; i = i +3){
            answer += inputStr[i];
        }
        return answer;
    }
}

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})