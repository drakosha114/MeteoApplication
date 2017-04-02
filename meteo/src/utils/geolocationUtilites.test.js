import {geolocationErrorCode, isGeolocationSupported, getGeoPosition} from './geolocationUtilites.js';

test('geolocationErrorCode function - input parameters tests', () => {
    expect(geolocationErrorCode).toThrow('parameter is not defined');
    expect(geolocationErrorCode.bind(null,'string')).toThrow('parameter is not defined');
    expect(geolocationErrorCode.bind(null, 1)).toThrow('parameter is not defined');
    expect(geolocationErrorCode.bind(null, true)).toThrow('parameter is not defined');
    expect(geolocationErrorCode.bind(null, [,1,2,3])).toThrow('parameter is not defined');
    expect(geolocationErrorCode.bind(null, ()=>{})).toThrow('parameter is not defined');
});

test('geolocationErrorCode function - work', ()=>{

});

test('geolocation is supported function', () => {
   const geo = isGeolocationSupported();
   expect(geo).toBe(false);
});

test('getGeoPosition - input parameter tests', ()=> {
    it('function works', ()=>{getGeoPosition()});
});

test('getGeoPosition - work', () => {

});