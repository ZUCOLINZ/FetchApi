// using fetch to retrieve the data from the API
fetch('https://jsonplaceholder.typicode.com/posts',
{
       method: 'POST',
        body: JSON.stringify({
        title: 'Test Post',
        body: 'Test Content',
        id: 100, 
        userId: 50

    }),
    headers: {
        'Content-type': 'application/json'

    }

})
.then((response) => response.json())
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

