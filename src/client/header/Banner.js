import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
                <div className="row align-items-center px-3">
                    <div className="col-lg-6 text-center text-lg-left">
                        <h4 className="text-white mb-4 mt-5 mt-lg-0">VI EDU</h4>
                        <h1 className="display-3 font-weight-bold text-white">New Approach Education</h1>
                        <p className="text-white mb-4">VI EDU hệ thống anh ngữ úy tín hàng đầu với các chương trình học chuẩn quốc tế đáp ứng nhu cầu học tập cho mọi lứa tuổi.</p>
                        <a href="/#" className="btn btn-secondary mt-1 py-3 px-5">Xem thêm</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <img className="img-fluid mt-5" src="client/img/header.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;