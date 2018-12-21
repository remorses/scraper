// scripts can be chained, every data scraped from one file
// go to the variables of the next one
// variables that are given to the first are also given to the others, 
// for example credentials to login


cont options = require('./launch-option.json')

const browser = await puppeteer.launch(...options)
const page = await browser.pages[0]

const scraped = await execute({ 
    chain: ['./rpc1.yml', './rpc2.yml'], 
    data: { credentials: {} },
    page: page 
})

console.log(scraped.data)

