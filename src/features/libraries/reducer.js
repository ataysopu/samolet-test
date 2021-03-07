import {createSymbiote} from 'redux-symbiote'

const namespace = 'libraryRegions'

const sortAsc = (arr, field) => {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field]> a[field]) return -1;

        return 0;
    })
}

const sortDesc = (arr, field) => {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field]> a[field]) return 1;

        return 0;
    })
}

const initialState = {
    list: [],
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
    getLibraryRegionsList: {
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
            const libraryRegion = state.list.find(region => region.order === Number(regionId));
            return {
                ...state,
                list: [...state.list],
                libraryRegion
            }
        }
    },
}

export const {actions: libraryRegions, reducer: libraryRegionsStore} = createSymbiote(initialState, symbiotes, namespace)
