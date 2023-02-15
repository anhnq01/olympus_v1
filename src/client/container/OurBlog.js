import React, { Component } from 'react';
import Blog from './Blog';
import { Link } from 'react-router-dom';

class OurBlog extends Component {
    render() {
        return (
            <div>
                {/* Header Start */}
                <div className="container-fluid bg-primary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                        <h3 className="display-3 font-weight-bold text-white">Tin tức</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0"><Link to={"/"} className="text-white">Trang chủ</Link></p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0">Tin tức</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                <Blog></Blog>
            </div>
        );
    }
}

export default OurBlog;