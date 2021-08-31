import React from "react";

class Community extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: true
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ modalState: !this.state.modalState });
    }
    
    render() {
        return (
            <div className="modal fade community show" id="community" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="communityLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <img src="./img/icons/close.svg" alt />
                            </button>
                            <h4 className="modal-title mt-5" id="communityLabel">Select your Community</h4>

                            <input type="text" name="" placeholder="Your Address" className="form-control" />

                            <ul className="community-menu">
                                {/* <li>
                                    {allcommunity.map((community) => {
                                        return (<a>{community.community_name}</a>)
                                    })}
                                </li> */}
                            </ul>
                            <p className="find">Didn’t find your community? <a href="#" class="addAddressBtn" data-bs-toggle="modal" data-bs-target="#addAddress"><img src="./img/icons/plusround.svg" alt /> Add your address</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Community;
