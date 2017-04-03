import { dispatch } from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
import * as SessionUtilites from '../utils/sessionUtilites.js';
//import * as RepoAPI from '../api/RepoAPI';
//import StarredReposByUserStore from '../stores/StarredReposByUserStore';
//import RepoStore from '../stores/RepoStore';
const isLocalStorageSupported = SessionUtilites.isLocalStorageSupported();

const setDataToLocalStorage = isLocalStorageSupported ? SessionUtilites.localStorageSetItem : SessionUtilites.setCookie;
const getDataFromLocalStorage = isLocalStorageSupported ? SessionUtilites.localStorageGetItem : SessionUtilites.getCookie;


export function changeCurrentCity (cityName) {

}

