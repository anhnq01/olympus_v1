import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SideBar extends Component {
    render() {
        return (

            <div className="container-fluid bg-light position-relative shadow">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    <a href="true" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
                        <i className="flaticon-043-teddy-bear" />
                        <span className="text-primary">VI EDU</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav font-weight-bold mx-auto py-0">
                            <Link to={"/"} className="nav-item nav-link"><i className='fa fa-home'></i></Link>
                            <Link to={"/gioi-thieu"} className="nav-item nav-link">Giới thiệu</Link>
                            <Link to={"/chuong-trinh-hoc"} className="nav-item nav-link">Chương trình học</Link>
                            <Link to={"/doi-ngu-giao-vien"} className="nav-item nav-link">Đội ngũ giáo viên</Link>
                            <Link to={"/guong-mat-vi-edu"} className="nav-item nav-link">Gương mặt Vi-Edu</Link>
                            <Link to={"/tin-tuc"} className="nav-item nav-link">Tin tức</Link>
                            <Link to={"/lien-he"} className="nav-item nav-link">Liên hệ</Link>
                            {/* <Link to="/" className="nav-item nav-link active"><i className='fa fa-home'></i></Link> */}
                            {/* <a href="/" className="nav-item nav-link active"><i className='fa fa-home'></i></a> */}
                        </div>
                        {/* <a href="contact.html" className="btn btn-primary px-4">Join Class</a> */}
                    </div>
                </nav>
            </div >
            // <ClientLinks></ClientLinks>
        );
    }
}

export default SideBar;