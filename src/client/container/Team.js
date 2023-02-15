import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Đội ngũ giáo viên</span></p>
            <h1 className="mb-4">GIÀU KIẾN THỨC GIỎI KỸ NĂNG</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="client/img/teacher/anh-gv.jpg" alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <h4>Ms. Nguyệt Ánh</h4>
              <i>Music Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="client/img/teacher/anh-gv-2.jpg" alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <h4>Ms. Thùy Chi</h4>
              <i className="text-align-left">Người giáo viên khơi dậy niềm đam mê với việc học Tiếng Anh trong các em</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="client/img/teacher/anh-gv-3.jpg" alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <h4>Ms. Khánh Linh</h4>
              <i>Cô có phong cách giảng dạy vô cùng cuốn hút</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src="client/img/teacher/anh-gv-4.jpg" alt="" />
                <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light text-center px-0" style={{ width: '38px', height: '38px' }} href="/#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <h4>Ms. Thu Trang</h4>
              <i>Cô giáo năng động và tràn đầy nhiệt huyết với nghề</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;