let objMap = {};

export const initData = () => {
    //console.log('@Inside Init Data: ', objMap);
    objMap['name'] = 'Ankit';
    objMap['city'] = 'Morena';
    objMap['state'] = 'Madhya Pradesh';
    objMap['country'] = 'India';

    //console.log('@Inside After Init Data: ', objMap);
};

export const clearData = () => {
    //console.log('@Inside clearData: ', objMap);
    objMap = {};
    //console.log('@Inside after clearData: ', objMap);
};

export const hasExactName = (uName) => {
    if (!uName || !objMap.hasOwnProperty('name') || objMap['name'] !== uName) {
        //console.log('Returning False');
        return false;
    }
    //console.log('Returning True');
    return true;
};

export const hasExactCity = (city) => {
    if (!city || !objMap.hasOwnProperty('city') || objMap['city'] !== city)
        return false;
    return true;
};

export const hasExactCountry = (country) => {
    if (!country ||
        !objMap.hasOwnProperty('country') ||
        !(objMap['country'] !== country)
    )
        return false;
    return true;
};