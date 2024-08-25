function add(n1,n2,...n) {
    console.log(n1,n2,n);
}
add(10,20,30,40,50,60,1000);
//IMP  :: Q.1) do you know how to collect all different value in one parameter : -  use the rest parameter
function show(...n) {
    console.log(n);
}
show(10,20,30,40,50,60,1000);