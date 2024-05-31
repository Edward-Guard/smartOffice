const { Stock } = require('./models');

(async () => {
    const stock = await Stock.findAll();
    console.log(stock);
})();