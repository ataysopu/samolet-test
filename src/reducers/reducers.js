import { combineReducers } from 'redux';

import {librariesStore} from '../features/libraries/reducer';

const reducer = combineReducers({
    librariesStore: librariesStore
});

export default reducer;
