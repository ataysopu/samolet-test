import {all} from "@redux-saga/core/effects";
import {libraryRegionsSaga} from "../features/libraries/sagas/libraryRegionsSaga";

export default function* rootSaga() {
    yield all([
        libraryRegionsSaga()
    ])
}
