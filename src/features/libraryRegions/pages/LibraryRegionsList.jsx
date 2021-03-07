import React from 'react';
import {LibraryRegionsTable} from "../organisms/LibraryRegionsTable.jsx";
import {LibraryRegionsSortingSearchBar} from "../organisms/LibraryRegionsSortingSearchBar.jsx";
import styled from "styled-components";

export const LibraryRegionsList = () => {
    return (
        <>
            <div>СВОД ГОДОВЫХ СВЕДЕНИЙ  ОБ ОБЩЕДОСТУПНЫХ (ПУБЛИЧНЫХ) БИБЛИОТЕКАХ СИСТЕМЫ МИНКУЛЬТУРЫ РОССИИ</div>
            <LibraryRegionsSortingSearchBar/>

            <LibraryRegionsTable/>
        </>
    )
}