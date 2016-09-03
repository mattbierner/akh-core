"use strict";
const assert = require('chai').assert
const State = require('akh.state').State
const base = require('../index')

describe("next", () => {
    it("should return result of second", () => {
        const c = base.next(State.of(1), State.of(2))
        
        assert.strictEqual(2, State.eval(c, null))
    })

    it("should run first computation then second", () => {
        const c = base.next(State.put("state"), State.modify(x => x + x))
        
        assert.deepEqual("statestate", State.eval(c, null))
    })
})
