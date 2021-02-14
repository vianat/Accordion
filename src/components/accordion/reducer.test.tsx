import {reducer, stateType, TOGGLE_COLLAPSE} from "./reducer";

test("Collapsed should be true", () => {
    // data
    const state: stateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSE})
    // expected
    expect(newState.collapsed).toBe(true)
})

test("Collapsed should be false", () => {
    // data
    const state: stateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSE})
    // expected
    expect(newState.collapsed).toBe(false)
})

test("Reducers should throw error because action type is incorrect", () => {
    // data
    const state: stateType = {
        collapsed: true
    }
    //action
    expect( () => {
        reducer(state, {type: FAKE_TYPE})

    }).toThrowError();
})