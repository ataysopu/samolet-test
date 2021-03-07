import React from 'react';
import {LibraryRegionRow} from "../molecules/LibraryRegionRow.jsx";
import {useDispatch, useSelector} from "react-redux";
import {libraryRegionsActions} from "../reducer";
import styled from "styled-components";
import {getFilteredItems} from "../selectors";

export const LibraryRegionsTable = () => {
    const dispatch = useDispatch()

    const libraryRegionsList = useSelector(getFilteredItems)

    React.useEffect(() => {
        dispatch(libraryRegionsActions.getRegionsList.request())
    }, [])

    let rows = libraryRegionsList.map((region, index) => {
        return <LibraryRegionRow
            key={region.order}
            name={region.territory}
            librariesNumber={region.libraries}
            id={region.order}
            listNumber={index + 1}
        />
    })
    return (
        <table>
            <thead>
            <StyledTableRow>
                <th>№</th>

                <th>Регион</th>

                <th>Количество<br/>библиотек</th>
            </StyledTableRow>
            </thead>

            <tbody>
            {rows.length ? rows : <tr>
                <td></td>
                <td>Данных нет</td>
                <td></td>
            </tr>}
            </tbody>
        </table>
    )
}

const StyledTableRow = styled.tr`
    & > th {
        text-align: left;
        &:first-child {
            width: 10%;
        }
    }
`;