import React from 'react';
import {LibrariesTable} from "../organisms/LibrariesTable.jsx";
import {SearchBar} from "../organisms/SearchBar.jsx";
import styled from "styled-components";
import {ThemeContext} from "../../../index";

export const FilterableLibrariesPage = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <>
            <SearchBar/>

            <LibrariesTable/>
        </>
    )
}

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.foreground};
`