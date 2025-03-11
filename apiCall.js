fetch("https:api.example.com/user", {
    method: "Get",
    henders: {
        "Authorization": "Bearer your_taken_here"
    }
})
.then(respons => respons.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));