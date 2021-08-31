import React from 'react'

function Footer() {
    return (
        <div className="ftbottom">
            <div className="container-fluid cmpad">
                <div className="row">
                    <div className="col-md-6 copy">
                        <p>© 2021 Bhoomi Farmers. All Rights Reserved</p>
                    </div>
                    <div className="col-md-6 ftcont">
                        <ul>
                            <li>
                                <a href="tel:+91 9789023456"><img src="img/icons/phone.svg" alt=""></img> +91 9789023456</a>
                            </li>
                            <li>
                                <a href="mailto:contact@bhoomifarmers.com"><img src="img/icons/mail.svg" alt=""></img> contact@bhoomifarmers.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
