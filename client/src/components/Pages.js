import React, {useContext} from 'react';
import {Context} from "../index";
import Pagination from 'react-bootstrap/Pagination';

const Pages = () => {
    const {devices} = useContext(Context)
    const pageCount = Math.ceil(devices.totalCount / devices.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className={'mt-5'}>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={devices.page === page}
                    onClick={() => devices.setPage(page)}
                >
                    {page}
                </Pagination.Item>)}
        </Pagination>
    );
};

export default Pages;