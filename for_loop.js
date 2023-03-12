//Basic For loop
for(var i=1;i<=5;i++)
{
	for (var j=1;j<=i;j++)
		console.log(i);
}

//for Each loop - gives the items

let fruits=['apple','peach','banana'];
fruits.forEach(item=>console.log(item));

//for Of loop - gives the items

for(items of fruits)
{
	console.log(items);

}

//for In loop - gives the indes number 

for(item in fruits)
{
	console.log(item);
}