const themeDark  = document.getElementById('themeDark')
const themeLight = document.getElementById('themeLight')


themeDark.addEventListener('click' , ()=>{
    document.documentElement.setAttribute ('data-bs-theme' , 'dark')
})

themeLight.addEventListener('click' , ()=>{
    document.documentElement.setAttribute ('data-bs-theme' , 'light')
})
