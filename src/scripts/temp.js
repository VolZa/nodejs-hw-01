function circle() {
    var PI = 3.14;

this.area = function ( r ) {
 return PI * r * r;
};

this.circumference = function ( r ) {
 return 2 * PI * r;
};
}

console.log(circle(2));