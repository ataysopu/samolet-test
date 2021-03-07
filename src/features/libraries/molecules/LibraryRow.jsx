import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {librariesInRegions} from "../reducer";

export const LibraryRow = (props) => {
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