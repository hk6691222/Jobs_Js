document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        // console.log('Clicked')
        btn.nextElementSibling.classList.toggle('change')
    })
})