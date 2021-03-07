import {librariesInRegions} from "../reducer";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import axios from "../../../utils/axios-config";

const fetchLibrariesInRegions = () => axios.get('opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json')

function* librariesInRegionsListRequestSaga({payload = {}}) {
    try {
        const res = yield call(fetchLibrariesInRegions);
        if (res.data.error) {
            yield put(librariesInRegions.getLibrariesList.fail(res.data.error))
        } else {
            yield put(librariesInRegions.getLibrariesList.finish({data: res.data}))
        }
    } catch (error) {
        yield put(librariesInRegions.getLibrariesList.fail(error))
    }
}

export const librariesInRegions = function* () {
    yield takeEvery([librariesInRegions.getLibrariesList.request().type], librariesInRegionsListRequestSaga)
}