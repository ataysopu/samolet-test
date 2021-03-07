import React from 'react';
import {LibraryRow} from "../molecules/LibraryRow.jsx";
import {useDispatch, useSelector} from "react-redux";
import {librariesInRegions} from "../reducer";

export const LibrariesTable = () => {
    const dispatch = useDispatch()
    const getSearchText = state => state.librariesStore.searchText;
    const getItems = state => state.librariesStore.list;

    const getFilteredItems = state => {
        const searchText = getSearchText(state);
        const items = getItems(state);

        return items.filter((library) => {
            return library.fullname.toLowerCase().includes(searchText.toLowerCase())
        })
    }

    const libraries = useSelector(getFilteredItems)

    React.useEffect(() => {
        dispatch(librariesInRegions.getLibrariesList.request())
    }, [])

    let rows = libraries.map((library, index) => {
        return <LibraryRow
            key={library.order}
            name={library.fullname}
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