const container = document.querySelector('#user-container')
const form = document.querySelector('form')

const URL = `http://localhost:4000/api/users`

const userCallback = ({ data: users }) => displayUsers(users)
const errCallback = err => console.log(err)
const getAllUsers = () => axios.get(URL).then(userCallback).catch(errCallback)
const createUser = body => axios.post(URL, body).then(userCallback).catch(errCallback)
const deleteUser = id => axios.delete(`${URL}/${id}`).then(userCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()
    let name = document.querySelector('#name')
    let bodyObj = {
        name: name.value,
    }
    createUser(bodyObj)
    name.value = ''
}

function createUserCard(user) {
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')
    userCard.innerHTML = `
    <div class="list-container">
    <p class="name">${user.name}</p>
    <button class="btn" onclick="deleteUser(${user.id})">delete</button>
    </div>
    `
    container.appendChild(userCard)
}

function displayUsers(arr) {
    container.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createUserCard(arr[i])
    }


}

form.addEventListener('submit', submitHandler)

getAllUsers()

