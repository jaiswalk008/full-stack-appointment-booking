const form = document.getElementById('form');
form.addEventListener('submit',addUser);
const userList = document.querySelector('.user-list');
userList.addEventListener('click',change)

//function to add user in the list
async function addUser(e){
    e.preventDefault();
    const userData ={
        name:e.target.name.value,
        email:e.target.email.value,
        phone:e.target.phone.value
    }
    try{
        const res = await axios.post('http://localhost:3000/add-user',userData);
        addToUserList(res.data)
        form.reset();
    }
    catch(err){console.log(err)}
}
//function for dom manipulation and adding user values in the list
function addToUserList(userData){
    const newUser = document.createElement('li');
    newUser.id = userData.id;
    newUser.innerHTML = `<span>${userData.name}  ${userData.email}  ${userData.phone}
    <button class="edit btn-sm btn-dark m-1">edit </button>  <button class="delete btn-sm btn-danger m-1">delete</button>`;
    userList.append(newUser);
}

window.addEventListener('DOMContentLoaded',async ()=>{
    try{
        const res = await axios.get('http://localhost:3000/add-user');
        for(let i=0;i<res.data.length;i++){
            addToUserList(res.data[i]);
        }
    }
    catch(error){ console.log(error) }
})
//function for editing and deleting user values
async function change(e){
    
    const li = e.target.parentElement.parentElement;
    const userId = li.id;

    if(e.target.classList.contains('delete')){
        console.log(li)
        userList.removeChild(li);
        
        try{
            await axios.delete(`http://localhost:3000/delete-user/${userId}`);
        }catch(err){console.log(err)};
    }
    if(e.target.classList.contains('edit')){
        try{
            const res = await axios.get(`http://localhost:3000/edit-user/${userId}`)
            console.log(res);
            document.getElementById('name').value=res.data.name;
            document.getElementById('email').value=res.data.email;
            document.getElementById('phone').value=res.data.phone;

            await axios.delete(`http://localhost:3000/delete-user/${userId}`)
            userList.removeChild(li);
        }
        catch(err){console.log(err)};
    }
}