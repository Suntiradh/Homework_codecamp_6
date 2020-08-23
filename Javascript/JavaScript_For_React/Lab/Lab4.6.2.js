Function.prototype.defer = defer;
function f(a, b) {
    alert(a + b);
}
function defer(ms) {
    return (function (a, b) {
        let f = this;

        setTimeout(() => f(a, b), ms);
    }).bind(this);
}

f.defer(3000)(1, 2)