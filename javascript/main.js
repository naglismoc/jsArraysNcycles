let num = 22;
let cars = ["Saab", "Volvo", "BMW"];
console.log(num);
console.log(cars);
console.log( cars[0] );
console.log( cars[2] );
console.log( cars[3] );

cars[30] = "bugatti";

console.log(cars);

cars[15] = "maybach";
console.log(cars);

cars[15] = "tesla";
console.log(cars);
cars.push("car");
console.log(cars);
cars[ cars.length ] = "uber";
console.log(cars);


let fruits = ["Banana", "Orange", "Apple",['pear','grape']];
console.log(fruits);
fruits.push("Lemon");
console.log(fruits);
console.log(fruits.length);
console.log(fruits.toString().length);

let edibles = [ fruits , ['pork','beef','lamb']  ];
console.log(edibles);


let i = 0;
for ( ; true ; ) {
    i+=10;
    console.log("labas. i reiksme yra " + i);
    if( i > 100){
        break;
    }
}

console.log("cia po ciklo");


i = 0;
while (true) {
    i+=10;
    console.log("labas while. i reiksme yra " + i);
    if( i > 100){
        break;
    }  
}




let shouldContinue = true;
i = 0;
while (shouldContinue) {
    i+=10;
    console.log("labas while su kintamuoju. i reiksme yra " + i);
    if( i > 100){
        shouldContinue = false;
    }  
}

do {
    console.log("o as vis tiek pabandysiu");
} while (false);



//atbulinis ciklas
for (let i = 10; i > 0; i--) {
    console.log(i);
}
//              0       1       2       3       4           5       6           7
let names = ['Jonas',"Arnas",'Tadas','Tomas','Naglis','Laurynas','Danielius','Kajus'];
names[4]
for (let i = 0; i < names.length; i++) {
   // names[i] // tas pats kas names[0]   names[1]   names[2]
    console.log("i reiksme yra " + i);
    console.log("paimsim is names masyvo elementa. names["+i+"]");
    console.log(names[i]); 
}

for (let i = 0; i < names.length; i++) {
    names[i] = names[i].toUpperCase(); 
}
console.log("=================");
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + " names["+i+"]"); 
}

for (let counter = 0; counter < names.length; counter++) {
   console.log(names[counter]);
}


/*
Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės. Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
*/

let arr = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood".split(" ");
console.log(arr);
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i].length <= 5){
        count++;
    }
}

console.log(count);