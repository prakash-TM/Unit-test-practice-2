import { initObj, delObj, nameCheck, ageCheck } from "../components/LyfeCycle";

beforeAll(() => {
    initObj();
})
afterAll(() => {
    delObj();
})

describe("name check", () => {
    test("prakash exist or not", () => {
        expect(nameCheck("prakash")).toBeTruthy()
    })
    test("arun exist or not", () => {
        expect(nameCheck("arun")).toBeFalsy()
    })

})

describe("age check", () => {
    test("23 exist or not", () => {
        expect(ageCheck(23)).toBeFalsy()
    })
    test("21 exist or not", () => {
        expect(ageCheck(21)).toBeTruthy()
    })
})