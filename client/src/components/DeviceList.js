import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const {devices} = useContext(Context)
    console.log(devices)
    return (
        <Row>
            {devices.devices.map(device =>
            <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
};

export default DeviceList;