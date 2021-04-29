let fs = require('fs');
class ProductDAO {
    constructor(fileName) {
        this.fileName=fileName;
        let contents=fs.readFileSync(fileName,'utf8');
        this.productData = JSON.parse(contents);
    }

    moreExistence(n){
        return this.productData.filter(product=>product.Stock>n);
    }
    lessExistence(n){
        return this.productData.filter(product=>product.Stock<n);
    }
    sameClassMorePrice(price, classif){
        return this.productData.filter(product=>product.Stock===classif&&product.Price>price);
    }
    priceBetween(price1,price2){
        return this.productData.filter(product=>product.Price>price1&&product.Price<price2);
    }
    sameClass(classif){
        return this.productData.filter(product=>product.Category===classif);
    }
}
module.exports = ProductDAO;
