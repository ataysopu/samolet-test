import {createSymbiote} from 'redux-symbiote'
import {sortAsc, sortDesc} from "../../utils";

const namespace = 'libraryRegions'

const initialState = {
    list: [],
    isLoading: false,
    error: '',
    searchText: '',
    libraryRegion: {}
}

const symbiotes = {
    getRegionsList: {
        request: (state, payload) => {
            return {
                ...state,
                payload,
                isLoading: true
            }
        },
        finish: (state, payload) => {
            return {
                ...state,
                list: [...payload.data],
                error: '',
                isLoading: false
            }
        },
        fail: (state, payload) => {
            return {
                ...state,
                error: payload.error,
                isLoading: false
            }
        }
    },
    readRegion: {
        read: (state, payload) => {
            const {regionId} = payload;
            const libraryRegion = state.list.find(region => region.order === Number(regionId));
            return {
                ...state,
                list: [...state.list],
                libraryRegion
            }
        }
    },
    filter: {
        search: (state, payload) => {
            const {searchText} = payload;
            return {
                ...state,
                searchText
            }
        }
    },
    sort: {
        doSort: (state, payload) => {
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
}

export const {actions: libraryRegionsActions, reducer: libraryRegionsStore} = createSymbiote(initialState, symbiotes, namespace)
