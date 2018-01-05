import checkObjectType from './_helpers/checkobjecttype';
import * as functions from './_lib';

// create a prototype of ChainClass
// store target object at "object" property
const prototype = {
    constructor(object) {
        this.object = object;
    }
};

const funcNames = Object.keys(functions);

// iterate over all universal methods
for (let i = 0; i < funcNames.length; i++) {
    const funcName = funcNames[i];
    const method = functions[funcName];

    // create every chained method
    prototype[funcName] = function chainedMethod() {
        const args = [this.object];

        nofn.forEach(arguments, (argument) => {
            args.push(argument);
        });

        method.apply(undefined, args);

        // returning this is important for chained calls
        return this;
    };
}


const ChainClass = function ChainClass(object) {
  this.object = object;
};

ChainClass.prototype = prototype;

// the function allows to chain static function calls on any object
export default function chain(object) {
    // check for type and throw an error if it is not an object and is not a function
    checkObjectType(object, 'chain');

    return new ChainClass(object);
}
