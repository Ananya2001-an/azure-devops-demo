const breakfast_btn = document.getElementById('breakfast_btn')
const lunch_btn = document.getElementById('lunch_btn')
const snacks_btn = document.getElementById('snacks_btn')
const dinner_btn = document.getElementById('dinner_btn')

let breakfast_emoji = document.getElementById('breakfast')
let lunch_emoji = document.getElementById('lunch')
let snacks_emoji = document.getElementById('snacks')
let dinner_emoji = document.getElementById('dinner')

const breakfast_emojis = ['🥐','🥯','🥞','🧇','🥓','🥚','🍳','🥣','🍩']
const lunch_emojis = ['🍖','🍗','🍕','🍚','🍜','🍔','🌭','🥗','🥙','🌯','🥩','🍠','🥡','🍱','🍙','🍤','🦪','🍛','🍥','🥘','🍲','🍝']
const snacks_emojis = ['🍔','🍟','🍿','🍕','🥨','🥯','🥪','🥟','🍢','🧆','🥧','🍦','🍰','🍪','🍩','🍮','🍡','🍭','🍫','🥛','🧃','☕','🍵','🍯','🧋']
const dinner_emojis = lunch_emojis

const get_random_emoji = (emojis) => {
    return Math.floor(Math.random() * emojis.length())
}

breakfast_btn.addEventListener('click', () =>{
    breakfast_emoji.innerHTML = breakfast_emojis[get_random_emoji(breakfast_emojis)]
})

lunch_btn.addEventListener('click', () =>{
    lunch_emoji.innerHTML = lunch_emojis[get_random_emoji(lunch_emojis)]
})

snacks_btn.addEventListener('click', () =>{
    snacks_emoji.innerHTML = snacks_emojis[get_random_emoji(snacks_emojis)]
})

dinner_btn.addEventListener('click', () =>{
    dinner_emoji.innerHTML = dinner_emojis[get_random_emoji(dinner_emojis)]
})