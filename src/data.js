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

const catsAndCounts = uniqueCategories.map( name => {
    return { name, count: categoriesAndCounts[name] } // { name: 'toys' }
})

catsAndCounts.push({ name: 'All', count: 100 })

export {
    allCategories,
    uniqueCategories,
    categoriesAndCounts,
    catsAndCounts
}