import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NEWS_DATA = [
    {
        Id: "1",
        Title: "Diam amet eos at no eos",
        Decription: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet..."
    }, {
        Id: "2",
        Title: "Diam amet eos at no eos",
        Decription: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet..."
    }, {
        Id: "3",
        Title: "Diam amet eos at no eos",
        Decription: "Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet..."
    }
]

class Blog extends Component {
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Latest Blog</span></p>
                        <h1 className="mb-4">Latest Articles From Blog</h1>
                    </div>
                    <div className="row pb-3">
                        {NEWS_DATA.map((item, i) => (
                            <div className="col-lg-4 mb-4" key={i}>
                                <div className="card border-0 shadow-sm mb-2">
                                    <img className="card-img-top mb-2" src="client/img/blog-1.jpg" alt="" />
                                    <div className="card-body bg-light text-center p-4">
                                        <h4>{item.Title}</h4>
                                        <div className="d-flex justify-content-center mb-3">
                                            <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                                            <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                                            <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                                        </div>
                                        <p>{item.Decription}</p>
                                        <Link to={"/tin-chi-tiet/latest-articles-from-blog/" + item.Id} className="btn btn-primary px-4 mx-auto my-2">Xem thêm...</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        );
    }
}

export default Blog;