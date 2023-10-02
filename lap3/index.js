console.log("Code made by Minh Đẹp zai")

// 1. function make list names (string) and convert to camelCase
const list = ['fist_name','last_name','Some_Variable','calculate_AGE','delayed_departure']
console.log('list', list)
 list.forEach((value, index)=>{
  const [first, second] = value.trim().split('_')
  const [upper, ...other] = second.split('')
  const handler = [upper.toUpperCase(),...other].join('')
  console.log(`${[first,handler].join('')} ${' *'.repeat(index)}`)
})


// change to red

// change color 
const h2 = document.querySelector('.to-red')
const changeColor = (e) => {
  const value = e.target.innerText
  const color = `#${Math.round(Math.random() * 1000).toString(16)}`
  h2.style.cursor = 'pointer'
  h2.style.color = '#fff'
  h2.style.backgroundColor = color
  h2.innerHTML = value

}
h2.addEventListener('click',changeColor)