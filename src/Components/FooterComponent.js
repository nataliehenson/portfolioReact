import React from "react";

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center">
                        <hr color="black"></hr>
                    </div>
                    <div className="col-12 text-center mt-3">
                        <a
                            role="button"
                            className="btn btn-link"
                            href="mailto:nmhenson13@gmail.com"
                        >
                            nmhenson13@gmail.com
                        </a>
                    </div>
                    <div className="col-12 mt-5 text-center">
                        <hr color="black"></hr>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
