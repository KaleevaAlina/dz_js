"use strict"

//1 пункт
  let num=3;
  alert ('Значение переменой: '+ num) ;

//2 пункт 
    const a=10;
    const b=2;
    console.log ('Сумма: ' + (a+b));
    console.log ('Разность: ' + (a-b));
    console.log ('Произведение: ' + (a*b));
    console.log ('Деление: ' + (a/b));  

//3 пункт
    let c=15;
    let d=2; 
    let result = c+d;
    console.log (`Результат сложения переменных: ${result}`);  

//4 пункт 
    const aa=10;
    const bb=2;
    let cc=5;
    console.log ('Сумма трех переменных: ' + (aa+bb+cc)); 

     function sum(aaa,bbb,ccc) {
     return aaa+bbb+ccc;
    }

    console.log('Сумма трех переменных: ' + sum(10,2,5)); 

//5 пункт
    let a1 = 17;
    let b1 = 10;
    let c1 = a1-b1;
    let d1 = 7;
    let result1 = c1+d1;
    console.log ('Результат: '+result1);

//6 пункт
   let str =' Привет, Мир!';
    console.log (`Итог: ${str}`);

   let str1= `fullname: ${str} `;
    console.log (`${str1}`);

//7 пункт
    let str2 ='Привет,'
    let str3 ='Мир!'
    let result3=str2+ ' ' + str3;
    console.log ('Результат: ' + result3); 

// 8 пункт 
    let name = 'Alina';
    let fio =  'Kaleeva';
    console.log(`Привет: ${name} ${fio} ! `);


//9 пункт
    let str4 ='Мне';
    let age ='19 лет';
    let result4=str4+ ' ' + age+'!';
    console.log (result4);  

        function sayYes(age) {
        let me='Мне';
        let str5 = me+ ' '+age+ ' лет!';
        return str5;
        }
        console.log(sayYes(19));