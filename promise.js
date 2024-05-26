async function foo() {
    console.log(1);
    await setTimeout(() => console.log(2), 10);
    console.log(3);
}

function bar() {
    console.log(4);
    setTimeout(() => console.log(5), 100);
    console.log(6);
}

async function main() {
    console.log(7);
    await setTimeout(foo, 0);
    console.log(8);
    await setTimeout(bar, 0);
}

main();
