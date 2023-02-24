import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

import { employeeManagerPO } from './employeeManagerPO';

const employeePO = new employeeManagerPO(driver)

describe('Adding a new employee and editing a new employee', () => {
    beforeEach(async () => {
        await employeePO.navigate()
    })
    afterAll(async () => {
        await employeePO.driver.quit()
    })

    test('Adding an employee and editing an existing employee', async () => {
        await employeePO.click(employeePO.addEmployee)
        await employeePO.click(employeePO.newEmployee)
        await employeePO.setInput(employeePO.nameEntry, "Hayao Miyazaki")
        await employeePO.setInput(employeePO.phoneEntry, "8885559999")
        await employeePO.setInput(employeePO.titleEntry, "Legendary Director")
        await employeePO.click(employeePO.saveBtn)
    
        await employeePO.click(employeePO.editEmployee)
        await employeePO.setInput(employeePO.nameEntry, 'Georgie Constanza')
        await employeePO.setInput(employeePO.phoneEntry, '1231231234')
        await employeePO.setInput(employeePO.titleEntry, 'CFO')
        await employeePO.click(employeePO.saveBtn)
    })
})
