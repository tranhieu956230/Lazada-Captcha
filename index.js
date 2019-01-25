const puppeteer = require('puppeteer');

const USERNAME = "tienminh.uet@gmail.com";
const PASSWORD = "nguyentienlaM242";


//Selectors
let usernameSelector = "input[name='TPL_username']";
let passwordSelector = "input[name='TPL_password']";
let submitSelector = "button[class='next-btn next-btn-normal next-btn-medium btn']";


async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox'
        ],
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });

    const page = await browser.newPage();

    await page.goto("https://sellercenter.lazada.vn/login", {
        waitUntil: 'networkidle0'
    });


    await page.hover(usernameSelector);
    await page.click(usernameSelector);
    await page.type(usernameSelector, USERNAME, {
        delay: 30
    });


    await page.hover(passwordSelector);
    await page.click(passwordSelector);
    await page.type(passwordSelector, PASSWORD, {
        delay: 30
    })

    await Promise.all([
        page.waitForNavigation({
            waitUntil: 'networkidle0'
        }),
        page.click(submitSelector)
    ])

    //Đợi 30 giây
    //await page.waitFor(30000);
    
}


main();