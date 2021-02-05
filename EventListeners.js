// const btn = document.querySelector('[data-button]');


// function printClick()
// {
//     console.log('clicked')
// }

// btn.removeEventListener('click', printClick)


// btn.addEventListener('click', e =>
// {
//     console.log(e.target)
// })

// const input = document.querySelector('[data-input-text]')
// input.addEventListener('input', e =>
// {
//     console.log(e.target.value === '')
// })

// const form = document.querySelector('[data-form]')
// form.addEventListener('submit', e =>
// {
//     e.preventDefault()
//     console.log('submitted form')
// })

const link = document.querySelector('a')
link.addEventListener('mouseleave', e =>
{
    e.preventDefault()
    console.log('preventDefault')
})

const button = document.querySelector('button')
button.addEventListener('click', e =>
{
    e.preventDefault()
    console.log('Arrow this' + this)
})

button.addEventListener('click', function (e)
{
    e.preventDefault()
    console.log(this)
})
