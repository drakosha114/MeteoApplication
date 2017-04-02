import {pick, extend} from 'underscore';

export const geolocationErrorCode = (error) => {
    if(!error || Array.isArray(error) || typeof error !== 'object') {
        throw new Error('parameter is not defined or is not a object');
    }

    switch(error.code) {
        case error.PERMISSION_DENIED:
            return "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            return "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            return "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred.";
            break;
        default:
            return "An unknown error occurred.";
    }
};

export const isGeolocationSupported = () => {

    let resp = false;

    if(navigator.geolocation) {
        resp = true;
    }

    return resp;
};

export const getGeoPosition = (optionsObject) => {

    const defaultPositionParametersObject = {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0
    };

    let options = pick(extend(defaultPositionParametersObject, typeof optionsObject === 'object' ? optionsObject : {}), 'enableHighAccuracy', 'timeout', 'maximumAg');

    return new Promise((resolve, reject)=> {

        if (!navigator.geolocation) {
            reject('Geolocation is not supported');
        }

        navigator.geolocation.getCurrentPosition((position)=>{
            resolve(position);
        }, (error) => {
            reject(geolocationErrorCode(error));
        }, options)
    });

};