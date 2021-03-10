const puppeteer = require('puppeteer');

exports.getScape = async (title) => {

  const browser = await puppeteer.launch({
    headless: true,

  }
    );
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://customlightcreations.com');
  await page.click('svg[data-aid="SEARCH_ICON_RENDERED"]');
  await page.type('input[role="searchbox"]', title,{delay:35});
  await page.keyboard.press('Enter');
  //await page.$eval('form', form => form.submit());
  await page.waitForNavigation({waitUntil: 'domcontentloaded'});
  //console.log('new page url:', page.url());
  await page.goto(page.url());
  const d=  await page.waitForSelector('h4');
  const body = await page.$$eval('h4',el => el[2].textContent);
  //console.log(body);
  await browser.close();
//await page.goto(page.url + "&sortOption=descend_by_m");
  //await page.click('svg[data-aid="SEARCH_ICON_RENDERED_OPEN"]');
  // await  page.$$('div[data-aid="PRODUCT_LIST_RENDERED"]')
  //  .then(div => console.log(div) )
  //  .catch(err => console.log(err));

  return body;
};