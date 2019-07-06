import a, {aFn, aFnVar} from './a';

aFn();
try {
    aFnVar();
} catch (e) {
    console.error(e);
}

export default () => {
    console.log('b default')
}
