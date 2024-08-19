let o = {
    m: function () {
        let self = this;
        console.log(self);
        f();

        function f() {
            return console.log(this === o);
        }

        // const라 호이스팅이 안됨
        const g = () => {
            return console.log(this === o);
        };
        g();
    },
};

o.m();
