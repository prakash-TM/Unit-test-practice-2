import { initData, clearData, hasExactName, hasExactCity } from '../utils';

beforeAll(() => {
    initData();
});

afterAll(() => {
    clearData();
});

describe('Name Testing', () => {
    test('Ankit name exists', () => {
        expect(hasExactName('Ankit')).toBeTruthy();
    });

    test('Tarun name does not exists', () => {
        expect(hasExactName('Tarun')).not.toBeTruthy();
    });
});

describe('City testing', () => {
    test('Morena city exists', () => {
        expect(hasExactCity('Morena')).toBeTruthy();
    });

    test('Delhi city does not exists', () => {
        expect(hasExactCity('Delhi')).not.toBeTruthy();
    });
});