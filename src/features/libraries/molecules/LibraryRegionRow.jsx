import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {libraryRegions} from "../reducer";

export const LibraryRegionRow = (props) => {
    const dispatch = useDispatch()
    let history = useHistory();

    let goToLibraryPage = () => {
        history.push(`/${props.id}`)
    }

    return (
        <tr style={{cursor: 'pointer'}}>
            <td>
                {props.listNumber}
            </td>
            <td onClick={goToLibraryPage}>
                {props.name}
            </td>
            <td>
                {`${props.librariesNumber} шт.`}
            </td>
        </tr>
    )
}