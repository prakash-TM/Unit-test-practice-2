beforeAll(() => {
    console.log('Inside Before All');
});

beforeEach(() => {
    console.log('Inside Before Each');
});

afterAll(() => {
    console.log('Inside After All');
});

afterEach(() => {
    console.log('Inside After Each');
});

test('1+1 = 2', () => {
    console.log('Inside 1+1 test');
    expect(1 + 1).toBe(2);
});

test('18*2 = 36', () => {
    console.log('Inside 18*2 test');
    expect(18 * 2).toBe(36);
});