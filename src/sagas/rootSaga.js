import {all} from "@redux-saga/core/effects";
import {libraryRegionsSaga} from "../features/libraryRegions/sagas/libraryRegionsSaga";

export default function* rootSaga() {
    yield all([
        libraryRegionsSaga()
    ])
}
