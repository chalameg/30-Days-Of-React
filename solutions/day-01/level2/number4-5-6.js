const countries = require('./countries')
const webTechs = require('./web_techs')

//4
const cntries = countries.countries

if(cntries.includes('Ethiopia')){

    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
}

//5
const webtcs = webTechs.webTechs

if(webtcs.includes('Sass')){

    console.log('Sass is a CSS preprocess')
}else{
    webtcs.push('Sass')
    console.log(webtcs)
}

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)