//Unary operator
var a=2;
a++;
console.log(a);
a--;
console.log(a);

//arithmetic operator
var b=3,c=2;
console.log(b+c);
console.log(b-c);
console.log(b*c);
console.log(b/c);
console.log(b%c);
console.log(b**c);

//shift operator
console.log(b<<c);
console.log(b>>c);

//relational operator
 if(b>c)
 	console.log("b is greater than c");
 else
 	console.log("c is greater than b");

 console.log('2=="2":'+(2=="2"));
 console.log('2==="2":'+(2==="2"));

 console.log(Object.is(2,"2"));

 //bitwise operator
 console.log('a&b:'+a&b);
 console.log('a|b:'+a|b);
 console.log('a^b:'+a^b);

 //logical operator
 console.log('a&&b:'+a&&b);
 console.log('a||b:'+a||b);

 //ternary operator
console.log((a==2)?console.log("True"):console.log("False"));
