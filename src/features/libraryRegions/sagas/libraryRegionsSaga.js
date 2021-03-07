import {libraryRegionsActions} from "../reducer";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import axios from "../../../utils/axios-config";

const fetchLibraryRegions = () => axios.get('opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json')

function* libraryRegionsListRequestSaga({payload = {}}) {
    try {
        const res = yield call(fetchLibraryRegions);
        if (res.data.error) {
            yield put(libraryRegionsActions.getRegionsList.fail(res.data.error))
        } else {
            yield put(libraryRegionsActions.getRegionsList.finish({data: res.data}))
        }
    } catch (error) {
        yield put(libraryRegionsActions.getRegionsList.fail(error))
    }
}

export const libraryRegionsSaga = function* () {
    yield takeEvery([libraryRegionsActions.getRegionsList.request().type], libraryRegionsListRequestSaga)
}