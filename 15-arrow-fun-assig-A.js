console.log(`=========================== [ 1.a ] =============================`);
const goodMorning = () => {
    console.log("Good Morning! Today is Monday");
};

goodMorning();

console.log(`=========================== [ 2.a ] =============================`);
const multi=(m1,m2,m3=10)=>{
    console.log(`multiplication is ${m1*m2*m3} `);
    
};
multi(5,5,2);

console.log(`=========================== [ 2.b ] =============================`);
multi(10,2);

console.log(`=========================== [ 3.a ] =============================`);
const add=(n1,n2,n3,n4,n5)=>{
    console.log(`The addition is = ${n1+n2+n3+n4+n5}`);
    
};
add(100,100,200,349,756);

console.log(`=========================== [ 3.c ] =============================`);
add("I am"," learning"," ES6"," features"," in depth");