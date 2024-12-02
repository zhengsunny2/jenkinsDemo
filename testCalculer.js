const { Builder, By } = require('selenium-webdriver');

(async function test() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:5500');

    let n1 = await driver.findElement(By.id('number1'));
    let n2 = await driver.findElement(By.id('number2'));
    let op = await driver.findElement(By.id('operation')); 
    let button=await driver.findElement(By.id('calculate'));
    let rs = await driver.findElement(By.css('#result span'));


await n1.sendKeys('10');
await n2.sendKeys('5');
await op.sendKeys('add'); 
await button.click();

let r1 = await rs.getText();

if (r1 === '15') {
  console.log('Test réussi!');
} else {
  console.log('Test échoué');
}

await n1.clear();
await n2.clear();
await n1.sendKeys('10');
await n2.sendKeys('0');
await op.sendKeys('divide'); 
await button.click();


let r2 = await rs.getText();

if (r2 === 'Division par zéro impossible.') {
  console.log('Test réussi!');
} else {
  console.log('Test échoué');
}

await n1.clear();
await n2.clear();
await n1.sendKeys('');
await n2.sendKeys('2');
await op.sendKeys('multiply'); 
await button.click();


let r3 = await rs.getText();

if (r3 === 'Veuillez entrer des nombres valides.') {
  console.log('Test réussi!');
} else {
  console.log('Test échoué');
}

await n1.clear();
await n2.clear();
await n1.sendKeys('50');
await n2.sendKeys('30');
await op.sendKeys('subtract'); 
await button.click();


let r4 = await rs.getText();

if (r4 === '20') {
  console.log('Test réussi!');
} else {
  console.log('Test échoué');
}

await driver.actions().move({ origin: button }).perform();
let bg = await button.getCssValue('background-color');
if (bg === '#0056b3') {
    console.log('Test réussi!');
  } else {
    console.log('Test échoué');
  }

  } finally {
    await driver.quit();
  }
})();



