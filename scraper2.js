const puppeteer = require("puppeteer");
const Sequence = require("./models/sequences");
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
// https://www.nutcracker123.com/store/
// http://ogsequences.com/sequences/
// https://rgbsequences.net/
// https://sequencesol.com/
// https://showstoppersequences-com.3dcartstores.com/xLights_c_22.html?viewall=1
// https://www.sequencearmory.com/
// https://www.whimsicallightshows.com/store/c5/All_Sequences%21.html#/
// https://visionarylightshows.com/search?q=blue+moon&options%5Bprefix%5D=last
// http://sequences.lightorama.com/
// https://inspirelightshows.com/product-category/xlights/
// https://www.holidaysequences.com/category-s/203.htm
// https://magicallightshows.com/collections/xlights-sequences?page=1&sort_by=created-descending
// https://visionarylightshows.com/collections/all?page=1

function run() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto("https://www.nutcracker123.com/store/");
      await page.type('form[name="quick_find"] > input', "carol of the bells", {
        delay: 35,
      });
      await page.keyboard.press("Enter");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      // page.waitFor(3000);
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll("td > a");
        items.forEach((item) => {
          results.push({
            url: item.getAttribute("href"),
            text: item.innerText,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run2() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto("http://ogsequences.com/sequences/");
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(".elementor-image figcaption");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            text: item.innerText,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run3() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto("https://rgbsequences.net/");
      await page.type(
        "#woocommerce-product-search-field-0",
        "carol of the bells",
        { delay: 35 }
      );
      await page.keyboard.press("Enter");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(
          ".woocommerce-product-details__short-description p:first-child"
        );
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            text: item.innerText,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run4() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto("https://sequencesol.com/");
      await page.type("#big-search", "carol of the bells", { delay: 35 });
      await page.keyboard.press("Enter");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(".text-holder  a:first-child");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            text: item.innerText,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run5() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(
        "https://showstoppersequences-com.3dcartstores.com/xLights_c_22.html?viewall=1"
      );
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(".product-container .name");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            title: item.innerText,
              baseUrl: document.baseURI,
              url: document.URL,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run6() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto("https://www.sequencearmory.com/");
      await page.type("input", "carol of the bells", { delay: 35 });
      await page.keyboard.press("Enter");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll("#sequenceBrowser .card-title");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            text: item.innerText,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run7() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto(
        "https://visionarylightshows.com/search?q=blue+moon&options%5Bprefix%5D=last"
      );
      await page.type(
        "search-form search-page-form search-form__input",
        "carol of the bells",
        { delay: 35 }
      );
      await page.keyboard.press("Enter");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll("#sequenceBrowser .card-title");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            text: item.innerText,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run8() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(
        "https://www.whimsicallightshows.com/store/c5/All_Sequences%21.html#/"
      );
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(
          ".wsite-com-category-product-name"
        );
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            title: item.innerText,
              baseUrl: document.baseURI,
              url: document.URL,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run9() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto("http://sequences.lightorama.com/");
      await page.type("#searchlight", "let it snow", { delay: 35 });
      await page.keyboard.press("Enter");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(".name");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            title: item.innerText,
              baseUrl: document.baseURI,
              url: document.URL,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run10() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(
        "https://inspirelightshows.com/product-category/xlights/"
      );
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(
          ".woocommerce-loop-product__title"
        );
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            title: item.innerText,
              baseUrl: document.baseURI,
              url: document.URL,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}

function run11() {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto("https://www.holidaysequences.com/category-s/203.htm");
      let context = await page.evaluate(() => {
        let results = [];
        let items = document.querySelectorAll(".v-product__title");
        items.forEach((item) => {
          results.push({
            //url: item.getAttribute('href'),
            title: item.innerText,
              baseUrl: document.baseURI,
              url: document.URL,
          });
        });
        return results;
      });
      browser.close();
      return resolve(context);
    } catch (e) {
      return reject(e);
    }
  });
}
// this one a little more instense for pagination
function run12() {
  return new Promise(async (resolve, reject) => {
    pagesToScrape = 0;
    try {
      if (!pagesToScrape) {
        pagesToScrape = 2;
      }
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto(
        "https://magicallightshows.com/collections/xlights-sequences?page=1&sort_by=created-descending"
      );
      let data = [];
      current_page = 0;
      while (current_page < pagesToScrape) {
        let context = await page.evaluate(() => {
          let results = [];
          let items = document.querySelectorAll(".product-card__name");
          items.forEach((item) => {
            results.push({
              //url: item.getAttribute('href'),
              title: item.innerText,
              baseUrl: document.baseURI,
              url: document.URL,
            });
          });
          return results;
        });
        data = data.concat(context);
        current_page++;
        if (current_page < pagesToScrape) {
          await Promise.all([
            await page.click(".next"),
            await page.waitForSelector(".product-card__name"),
          ]);
        }
      }

      browser.close();
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });
}

function run13() {
  return new Promise(async (resolve, reject) => {
    pagesToScrape = 0;
    try {
      if (!pagesToScrape) {
        pagesToScrape = 2;
      }
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto("https://visionarylightshows.com/collections/all?page=1");
      let data = [];
      current_page = 0;
      while (current_page < pagesToScrape) {
        let context = await page.evaluate(() => {
          let results = [];
          let items = document.querySelectorAll(
            ".woocommerce-loop-product__title"
          );
          items.forEach((item) => {
            results.push({
              //url: item.getAttribute('href'),
              title: item.innerText,
              baseUrl: "https://visionarylightshows.com/",
              url: document.URL,
            });
          });
          return results;
        });
        data = data.concat(context);
        current_page++;
        if (current_page < pagesToScrape) {
          await Promise.all([
            await page.click(".pagination li:last-child a"),
            await page.waitForSelector(".woocommerce-loop-product__title"),
          ]);
        }
      }

      browser.close();
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });
}

function run14() {
  return new Promise(async (resolve, reject) => {
    pagesToScrape = 0;
    try {
      if (!pagesToScrape) {
        pagesToScrape = 2;
      }
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto("https://visionarylightshows.com/collections/all?page=1");
      let data = [];
      current_page = 0;
      while (current_page < pagesToScrape) {
        let context = await page.evaluate(() => {
          let results = [];
          let items = document.querySelectorAll(".product-card__title");

          items.forEach((item) => {
            results.push({
              //url: item.getAttribute('href'),
              title: item.innerText,
              baseUrl: "https://visionarylightshows.com/",
              url: document.URL,
            });
          });
          return results;
        });
        data = data.concat(context);
        current_page++;
        if (current_page < pagesToScrape) {
          await Promise.all([
            await page.click(".pagination li:last-child a"),
            await page.waitForSelector(".product-card__title"),
          ]);
        }
      }

      browser.close();
      return resolve(data);
    } catch (e) {
      return reject(e);
    }
  });
}

// run().then(console.log).catch(console.error);
// run2().then(console.log).catch(console.error);
// run3().then(console.log).catch(console.error);
// run4().then(console.log).catch(console.error);
// run5().then(console.log).catch(console.error);
// run6().then(console.log).catch(console.error);
// run8().then(console.log).catch(console.error);
// run9().then(console.log).catch(console.error);
// run10().then(console.log).catch(console.error);
// run11().then(console.log).catch(console.error);
// run12().then(console.log).catch(console.error);
// run13().then(console.log).catch(console.error);

mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true,}).then(console.log("connected"));
  run13().then((res) =>  addNewSequenceSite(res));
  run12().then((res) => addNewSequenceSite(res));
  run11().then((res) => addNewSequenceSite(res));
  run10().then((res) => addNewSequenceSite(res));
  run9().then((res) => addNewSequenceSite(res));
  run8().then((res) => addNewSequenceSite(res));
  run7().then((res) => addNewSequenceSite(res));
  run6().then((res) => addNewSequenceSite(res));
  Sequence.find({}).then(res =>console.log(res));
  
  

  function addNewSequenceSite(res){
      res = res.filter((element) => element.title !== '' );
        for (element of res) {
          console.log(element);
          try{
            const query = {title:element.title,baseUrl:element.baseUrl.slice(0,element.baseUrl.search("com")+3),url:element.url};
            Sequence.findOneAndUpdate(query,new Sequence({title:element.title,baseUrl:element.baseUrl.slice(0,element.baseUrl.search("com")+3),url:element.url}),{upsert:true},(e) => e);
          // new Sequence({
          //   title: element.title,
          //   baseUrl: element.baseUrl.slice(0,element.baseUrl.search("com")+3),
          //   url: element.url,
          // })
        }catch(e){
          console.log(e);
        }
        }
      }