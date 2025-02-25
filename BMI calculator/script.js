const form = document.querySelector('form');
// const w=parseInt(document.querySelector('#weight').value);//wrong.

form.addEventListener('submit', function(e){
    e.preventDefault()

    const h=parseInt(document.querySelector('#height').value);
    const w=parseInt(document.querySelector('#weight').value);
    let res= document.querySelector('.result');
    //height and weight are taken inside a form as you want to take the value as soon as you enter the value, not the previous value.
    if(isNaN(h) || h=='' || h<=0){//this isNaN is new technique.
        res.innerHTML=`please give a valid height ${h}`
    }
    else if(isNaN(w) || w=='' || w<=0){//this isNaN is new technique.
        res.innerHTML=`please give a valid weight ${w}`
    }
    else{
        const bmi= (w/((h*h)/10000)).toFixed(2);
        let type=''
        if(bmi<18.5)type='underweight'
        else if(bmi>=18.5 && bmi<25) type='Normal'
        else type='overweight'
        res.innerHTML=`Your BMI is ${bmi} and you are ${type}`
    }
});