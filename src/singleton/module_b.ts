import { MyDatabaseMetod } from "./db/my-database-metodo"
import { myDatabase, myDatabase as myDatabaseA } from "./module_a"

const MyDatabaseClassic = new MyDatabaseMetod;

MyDatabaseClassic.add({ name: "Luiz", age: 15})
MyDatabaseClassic.add({name: "Maria", age: 18})
MyDatabaseClassic.add({name: "Eduardo", age: 20})
//MyDatabaseClassic.remove(3)
MyDatabaseClassic.show()

console.log(MyDatabaseClassic === myDatabase)