//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const sortedAges = ages.sort()
const minAge = ages[0]
const maxAge = ages[ages.length-1]
const agesLength = ages.length
console.log(sortedAges)

if(agesLength % 2==0){
    const medianIndex = agesLength/2
    const median = (sortedAges[medianIndex-1] + sortedAges[medianIndex])/2
    console.log(median)
}else{
    const median = sortedAges[Math.floor(agesLength/2)]
    console(median)
}

var total = 0;
for(var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avg = total / ages.length;

console.log(avg)

console.log(maxAge-minAge)

