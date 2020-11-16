import React, {Component} from 'react';
import Promo from "./section/Promo";

class BlogPost extends Component {
    render() {
        return (
            <div>
                <article className="blog-post px-3 py-5 p-md-5">
                    <div className="container">
                        <header className="blog-post-header">
                            <h2 className="title mb-2">Why Every Developer Should Have A Blog</h2>
                            <div className="meta mb-3"><span className="date">Published 3 months ago</span><span
                                className="time">5 min read</span><span className="comment"><a
                                href="#">4 comments</a></span></div>
                        </header>

                        <div className="blog-post-body">
                            <figure className="blog-banner">
                                <a href="https://made4dev.com"><img className="img-fluid"
                                                                    src={window.location.origin + '/src/images/blog/blog-post-banner.jpg'}
                                                                    alt="image"/></a>
                                <figcaption className="mt-2 text-center image-caption">Image Credit: <a
                                    href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium
                                    Programming T-shirts)</a></figcaption>
                            </figure>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                                enim. </p>

                            <h3 className="mt-5 mb-3">Code Block Example</h3>
                            <p>You can get more info at <a href="https://highlightjs.org/"
                                                           target="_blank">https://highlightjs.org/</a>. Lorem ipsum dolor
                                sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                                sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                                ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                                tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>

                            <h3 className="mt-5 mb-3">Typography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.</p>
                            <h5 className="my-3">Bullet Points:</h5>
                            <ul className="mb-5">
                                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
                            </ul>
                            <ol className="mb-5">
                                <li className="mb-2">Lorem ipsum dolor sit amet consectetuer.</li>
                                <li className="mb-2">Aenean commodo ligula eget dolor.</li>
                                <li className="mb-2">Aenean massa cum sociis natoque penatibus.</li>
                            </ol>
                            <h5 className="my-3">Quote Example:</h5>
                            <blockquote className="blockquote m-lg-5 py-3 pl-4 px-lg-5">
                                <p className="mb-2">You might not think that programmers are artists, but programming is an
                                    extremely creative profession. It's logic-based creativity.</p>
                                <footer className="blockquote-footer">John Romero</footer>
                            </blockquote>

                            <h5 className="my-3">Table Example:</h5>
                            <table className="table table-striped my-5">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </table>


                            <h3 className="mt-5 mb-3">Video Example</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                                consequat massa quis enim. </p>

                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/hnCmSXCZEpU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>

                        </div>

                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i
                                className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i
                                className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>


                    </div>
                </article>

                <Promo />
            </div>
        );
    }
}

export default BlogPost;
