const transform = (number) => {
    var romanize = require('romanize')
    return romanize(number);
}

export {
    transform
};