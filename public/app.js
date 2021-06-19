const form = document.getElementById("api_form");
const result = document.getElementById("api_result")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const stringToCut = document.getElementsByClassName("payload_box")[0].value;
    const payload = {
        "string_to_cut" : stringToCut
    }
    console.log(payload)
    fetch('/test', {
        method:'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res =>{
        res.json().then(data =>{
            result.value = data.return_string;
        })
    })
})

