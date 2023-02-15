import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_FORM = {
    FullName: "Nguyen Quyen Anh",
    Email: null,
    ObjectType: null,
    Message: null
}
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_FORM
    }

    save = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        console.log(name);
    }

    render() {
        return (
            <div>
                {/* Header Start */}
                <div className="container-fluid bg-primary mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                        <h3 className="display-3 font-weight-bold text-white">Cần tư vấn</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0"><Link to={"/"} className="text-white">Trang chủ</Link></p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0">Liên hệ</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Contact Start */}
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5"><span className="px-2">Liên hệ</span></p>
                            <h1 className="mb-4">Liên hệ với chúng tôi</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 mb-5">
                                <div className="contact-form">
                                    <div id="success" />
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <input onChange={(onChange) => { this.onChange(onChange) }} type="text" className="form-control" id="name" name="FullName" placeholder="Họ và tên" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="control-group">
                                            <input onChange={(onChange) => { this.onChange(onChange) }} type="email" className="form-control" id="email" name="Email" placeholder="Email" required="required" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="form-group">
                                            <select onChange={(onChange) => { this.onChange(onChange) }} name="ObjectType" className="form-control" style={{ height: '47px' }}>
                                                <option value="0">-- Chọn --</option>
                                                <option value="1">Phụ huynh</option>
                                                <option value="2">Học viên</option>
                                            </select>
                                        </div>
                                        <div className="control-group">
                                            <textarea onChange={(onChange) => { this.onChange(onChange) }} className="form-control" rows={6} id="message" name="Message" placeholder="Câu hỏi" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div>
                                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton" onClick={(event) => { this.save(event) }}>Gửi</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-5">
                                <p>Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est eirmod eirmod amet.</p>
                                <div className="d-flex">
                                    <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }} />
                                    <div className="pl-3">
                                        <h5>Address</h5>
                                        <p>123 Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }} />
                                    <div className="pl-3">
                                        <h5>Email</h5>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }} />
                                    <div className="pl-3">
                                        <h5>Phone</h5>
                                        <p>+012 345 67890</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }} />
                                    <div className="pl-3">
                                        <h5>Opening Hours</h5>
                                        <strong>Sunday - Friday:</strong>
                                        <p className="m-0">08:00 AM - 05:00 PM </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
            </div>
        );
    }
}

export default Contact;