import React, { Component } from 'react';

class Class extends Component {
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Khóa học</span></p>
                        <h1 className="mb-4">Chương trình học</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src="client/img/class-1.jpg" alt="" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Khóa 4-16 tuổi</h4>
                                    <p className="card-text">Là một chương trình Anh ngữ vui nhộn, theo khung đào tạo chuẩn Châu Âu với 8 level , chương trình học thực sự là cần thiết và bổ ích dành cho các em nhi đồng. Giúp các em tự tin làm quen ngôn ngữ mới và luyện phát âm đạt chuẩn.</p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    {/* <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div> */}
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Số buổi</strong></div>
                                        <div className="col-6 py-1">40 buổi</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Số giờ</strong></div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                        <div className="col-6 py-1">$290 / Month</div>
                                    </div> */}
                                </div>
                                <a href="/#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src="client/img/class-2.jpg" alt="" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Tiếng anh học thuật</h4>
                                    <p className="card-text">Chương trình luyện thi IELTS của VI EDU được biên soạn và thiết kế dựa trên những nghiên cứu chuyên sâu và hiểu rõ điểm mạnh, điểm yếu của học sinh Việt Nam, nhằm giúp học viên xây dựng chiến thuật và kỹ năng làm bài tốt nhất.</p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    {/* <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div> */}
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tổng số buổi</strong></div>
                                        <div className="col-6 py-1">40 buổi</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Số giờ</strong></div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                        <div className="col-6 py-1">$290 / Month</div>
                                    </div> */}
                                </div>
                                <a href="/#" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card border-0 bg-light shadow-sm pb-2">
                                <img className="card-img-top mb-2" src="client/img/class-3.jpg" alt="" />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Tiếng anh giao tiếp</h4>
                                    <p className="card-text">Chương trình luyện thi IELTS của VI EDU được biên soạn và thiết kế dựa trên những nghiên cứu chuyên sâu và hiểu rõ điểm mạnh, điểm yếu của học sinh Việt Nam, nhằm giúp học viên xây dựng chiến thuật và kỹ năng làm bài tốt nhất.</p>
                                </div>
                                <div className="card-footer bg-transparent py-4 px-5">
                                    {/* <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                                        <div className="col-6 py-1">3 - 6 Years</div>
                                    </div> */}
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Số buổi</strong></div>
                                        <div className="col-6 py-1">40 buổi</div>
                                    </div>
                                    <div className="row border-bottom">
                                        <div className="col-6 py-1 text-right border-right"><strong>Số giờ</strong></div>
                                        <div className="col-6 py-1">08:00 - 10:00</div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                                        <div className="col-6 py-1">$290 / Month</div>
                                    </div> */}
                                </div>
                                <a href="/#" className="btn btn-primary px-4 mx-auto mb-4">Đăng ký ngay!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Class;