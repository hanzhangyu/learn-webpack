import b from './b';

b();

export let aVal = 1;

Promise.resolve().then(() => {
  aVal = 2;
});

export default 2;

export function aFn() {
    console.log('afn');
}

export var aFnVar = () => {
    console.log('aFnVar');
};
