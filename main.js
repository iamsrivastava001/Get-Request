
document.getElementById('get').addEventListener('click',getData);

function getData(){
    let config = {
        method : 'get',
        url : 'https://api.github.com/users'
    }

    axios(config).then(res => {
        showData(res)
        console.log(res)
    }).catch(err => {
        showError(err)
    })
}

// Function to Show API Response

function showData(response){
    document.getElementById('response').innerHTML = `

                <div class="mt-5 card">
                    <div class="card-header">
                        <h3>Response Status : ${response.status}</h3>
                    </div>9

                    <div class="card-body">`
                    + 

                    response.data.map(item => `

                    <div class="card mb-3" >
                    <div class="card-header">
                        <h5>Github User - ${item.id}</h5>
                    </div>

                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.avatar_url}" class="mx-2 my-2 img-thumbnail">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <span><span class="font-weight-bold">Username : </span>${item.login}</span>
                            </div>
                        </div>
                        </div>
                     </div>
                    
                    `)
                    
                    +
                    `
                    </div>
                </div>    
    `;
}


function showError(error){
    console.log(error)
}



