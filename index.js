"use strict"
const constant = x => () => x

const flip = f => (x, y) => f(y, x)

/* Generic versions of ops
 ******************************************************************************/
/**
 * Chain `f` onto monad `c`, getting monad type from `m`.
 */
const chain = module.exports.chain = (m, f) => m.chain(f)

/**
 * Map `f` over functor `m`, getting functor type from `m`.
 */
const map = module.exports.map = (f, m) => m.map(f)

/**
 * Apply applicative `f` over `a`, getting applicative type from `f`.
 */
const ap = module.exports.ap = (f, a) => f.ap(a)

/**
 * Concat Semigroups `a` and `b`, getting type from `a`.
 */
const concat = module.exports.concat = (a, b) => a.concat(b)

/* Monad Lifting
 ******************************************************************************/
/**
 * Lift unary function `f` to a monad, getting arguments from a monadic value.
 */
const liftM = module.exports.liftM = map

/**
 * Lift binary function `f` to a monad, getting arguments from monadic values.
 */
const liftM2 = module.exports.liftM2 = (f, m1, m2) =>
    m1.chain(x =>
    m2.map(y =>
        f(x, y)))

/* Applicative Lifting
 ******************************************************************************/
/**
 * Lift unary function `f` to an applicative, getting argument from applicative value.
 */
const liftA = module.exports.liftA = (f, a) => a.of(f).ap(a)

/**
 * Lift binary function `f` to an applicative, getting arguments from applicative values.
 */
const liftA2 = module.exports.liftA2 = (f, a1, a2) =>
    a1.of(x => y => f(x, y))
        .ap(a1)
        .ap(a2)

/* Composition
 ******************************************************************************/
/**
 * Left-to-right Kleisli composition.
 */
const compose = module.exports.compose = (f, g) =>
    x =>
        f(x).chain(g)

/**
 * right-to-right Kleisli composition.
 */
const composer = module.exports.composer = flip(compose)

/* Monad Sequencing
 ******************************************************************************/
/**
 * Perform `p` then `q`. Return result from `q`.
 */
const next = module.exports.next = (p, q) => p.chain(constant(q))

/**
 * Perform a sequence of computations left to right.
 * 
 * @param arr Array-like of computations.
 */
const sequencea = module.exports.sequencea = (arr) => Array.prototype.reduce.call(arr, next)

/**
 * Perform a sequence of computations from arguments left to right.
 */
const sequence = module.exports.sequence = function() { return sequencea(arguments) }
