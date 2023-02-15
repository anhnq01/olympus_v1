import React, { Component } from 'react';
import Class from './Class';
import Registration from './Registration';
import { Link } from 'react-router-dom';

class OurClasses extends Component {
    render() {
        return (
            <div>
                {/* Header Start */}
                <div className="container-fluid bg-primary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                        <h3 className="display-3 font-weight-bold text-white">Chương trình học</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0"><Link to={"/"} className="text-white">Trang chủ</Link></p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0">Chương trình học</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                <Class></Class>
                <Registration></Registration>
            </div>
        );
    }
}

export default OurClasses;