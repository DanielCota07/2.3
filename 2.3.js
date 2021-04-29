const ProductDAO=require('./DAO.js');

let dao=new ProductDAO('Inventario.json');

console.log("Productos con existencia mayor a 20");
console.log(dao.moreExistence(20));
console.log("Productos con existencia menor a 15");
console.log(dao.lessExistence(15));
console.log("Productos con misma clasificación y precio mayor a 15.5");
console.log(dao.sameClassMorePrice(15.5,'Frituras'));
console.log("Productos con precio entre 20.3 y 45.0");
console.log(dao.priceBetween(20.3,45));
console.log("Cantidad de productos agrupados por clasificación");
console.log(dao.sameClass('Pan'));
