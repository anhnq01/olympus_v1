import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="/#" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: '40px', lineHeight: '40px' }}>
                            <i className="flaticon-043-teddy-bear" />
                            <span className="text-white">VI EDU</span>
                        </a>
                        <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Liên hệ</h3>
                        <div className="d-flex">
                            <h4 className="fa fa-map-marker-alt text-primary" aria-hidden="true"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Địa chỉ</h5>
                                <p>56 Trung Kính, Mỹ Hào, Hưng Yên</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <h4 className="fa fa-envelope text-primary" aria-hidden="true"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Email</h5>
                                <p>vi-edu@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex">
                        <h4 className="fa fa-phone-alt text-primary" aria-hidden="true"></h4>
                            <div className="pl-3">
                                <h5 className="text-white">Số điện thoại</h5>
                                <p>0971 336 266</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="/#"><i className="fa fa-angle-right mr-2" />Home</a>
                            <a className="text-white mb-2" href="/#"><i className="fa fa-angle-right mr-2" />About Us</a>
                            <a className="text-white mb-2" href="/#"><i className="fa fa-angle-right mr-2" />Our Classes</a>
                            <a className="text-white mb-2" href="/#"><i className="fa fa-angle-right mr-2" />Our Teachers</a>
                            <a className="text-white mb-2" href="/#"><i className="fa fa-angle-right mr-2" />Our Blog</a>
                            <a className="text-white" href="/#"><i className="fa fa-angle-right mr-2" />Contact Us</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h3 className="text-primary mb-4">Cần tư vấn</h3>
                        <form action="true">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Họ tên" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Số điện thoại" required="required" />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit">Gửi</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-fluid pt-5" style={{ borderTop: '1px solid rgba(23, 162, 184, .2)' }}>
                    <p className="m-0 text-center text-white">
                        © <a className="text-primary font-weight-bold" href="/#">VI EDUT</a>. Đăng ký bản quyền. Thiết kế bởi
                        <a className="text-primary font-weight-bold" href="https://www.facebook.com/anhnq.8888/"> Nguyễn Quyền Anh</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;