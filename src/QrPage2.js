import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOne } from './QrReducer';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'react-bootstrap';
import { AiOutlinePrinter } from 'react-icons/ai';
import logo from "./image/photo_2022.svg"

function QrPage2({ resultAnalis }) {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <div>
            {/* <div classNameName='pageA4'>
                <div classNameName='header'>

                </div>
                <div classNameName='info'>
                    <strong>ID / Номер:</strong>{resultAnalis?.id}
                </div>
            </div> */}
            <div className='d-flex mt-2 justify-content-center' >
                <Button variant="secondary" onClick={handlePrint}><AiOutlinePrinter />{" "} Печать</Button>
            </div>
            <div className='content pageA' ref={componentRef}>
                <div className='row'>
                    <div className='col-12'>
                        <div className="card border-flag pt-2 px-2 pb-1 pt-lg-5 px-lg-5 pb-lg-2 m-5">
                            <div className="d-flex mb-5">
                                <div className="left1 text-center">
                                    <h5>Ministry of Health of the Republic of Uzbekistan</h5>
                                    <h5>CONFIRMATION OF COVID-19 TEST RESULT</h5>
                                </div>
                                <div className="center1">
                                    <div className="mx-auto text-center">
                                        <h2><img src={logo} alt="" width={130} style={{ color: '#c309f7' }} /></h2>
                                    </div>
                                </div>
                                <div className="right1 text-center">
                                    <h5>Министерство Здравоохранения Республики Узбекистан</h5>
                                    <h5>Подтверждение результата теста COVID-19</h5>
                                </div>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>ID / Номер: </strong>
                                    <span>{resultAnalis?.id}</span>
                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Laboratory (name) / Лаборатория (название):
                                    </strong>
                                    <span>{resultAnalis?.laboratoryName}</span>
                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Place of sampling / Место забора анализа
                                        : </strong>
                                    <span>{resultAnalis?.placeOfSampling}</span>
                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Research method / Метод исследования: </strong>
                                    <span>{resultAnalis?.researchMethod}</span>
                                </h5>
                            </div>
                            <hr style={{ border: "4px solid #bbb" }} />
                            <div className="my-1">
                                <h5>
                                    <strong>Passport / Серия и номер паспорта: </strong>
                                    <span>{resultAnalis?.passport}</span>
                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Full name / Полное имя
                                        : </strong>
                                    <span>{resultAnalis?.fullName}</span>
                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Birth date / Дата рождения
                                        : </strong>
                                    <span>{resultAnalis?.birthDate !== undefined ? new Date(resultAnalis?.birthDate).toISOString().substring(0, 10) : null}</span>

                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Sex / Пол
                                        : </strong>
                                    <span>
                                        Female / Женщина
                                    </span>
                                </h5>
                            </div>
                            <div className="my-1">
                                <h5>
                                    <strong>Analysis date / Дата сдачи анализа
                                        : </strong>
                                    <span>{resultAnalis?.analysisDate !== undefined ?
                                        <>
                                            {new Date(resultAnalis?.analysisDate).toISOString().substring(0, 10)}
                                            {"  "}
                                            {new Date(resultAnalis?.analysisDate).toTimeString().substring(0, 5)}

                                        </>
                                        : null}</span>
                                </h5>
                            </div>
                            <div className="my-1 d-flex align-items-baseline">
                                <h5 className="mr-2">
                                    <strong>Test result and date / Результат и дата теста
                                        : </strong>
                                </h5>
                                <h4>
                                    <span>{resultAnalis?.result}</span>
                                    <strong>({resultAnalis?.resultDate !== undefined ?
                                        <>
                                            {new Date(resultAnalis?.resultDate).toISOString().substring(0, 10)}
                                            {"  "}
                                            {new Date(resultAnalis?.resultDate).toTimeString().substring(0, 5)}

                                        </>
                                        : null})</strong>
                                </h4>
                            </div>
                            <div className="row my-2">

                                <div className="text-center">
                                    {/* <div id="qrContainer" className="w-100"><canvas width="256" height="256"></canvas></div> */}
                                    <img src={"data:image/png;base64," + resultAnalis?.qrCode} width="350" height="350" />
                                </div>

                            </div>
                            <div className="mt-4 mx-auto text-center">
                                <h6 className="text-uppercase">
                                    <span>Ўзбекистон Республикаси Санитария-эпидемиологик осойишталик ва жамоат саломатлиги хизмати</span>
                                </h6>
                                <h6>
                                    <span>Манзил: </span>
                                    <span>.................................</span>
                                </h6>
                                <h6>
                                    <span>Телефон: </span>
                                    <a href="tel:998712761606">+998 ..............</a>
                                </h6>
                                <h6>
                                    <span>Email: </span>
                                    <a href="mailto:kancelyariyaresdsenm@minzdrav.uz">
                                        ..................@.......uz
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QrPage2;