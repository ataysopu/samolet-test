import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {librariesInRegions} from "../reducer";

export const LibraryPage = () => {
    const dispatch = useDispatch()
    const {regionId} = useParams();

    useEffect(() => {
        dispatch(librariesInRegions.read.request({regionId}))
    }, [regionId])

    const getRegionLibraries = state => state.librariesStore.regionLibraries;

    const regionLibraries = useSelector(getRegionLibraries)

    return (
        <>
            <Link to={'/'}>Вернуться к списку регионов</Link>
            <div>{JSON.stringify(regionLibraries)}</div>
        </>
    )
}
