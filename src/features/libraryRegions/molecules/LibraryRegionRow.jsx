import React from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";

export const LibraryRegionRow = (props) => {
    let history = useHistory();

    let goToLibraryRegionCard = () => {
        history.push(`/${props.id}`)
    }

    return (
        <StyledTableRow title={`Посмотреть данные региона ${props.name}`}>
            <td>
                {props.listNumber}
            </td>
            <td onClick={goToLibraryRegionCard}>
                {props.name}
            </td>
            <td>
                {`${props.librariesNumber} шт.`}
            </td>
        </StyledTableRow>
    )
}

const StyledTableRow = styled.tr`
    cursor: pointer;
`;