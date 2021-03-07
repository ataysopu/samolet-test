import {all} from "@redux-saga/core/effects";
import {librariesInRegions} from "../features/libraries/sagas/librariesInRegions";

export default function* rootSaga() {
    yield all([
        librariesInRegions()
    ])
}
