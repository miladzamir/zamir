import React, {Component} from 'react';

class Promo extends Component {
    render() {
        return (
            <section className="promo-section theme-bg-light py-5 text-center">
                <div className="container">
                    <h2 className="title">Promo Section Heading</h2>
                    <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                    <figure className="promo-figure">
                        <a href="https://made4dev.com" target="_blank">
                            <img className="img-fluid"
                                 src={window.location.origin + '/src/images/promo-banner.jpg'}
                                 alt="image" /></a>
                    </figure>
                </div>
            </section>
    );
    }
    }

    export default Promo;
