import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {libraryRegionsActions} from "../reducer";
import styled from "styled-components";
import {getSearchText} from "../selectors";

export const LibraryRegionsSortingSearchBar = () => {
    const dispatch = useDispatch()
    const searchText = useSelector(getSearchText)

    const filterProducts = (e) => {
        dispatch(libraryRegionsActions.filter.search({
            searchText: e.target.value
        }))
    }

    const discardSortingAndFilter = () => {
        dispatch(libraryRegionsActions.sort.discard())
    }

    const sortByInput = (e) => {
        const value = e.target.value;
        const direction = value.endsWith('asc') ? "asc" : "desc";
        dispatch(libraryRegionsActions.sort.doSort({
            direction
        }))
    }

    return (
        <StyledForm>
            <input
                type="text"
                placeholder="Поиск по региону"
                onChange={filterProducts}
                value={searchText}
            />

            <select onChange={sortByInput}>
                <option value="" disabled selected>Сортировать по</option>

                <option value='libraries_number_asc'>Количеству библиотек - от меньшего к большему</option>

                <option value='libraries_number_desc'>Количеству библиотек - от большего к меньшему</option>
            </select>

            <button onClick={discardSortingAndFilter}>
                Сбросить фильтр и сортировку
            </button>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    margin-bottom: 10px;
    & > input {
        margin-top: 10px;
        margin-right: 10px;
    }
    & > select {
        margin-right: 10px;
    }
`;