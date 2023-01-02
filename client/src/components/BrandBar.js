import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {devices} = useContext(Context)
    return (
        <Row className='d-flex wrap'>
            {devices.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer', width: 'auto'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => devices.setSelectedBrand(brand)}
                    border={brand.id === devices.selectedBrand.id ? 'warning' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;