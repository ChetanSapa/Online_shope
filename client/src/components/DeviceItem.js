import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Card, Col, Image} from "react-bootstrap";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className={'text-black-50 mt-1 d-flex justify-content-between align-items-center'}>
                    <div>Dell</div>
                    <div className={'d-flex align-items-center'}>
                        <div>{device.rating}</div>
                        <Image
                            src={'https://static.vecteezy.com/system/resources/thumbnails/007/126/787/small/star-icon-vector.jpg'}
                            width={25}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;