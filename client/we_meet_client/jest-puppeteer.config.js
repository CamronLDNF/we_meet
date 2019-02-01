module.exports = {
    launch: {
        headless: false,

        devtools: true,
        args: ['--disable-setuid-sandbox',
            '--no-sandbox',
            '--ignore-certificate-errors',
            "--disable-popup-blocking",
            "--disable-infobars"]

    },
    browserContext: 'default',

    server: {
        command: 'PORT=3001 BROWSER=none npm run start',
        port: 3001,
        launchTimeout: 10000,
    }
}