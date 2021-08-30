import data from './data.json' // imports data.json

export default data // export the native JS array

const allCategories = data.map( obj => {
    return obj.category
})

// const uniqueCategories = Array.from( new Set(allCategories) )

const cats = allCategories.reduce( (acc, cat) => {
    acc[cat] = 0
    return acc
}, {})

// this is an array 
const uniqueCategories = Object.keys(cats)

// this is an object
const categoriesAndCounts = allCategories.reduce( (acc, cat) => {
    if(acc[cat] === undefined) {
        acc[cat] = 1
    } else {
        acc[cat] += 1
    }

    return acc
}, {} )

//const catsAndCounts = 


//////////////////////// LAB 01 ////////////////////////


// Part 1:
const namesAndPrices = data.map( obj => {
    return obj.name + ' ' + obj.price
})

//Part 2:
// return true if you want to keep the function and return false if you want to exclude the item
const onlyToys = data.filter( obj => obj.category = 'Toys' )

//Part 3:
// const allRatings = data.map( obj => {
//     return obj.rating
// })

// need to get the ratings from each infividual object and add them onto the total, then return total
// const rates = allRatings.reduce( (obj, total) => {
//     total[rate] += obj.rating
//     return total
// }, {})

// const ratings = Object.keys(rates)
// const ratingAverage = ( total / ratings.length )



export {
    allCategories,
    uniqueCategories,
    categoriesAndCounts,
    namesAndPrices,
    onlyToys
    //ratingAverage
}