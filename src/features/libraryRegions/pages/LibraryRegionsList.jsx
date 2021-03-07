import React from 'react';
import {LibraryRegionsTable} from "../organisms/LibraryRegionsTable.jsx";
import {LibraryRegionsSortingSearchBar} from "../organisms/LibraryRegionsSortingSearchBar.jsx";

export const LibraryRegionsList = () => {
    return (
        <>
            <div>Свод годовых сведений  об общедоступных (публичных) библиотеках системы Минкультуры России</div>

            <LibraryRegionsSortingSearchBar/>

            <LibraryRegionsTable/>
        </>
    )
}