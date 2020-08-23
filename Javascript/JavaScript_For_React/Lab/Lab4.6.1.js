Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
}

function f() {
    alert("Hell");
}
undefined
f.defer(1000);