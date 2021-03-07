import React from 'react';
import {LibraryRegionRow} from "../molecules/LibraryRegionRow.jsx";
import {useDispatch, useSelector} from "react-redux";
import {libraryRegions} from "../reducer";

export const LibraryRegionsTable = () => {
    const dispatch = useDispatch()
    const getSearchText = state => state.libraryRegionsStore.searchText;
    const getItems = state => state.libraryRegionsStore.list;

    const getFilteredItems = state => {
        const searchText = getSearchText(state);
        const items = getItems(state);

        return items.filter((library) => {
            return library.territory.toLowerCase().includes(searchText.toLowerCase())
        })
    }

    const libraries = useSelector(getFilteredItems)

    React.useEffect(() => {
        dispatch(libraryRegions.getLibraryRegionsList.request())
    }, [])

    let rows = libraries.map((library, index) => {
        return <LibraryRegionRow
            key={library.order}
            name={library.territory}
            librariesNumber={library.libraries}
            id={library.order}
            listNumber={index + 1}
        />
    })
    return (
        <table>
            <thead>
                <tr>
                    <th style={{textAlign: 'left', width: '10%'}}>№</th>

                    <th style={{textAlign: 'left'}}>Регион</th>

                    <th style={{textAlign: 'left'}}>Количество<br/>библиотек</th>
                </tr>
            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )
}