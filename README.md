# Core logic for [Akh Javascript Monad Transformer Library](https://github.com/mattbierner/akh)

Can either be used directly or through `akh` 

```bash
# Direct usage
$ npm install --save akh.core
require('akh.core')

# Through akh
# All functions are top level exports
$ npm install --save akh
require('akh')
```

## Usage

#### `chain(m, f)`
Chain `f` onto monad `m`, getting monad type from `m`.

#### `map(f, m)`
Map `f` over functor `m`, getting functor type from `m`.

#### `ap(f, a)`
Apply applicative `f` over `a`, getting applicative type from `f`.

#### `concat(a, b)`
Concat semigroups `a` and `b`, getting type from `a`.

#### `liftM(f, m)`
Lift unary function `f` to a monad, getting arguments from a monadic value.

#### `liftM2(f, m1, m2)`
Lift binary function `f` to a monad, getting arguments from a monadic values.

#### `liftA(f, a)`
Lift unary function `f` to an applicative, getting argument from applicative value.

#### `liftA2(f, a1, a2)`
Lift binary function `f` to an applicative, getting arguments from applicative values.

#### `compose(f, g)`
Left-to-right Kleisli composition.

#### `composer(f, g)`
Right-to-left Kleisli composition.

#### `next(a, b)`
Perform `p` then `q`. Return result from `q`.

#### `sequence(...)`
Perform a sequence of computations from arguments left to right.


## Contributing
Contributions are welcome.

To get started:

```bash
$ cd akh-core
$ npm install # install dev packages
$ npm test # run tests
```
