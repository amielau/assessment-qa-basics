import { Driver } from "selenium-webdriver/chrome"

//?
const {Builder, Capabilities, By} = require('selenium-webdriver')
//?

const {shuffleArray} = require('./utils')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


// describe('shuffleArray should', () => {
//     test("description", () => {
    // expect

//     })
// })

let dummyArr = [1, 2, 3, 4]

describe('shuffleArray should check if array lengths are the same', () => {
    test("description", () => {
        let returnedArray = shuffleArray(dummyArr)
        expect(returnedArray.length).toBe(dummyArr.length) 

        // await driver.sleep(2000)
        
    }), 

    test("compare array contents", async () => {
        
        
        await driver.sleep(2000)
    })
    
    test("see if contents are randomized", async () => {
        
    
        await driver.sleep(2000)
    })
    

    /*test('description', () => {
        this is an example of a unit test
    }
    */

})