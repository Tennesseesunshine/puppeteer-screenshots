const puppeteer = require('puppeteer')

puppeteer.launch({
  timeout: 15000
}).then(async browser => {
  let page = await browser.newPage();

  const href = ''
  const name = '截图pdf'
  await page.goto(href);

  let aTags = await page.evaluate(() => {
    // 页面中的dom元素
    let as = document.querySelector('.post');
    return as.name = name
  });
  
  await page.pdf({
    path: `./${aTags}.pdf`
  });
  await page.close();

  await browser.close();
});