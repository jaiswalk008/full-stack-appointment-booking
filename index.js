const form = document.getElementById('form');
form.addEventListener('submit',addUser);

function addUser(e){
    axios.get('http://localhost:3000/add-user')
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))

    axios.post('http://localhost:3000/add-user',{
        name:e.target.name.value,
        email:e.target.email.value,
        phone:e.target.phone.value
    })
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))
}
