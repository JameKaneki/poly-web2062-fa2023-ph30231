const transferRate = {
  USD: 0.000041,
  JPY : 0.0061,
  WON: 0.055,
}
var userAccount = [
  {
    id: 1,
    name: 'minh',
    pin : 123,
    balance: 9999999999
  },
  {
    id: 2,
    name: 'minh dz',
    pin : 123,
    balance: 2
  },
  {
    id: 33,
    name: 'minh dz vch',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id: 4,
    name: 'minh dz vch 1',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id:5,
    name: 'minh dz vch 2',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id: 6,
    name: 'minh dz vch 3',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id:7,
    name: 'minh dz vch 4',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id:8,
    name: 'minh dz vch 5',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id:9,
    name: 'minh dz vch 6',
    pin : 123,
    balance: 999999999999999999,
  },
  {
    id:10,
    name: 'minh dz vch 7',
    pin : 123,
    balance: 999999999999999999,
  }
]

const amount = document.querySelector('#amount')
const nameInput = document.querySelector('#name')
const searchList = document.querySelector('#searchList')
const accountList = document.querySelector('#accountList')

accountList.innerHTML = userAccount.map(user => 
  ` 
    <div>
      <h3> name : ${user.name}</h3>
      <p>balance : ${user.balance}</p>
      <p>pin : ${user.pin}</p>
    </div>
  `
  ).join('')


const handleOnSubmit = (e) => {
  e.preventDefault()
  const name = document.querySelector('#userName').value
  const pin = document.querySelector('#pin').value
  const error = document.querySelector('#error')
  const isTrust = userAccount.find(value => value.name === name && Number(pin) === value.pin)
  if (isTrust) {
    const container = document.querySelector('#container')
    container.className = 'blue'
    container.innerHTML = '<h1>Hello ae</h1>'
  } else {
    error.innerHTML = 'Nhập lai đê sai roài'
    setTimeout(() =>{
      error.innerHTML = ''
    }, 1000)
  }
}
const submitbtn = document.querySelector('#submit')
submitbtn.addEventListener('click', handleOnSubmit)


//// bt 2
var selectedUser 

const handleOnSelectUser = (id) => {
  const user = userAccount.find(user => user.id == id)
  selectedUser = user
  searchList.innerHTML = ''
  nameInput.value = user.name
}
const searchResult = (value) => {
  return value ? userAccount.filter(info => info.name.match(value)) : []
}
const handleOnInputSearch = (e) => {
  const result = searchResult(e.target.value)
  const resultHtml =  result.map(value => {
    const { id,name, pin} = value
    return (`
      <div onclick="handleOnSelectUser(${id})" class="btn">${name} - ${pin}</div>
    `)
  }).join('')
  searchList.innerHTML = resultHtml
}

nameInput.addEventListener('input',handleOnInputSearch)
const  handleTransfer = () => {
  const transferAmount = Number(amount.value)
  if ( selectedUser && transferAmount ) {
   userAccount = userAccount.map(user => user.id === selectedUser.id ? { ...user, balance : user.balance+transferAmount} : user)

    const userAccountHTMl = userAccount.map(user => 
      ` 
        <div>
          <h3> name : ${user.name}</h3>
          <p>balance : ${user.balance}</p>
          <p>pin : ${user.pin}</p>
        </div>
      `
      ).join('')
      accountList.innerHTML = userAccountHTMl
  } else {
    accountList.innerHTML = "chưa select user or chưa nhập amount thì chuyển sao đc"
  }

}

const tranferBtn = document.querySelector('#transfer')
tranferBtn.addEventListener('click', handleTransfer)