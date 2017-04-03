import {register} from '../dispatcher/AppDispatcher.js';
import {AppConstants} from '../constants/AppConstants.js';
import {createStore, mergeIntoBag, isInBag} from '../utils/storeUtilites.js';
import {selectn} from 'selectn';

let _isAuthorized = false;

let _data = {
    mode: false, // использовать геолокацию или выбирать город из списка
    currentCity: null, // текущий город - объект, название и объект с координатами
    cities: [], // массив объектов с городами пользователя
    defaultCity: null // дефолтный город
};

const SessionStore = createStore({

    isAuthorized () {
       return _isAuthorized;
    },

    getData () {
        return _data;
    },

    getField(fieldName) {

        if (!fieldName || typeof fieldName !== 'string') {
            throw new Error('field name is absent');
        }

        if (!_data[fieldName]) {
            throw new Error('incorrect fieldName')
        }

        return _data[fieldName];
    }

});

SessionStore.dispatchToken = register(action => {


    if (process.env.NODE_ENV !== 'production') {
        console.info(action.type, action.data)
    }

    switch (action.type) {
        case AppConstants.USER_AUTHORIZE: {

            _isAuthorized = true;
            mergeIntoBag(_data, action.data);
            SessionStore.emitChange();

        }
    }

});

export default SessionStore;


