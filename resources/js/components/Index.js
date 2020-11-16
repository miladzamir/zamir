import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center">
                        <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
                        <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your
                            inbox.
                        </div>
                        <form className="signup-form form-inline justify-content-center pt-3">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="semail">Your email</label>
                                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail"
                                       placeholder="Enter email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>

                </section>
                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">

                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                                     src={window.location.origin + '/src/images/blog/blog-post-thumb-1.jpg'} alt="image" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><Link to="/BlogPost">Why Every Developer Should
                                        Have A Blog</Link></h3>
                                    <div className="meta mb-1"><span
                                        className="date">Published 2 days ago</span><span className="time">5 min read</span><span
                                        className="comment"><a href="#">8 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies...
                                    </div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>

                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                                     src={window.location.origin + '/src/images/blog/blog-post-thumb-2.jpg'} alt="image" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">A Guide to Becoming a
                                        Full-Stack Developer</a></h3>
                                    <div className="meta mb-1"><span
                                        className="date">Published 3 months ago</span><span className="time">3 min read</span><span
                                        className="comment"><a href="#">26 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies...
                                    </div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>

                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                                     src={window.location.origin + '/src/images/blog/blog-post-thumb-3.jpg'} alt="image" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">High Performance
                                        JavaScript</a></h3>
                                    <div className="meta mb-1"><span
                                        className="date">Published 1 month ago</span><span className="time">8 min read</span><span
                                        className="comment"><a href="#">12 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies...
                                    </div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>

                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                                     src={window.location.origin + '/src/images/blog/blog-post-thumb-4.jpg'} alt="image" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Top 5 JavaScript
                                        Frameworks</a></h3>
                                    <div className="meta mb-1"><span
                                        className="date">Published 2 months ago</span><span className="time">15 min read</span><span
                                        className="comment"><a href="#">3 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies...
                                    </div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>

                        </div>
                        <div className="item mb-5">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                                     src={window.location.origin + '/src/images/blog/blog-post-thumb-5.jpg'} alt="image" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">Learn React in 24 Hours</a>
                                    </h3>
                                    <div className="meta mb-1"><span
                                        className="date">Published 2 months ago</span><span className="time">10 min read</span><span
                                        className="comment"><a href="#">23 comments</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies...
                                    </div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>

                        </div>

                        <div className="item">
                            <div className="media">
                                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                                     src={window.location.origin + '/src/images/blog/blog-post-thumb-6.jpg'} alt="image" />
                                <div className="media-body">
                                    <h3 className="title mb-1"><a href="blog-post.html">About Remote Working</a>
                                    </h3>
                                    <div className="meta mb-1"><span
                                        className="date">Published 3 months ago</span><span className="time">2 min read</span><span
                                        className="comment"><a href="#">1 comment</a></span></div>
                                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                        ultricies...
                                    </div>
                                    <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                </div>
                            </div>

                        </div>

                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i
                                className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i
                                className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>

                    </div>
                </section>
            </div>
        );
    }
}

export default Index;
