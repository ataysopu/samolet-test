import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {libraryRegions} from "../reducer";

export const LibraryRegionCard = () => {
    const dispatch = useDispatch()
    const {regionId} = useParams();

    const libraryRegion = useSelector(state => state.libraryRegionsStore.libraryRegion)

    useEffect(() => {
        dispatch(libraryRegions.read.request({regionId}))
    }, [])

    return (
        <>
            <Link to={'/'}>Вернуться к списку регионов</Link>
            <div><span>Регион:</span>{' '}<span>{libraryRegion?.territory}</span></div>
            <div><span>Количество библиотек:</span>{' '}<span>{libraryRegion?.libraries}</span></div>
            <div><span>Региональное ведомство:</span>{' '}<span>{libraryRegion?.fullname}</span></div>
            <div><span>Адрес ведомства:</span>{' '}<span>{libraryRegion?.address}</span></div>
            <div><span>Количество сотрудников:</span>{' '}<span>{libraryRegion?.employees} тысяч человек</span></div>
            <div><span>Количество пользователей:</span>{' '}<span>{libraryRegion?.users} тысяч человек</span></div>
            <div><span>Количество подписчиков:</span>{' '}<span>{libraryRegion?.subscribers} тысяч человек</span></div>
            <div><span>Количество компьютеров:</span>{' '}<span>{libraryRegion?.computers} штук</span></div>
            <div><span>Бюджет:</span>{' '}<span>{libraryRegion?.funds_budget}</span></div>
        </>
    )
}
