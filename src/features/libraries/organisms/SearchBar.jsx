import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {librariesInRegions} from "../reducer";

export const SearchBar = () => {
    const dispatch = useDispatch()
    const searchText = useSelector(state => state.librariesStore.searchText)

    const filterProducts = (e) => {
        dispatch(librariesInRegions.filter.request({
            searchText: e.target.value
        }))
    }

    const sortByInput = (e) => {
        const value = e.target.value;
        const direction = value.endsWith('asc') ? "asc" : "desc";
        dispatch(librariesInRegions.sort.request({
            direction
        }))
    }

    return (
        <form>
            <input
                style={{marginTop: '10px'}}
                type="text"
                placeholder="Поиск региона"
                onChange={filterProducts}
                value={searchText}
            />
            <select onChange={e => {
                sortByInput(e)
            }}>
                <option value="" disabled selected>Сортировать по</option>
                <option value='libraries_number_asc'>Количеству библиотек - от меньшего к большему</option>
                <option value='libraries_number_desc'>Количеству библиотек - от большего к меньшему</option>
            </select>
            <button onClick={() => dispatch(librariesInRegions.sort.discard())}>
                Сбросить фильтр и сортировку
            </button>
        </form>
    )
}