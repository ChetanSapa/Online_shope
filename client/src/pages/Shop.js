import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {devices} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => devices.setTypes(data))
        fetchBrands().then(data => devices.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            devices.setDevices(data.rows)
            devices.setTotalCount(data.count)
        })
    }, [devices])


    useEffect(() => {
        fetchDevices(devices.selectedType.id, devices.selectedBrand.id, devices.page, 3).then(data => {
            devices.setDevices(data.rows)
            devices.setTotalCount(data.count)
        })
    }, [devices.page, devices.selectedType, devices.selectedBrand])

    return (
        <Container>
            <Row className={'mt-4'}>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;