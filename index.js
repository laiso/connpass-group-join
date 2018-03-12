const puppeteer = require('puppeteer');
const argv = require('yargs').argv

const isDebug = !!(process.env.DEBUG)

function run(username, password, eventUrl) {
    return puppeteer.launch({headless: !isDebug})
        .then(async browser => {
            const page = await browser.newPage();

            if (isDebug) await page.setViewport({width: 1980, height: 800});

            const n = await page.goto('https://connpass.com/login/');
            await page.type('input[name=username]', username);
            await page.type('input[name=password]', password);
            await page.click('#login_form button[type=submit]')
            
            await page.waitForSelector('#personalMenu')

            await page.goto(eventUrl);
            await page.click('.GroupMembershipButton');

            if (isDebug) await page.waitFor(3000)
            browser.close();
        })
}

(async () => {
        await run(argv.username, argv.password, argv.eventUrl)
        process.exit(0)
    }
)();