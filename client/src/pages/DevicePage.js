import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Row, Button} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevices} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className={'mt-3'}>
            <Row>
                <Col md={4}>
                    <Image width={'100%'} src={process.env.REACT_APP_API_URL + device.img}></Image>
                </Col>
                <Col md={4} className={'mt-5'}>
                    <div className={'d-flex flex-column align-items-center'}>
                        <h2>{device.name}</h2>
                        <div className={'d-flex align-items-center justify-content-center'}
                             style={{
                                 background: 'url(https://static.vecteezy.com/system/resources/thumbnails/007/126/787/small/star-icon-vector.jpg) no-repeat center center',
                                 width: 240,
                                 height: 240,
                                 backgroundSize: 'cover',
                                 fontSize: 64
                             }}>
                            {device.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4} className={'mt-5'}>
                    <Card
                        className={'d-flex flex-column align-items-center justify-content-around'}
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} eu.</h3>
                        <Button variant={'outline-dark'}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-4'}>
                {device.info.map(info =>
                    <Row key={info.id}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};
export default DevicePage;