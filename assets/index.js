var name_field = document.querySelector('.name-field')
var num_field = document.querySelector('.num-field')
var month_field = document.querySelector('.month-field')
var year_field = document.querySelector('.year-field')
var cvc_field = document.querySelector('.cvc-field')

function confirmBtnClick(ev){
    if(name_field.value===''){
        document.querySelector('.name-warn').style.display = 'initial'
        name_field.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if(num_field.value==='' || num_field.value.length<16){
        document.querySelector('.number-warn').style.display = 'initial'
        num_field.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if(month_field.value===''){
        document.querySelector('.expire-month-year-warn').style.display = 'initial'
        month_field.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if(year_field.value===''){
        document.querySelector('.expire-month-year-warn').style.display = 'initial'
        year_field.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    if(cvc_field.value==='' || cvc_field.value.length<3){
        document.querySelector('.cvc-warn').style.display = 'initial'
        cvc_field.style.borderColor = 'hsl(0, 100%, 66%)'
    }
}
function inputClick(ev){
    name_field.style.borderColor = 'hsl(279, 6%, 55%)'
    num_field.style.borderColor = 'hsl(279, 6%, 55%)'
    month_field.style.borderColor = 'hsl(279, 6%, 55%)'
    year_field.style.borderColor = 'hsl(279, 6%, 55%)'
    cvc_field.style.borderColor = 'hsl(279, 6%, 55%)'

    document.querySelector('.name-warn').style.display = 'none'
    document.querySelector('.number-warn').style.display = 'none'
    document.querySelector('.expire-month-year-warn').style.display = 'none'
    document.querySelector('.cvc-warn').style.display = 'none'
}

