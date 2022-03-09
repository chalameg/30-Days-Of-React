//1
const emptyArray = []
//2
const arrayWithElements = [1, 2, 3, 4, 5]
//3
const arrayWithElementsLength = arrayWithElements.length
//4
const firstItem = arrayWithElements[0]
const middleItem =  arrayWithElements[arrayWithElements.Length/2]
const lastItem = arrayWithElements[arrayWithElements.Length-1]
//5
const mixedDataTypes = [2, "big", true, 9 , "good", "always"]
const mixedDataTypesLenght = mixedDataTypes.length
//6
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//7
console.log(companies)
console.log("\n8. ")
//8
const companiesLength = companies.length
console.log(companiesLength)
//9
console.log("\n9. ")
console.log(companies[0])
console.log(companies[companiesLength%2==0 ? companiesLength/2 : Math.floor(companiesLength/2)])
console.log(companies[companiesLength-1])
//10
console.log("\n10. ")
companies.map((c) => console.log(c))
//11
console.log("\n11. ")
companies.map((c) => console.log(c.toUpperCase()))
//12
console.log("\n12. ")
companies.map((c) => companies.indexOf(c) < companiesLength-1 ? console.log(c +", ") : console.log("and "+ c +" are big IT companies.") )

//13
console.log("\n13. ")
if(companies.indexOf("Apple") != -1){
    console.log("Apple")
}else{
    console.log("company is not found")
}
//14
console.log("\n14. ")
companies.forEach(company => {
    var companyAlphs = company.split('')
    console.log(companyAlphs)
});

//15
console.log("\n15. ")
console.log(companies.sort())
//16
console.log("\n16. ")
console.log(companies.reverse())
//17
console.log("\n17. ")
console.log(companies.slice(3))
//18
console.log("\n18. ")
console.log(companies.slice(0,4))
