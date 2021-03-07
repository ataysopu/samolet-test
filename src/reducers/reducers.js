import { combineReducers } from 'redux';

import {libraryRegionsStore} from '../features/libraryRegions/reducer';

const reducer = combineReducers({
    libraryRegionsStore
});

export default reducer;
