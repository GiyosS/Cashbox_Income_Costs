import React from 'react';
import {useSelector} from "react-redux";
import Pie3D from "../Charts/Pie3D";
import Pie3D2 from "../Charts/Pie3D2";

function Diagramma(props) {
    const {kirimlar, chiqimlar} = useSelector((store) => store.kassaSlice)

    const Mark_Kirim = kirimlar.filter(item => item.foydalanuvchi_id.id === 1).reduce((item, index) =>
        item + index.miqdori, 0)

    const Jakub_Kirim = kirimlar.filter(item => item.foydalanuvchi_id.id === 2).reduce((item, index) =>
        item + index.miqdori, 0)

    const Otto_Kirim = kirimlar.filter(item => item.foydalanuvchi_id.id === 3).reduce((item, index) =>
        item + index.miqdori, 0)

    const Mark_Chiqim = chiqimlar.filter(item => item.foydalanuvchi_id.id === 1).reduce((item, index) =>
        item + index.miqdori, 0)
    const Jakub_Chiqim = chiqimlar.filter(item => item.foydalanuvchi_id.id === 1).reduce((item, index) =>
        item + index.miqdori, 0)
    const Otto_Chiqim = chiqimlar.filter(item => item.foydalanuvchi_id.id === 1).reduce((item, index) =>
        item + index.miqdori, 0)

    const chartDataKirim = [
        {
            label: "Mark",
            value: Mark_Kirim
        },
        {
            label: "Jakub",
            value: Jakub_Chiqim
        },
        {
            label: "Otto",
            value: Otto_Kirim
        },
    ];

    const chartDataChiqim = [
        {
            label: "Mark",
            value: Mark_Chiqim
        },
        {
            label: "Jakub",
            value: Jakub_Kirim
        },
        {
            label: "Otto",
            value: Otto_Chiqim
        },
    ];

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <Pie3D chartDataKirim={chartDataKirim}/>
                </div>

                <div className="col-md-6">
                    <Pie3D2 chartDataChiqim={chartDataChiqim}/>
                </div>
            </div>


        </div>
    );
}

export default Diagramma;