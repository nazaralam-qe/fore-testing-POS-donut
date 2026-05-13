import {fail} from "assert";

class Expect {
    async selectorElement(id) {
        return await $(id);
    }

    async elementExisting(id, message = `Element is existing`) {
        const element = await this.selectorElement(id);
            await expect(element).toBeExisting({
                message: `Expect: element ${id} is Existing \n Receive: element ${id} is not Existing`,
            });
        return element;
    }

    async elementNotExisting(id, message = `Element is not existing`) {
        const element = await this.selectorElement(id);
            await expect(element).not.toBeExisting({
                message: `Expect: element ${id} is not Existing \n Receive: element ${id} is Existing`,
            });
        return element;
    }

    async clickElement(id, message = `Element is clicked`) {
        const element = await this.elementExisting(id);
            if (element) {
                await element.click();
            } else {
                console.warn(`Elemen dengan selector "${id}" tidak ditemukan, tidak dapat melakukan klik.`);
            }
    }

    async elementDisplayed(id, message = `Element is displayed`) {
        const element = await this.selectorElement(id);
            await expect(element).toBeDisplayed({
                message: `Expect: element ${id} is Displayed \n Receive: element ${id} not Displayed`,
            });
        return element;
    }

    async elementNotDisplayed(id, message = `Element is not displayed`) {
        const element = await this.selectorElement(id);         await expect(element).not.toBeDisplayed({
                message: `Expect: element ${id} is not Displayed \n Receive: element ${id} is Displayed`,
            });
        return element;
    }

    async isChecked(message = `Element is checked`) {
        const element = await this.selectorElement(id);
        await expect(element).toBeChecked({
            message: `Expect: element ${id} is Checked \nReceive: element ${id} is NOT Checked`,
        });
        console.log(`✅ ${message}`);
        return element;
    }


    async doubleClickElement(id, message = 'Element is double-clicked') {
        const element = await this.elementExisting(id);
            await element.click();
            await driver.pause();
            await element.click();
    }

    async elementIsVisible(id, message = 'Element is visible') {
        const element = await this.elementExisting(id);
            await expect(element).not.toBeFocused();
    }

    async elementToHaveText(id, text, message = "Element to have text") {
        const element = await this.elementExisting(id);
            await expect(element).toHaveText(text, {
                message: `Expect: element ${id} should have text "${text}" \n Receive: element ${id} have text "${await element.getText()}"`,
                ignoreCase: true,
        });
    }

    async elementEnable(id, message = "Element is enabled") {
        const element = await this.elementExisting(id);
            await expect(element).toBeEnabled({
                message: `Expect: element ${id} should be enabled \n receive: element ${id} is disabled`,
            });
    }

    async elementDisabled(id, message = "Element is disabled") {
        const element = await this.elementExisting(id);
            await expect(element).toBeDisabled({
                message: `Expect: element ${id} should be disabled \n receive: element ${id} is enabled`,
            });
    }

    async elementHaveValue(id, value, message = "Element to have value") {
        const element = await this.elementExisting(id);
            await expect(element).toHaveValue(value);
    }

    async elementHaveAttr(id, attr, value, message = "Element have attribute") {
        const element = await this.elementExisting(id);
            await expect(element).toHaveAttr(attr, value);
    }

    async verifyPageTextContain(locator, expectedTitle) {
        const element = await this.elementExisting(locator);
        const title = await element.getText();
        console.log(title);
        await expect(title).toContain(expectedTitle);
    }

    async verifyPageTextNotContain(locator, expectedTitle) {
        const element = await this.elementExisting(locator);
        const title = await element.getText();
        console.log(title);
        await expect(title).not.toContain(expectedTitle);
    }

    async elementIsFilled(id) {
        const element = await $(id);
        const textValue = await element.getText();
        if (textValue !== null && textValue !== "") {
            console.log("ISI CONTENT IF: " + textValue);
            await expect(textValue).not.toBe("");
        } else {
            console.log("ELEMENT TIDAK ADA");
            await expect(textValue).not.toBe("");
        }
    }

    async elementNotToHaveText(
        id,
        text,
        message = "Element shpuld not have text"
    ) {
        const element = await this.elementExisting(id);
            console.log("validation not have text => ", await element.getText());
            await expect(element).not.toHaveText(text, {
                message: `Expect: element ${id} should not have text "${text}" \n Receive: element ${id} have text "${await element.getText}"`,
            });
    }

    async waitForDisplayed(locator) {
        const element = await $(locator);
        await element.waitForDisplayed({timeout: 20000});
    }

    async clickByCoordinate(locator, x, y) {
        const element = await $(locator);
        let location = await element.getLocation();
        const xCoordinate = location.x + x;
        const yCoordinate = location.y + y;
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    {type: 'pointerMove', duration: 0, x: xCoordinate, y: yCoordinate},
                    {type: 'pointerDown', button: 0, duration: 0},
                    {type: 'pointerMove', duration: 500, x: xCoordinate, y: yCoordinate},
                    {"type": "pointerUp", "button": 0},
                ]
            }
        ])
    }

    async elementContainsComma(id) {
        const element = await this.elementExisting(id);
        const text = await element.getText();
        await expect(text).toEqual(expect.stringContaining(","));
    }

    async elementMasking(id) {
        const element = await this.elementExisting(id);
        const textMasking = await element.getText();
        textMasking.includes("*");
    }

    async elementUnMasking(id) {
        const element = await this.elementExisting(id);
        const textMasking = await element.getText();
        if (textMasking.includes("*")) {
            fail("Element Masking");
        }
        return true
    }

}

export default new Expect();