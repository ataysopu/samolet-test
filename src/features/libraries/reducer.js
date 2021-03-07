import {createSymbiote} from 'redux-symbiote'

const namespace = 'libraries'

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field]> a[field]) return -1;

        return 0;
    })
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field]> a[field]) return 1;

        return 0;
    })
}

const initialState = {
    list: [],
    readLibrary: {},
    isLoading: false,
    error: '',
    searchText: ''
}

const commonRequest = (state, payload) => {
    return {
        ...state,
        payload,
        isLoading: true
    }
}

const commonFail = (state, payload) => {
    return {
        ...state,
        error: payload.error,
        isLoading: false
    }
}

const symbiotes = {
    getLibrariesList: {
        request: commonRequest,
        finish: (state, payload) => {
            return {
                ...state,
                list: [...payload.data],
                error: '',
                isLoading: false
            }
        },
        fail: commonFail
    },
    filter: {
        request: (state, payload) => {
            const {searchText} = payload;
            return {
                ...state,
                searchText
            }
        }
    },
    sort: {
        request: (state, payload) => {
            const {direction} = payload;
            const sortedRegions = direction === "asc" ?
                sortAsc(state.list, 'libraries') :
                sortDesc(state.list, 'libraries');
            return {
                ...state,
                list: sortedRegions
            }
        },
        discard: (state) => {
            return {
                ...state
            }
        }
    },
    read: {
        request: (state, payload) => {
            const {regionId} = payload;
            const regionLibraries = state.list.find(region => region.order === Number(regionId));
            return {
                ...state,
                regionLibraries
            }
        }
    },
}

export const {actions: librariesInRegions, reducer: librariesStore} = createSymbiote(initialState, symbiotes, namespace)
