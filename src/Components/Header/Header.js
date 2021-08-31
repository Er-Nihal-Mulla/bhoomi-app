import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux';
import { getBillAmount } from "../../Helper/CartCheckoutHelper";
import { useDispatch } from 'react-redux';
import { getAllCommunity } from '../../Actions/index';
import axios from 'axios';


import Timing from "../Timings/Timings";


function Header(props) {

    const [phone, setPhone] = useState();

    async function login() {
        console.warn(phone)
        let item = { phone };
        let result = await fetch("https://api-bhoomi.mykar.in/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.getItem(JSON.stringify(result))

    }


    // Redux
    const cart = useSelector((state) => state.cartReducer);
    const products = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCommunity());
    }, []);
    const allcommunity = useSelector((state) => state.communityReducer);

    function closeModal() {
        document.getElementById('#community').modal('hide');
    }


    return (
        <div>
            <header className="header">
                <div class="container-fluid headtop">
                    <div class="cmpad">
                        <div class="container-fluid">
                            <div class="row mainrow">

                                <div class="logo">
                                    <a href=""><img src="/img/logo/logo.svg" alt="Bhoomi Farmers" /></a>
                                </div>

                                <div class="search">
                                    <form action="">
                                        <div class="input-group">
                                            <div class="input-group-btn search-panel" data-bs-search="students">
                                                <button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="modal" data-bs-target="#community">
                                                    <span class="deltitle">Delivery to</span>
                                                    <img src="/img/icons/mapmarker.svg" alt /><span id="commName" class="search_by">Not Available</span>
                                                </button>
                                            </div>
                                            <span class="input-group-btn">
                                                <button class="btn btn-default btnsrch" type="button"><img src="/img/icons/search.svg" alt /></button>
                                            </span>
                                            <input type="text" class="form-control" name="x" placeholder="Search for Products..." />
                                        </div>
                                    </form>
                                </div>

                                <div class="topmenu">
                                    <ul>
                                        <li onClick={props.cartviewhandler}><a class="btncart">
                                            <span>
                                                <span class="topmenu__cartqty">{cart.length}</span>
                                                <img src="/img/icons/cart.svg" alt />

                                            </span>
                                            <span class="mcinfo" style={{ display: 'inline-grid' }}>My Cart
                                                <span className="topmenu__carttotal">Rs. {getBillAmount(cart, products)}</span>
                                            </span>
                                        </a></li>
                                    </ul>
                                </div>
                                <div class="actionbtn">

                                    <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid headbottom">
                    <div class="cmpad">
                        <div class="container-fluid">
                            <div class="row mainrow">

                                <div class="mainmenu">

                                    <div class="scrollicon">
                                        <a href=""><img src="/img/logo/icon.svg" alt /></a>
                                    </div>

                                    <div class="normalmenu">
                                        <a class="mainli active" href="#"><img src="/img/icons/star.svg" alt /> Best Sellers</a>
                                    </div>

                                    <div class="normalmenu">
                                        <a class="mainli active" href="#"><img src="/img/icons/greens.svg" alt /> Greens</a>
                                    </div>

                                    <div class="normalmenu">
                                        <a class="mainli active" href="#"><img src="/img/icons/staples.svg" alt /> Staples</a>
                                    </div>

                                    <div class="normalmenu">
                                        <a class="mainli active" href="#"><img src="/img/icons/exotics.svg" alt /> Exotics</a>
                                    </div>

                                    <div class="normalmenu">
                                        <a class="mainli active" href="#"><img src="/img/icons/fruits.svg" alt /> Fruits</a>
                                    </div>

                                    {/* <Link to={"/myprofile"} >
                                        <div class="normalmenu">
                                            <a class="mainli active" href="#"><img src="/img/icons/fruits.svg" alt /> Profile</a>
                                        </div>
                                    </Link>
                                    <Link to={"/myorders"} >
                                        <div class="normalmenu">
                                            <a class="mainli active" href="#"><img src="/img/icons/fruits.svg" alt /> Orders</a>
                                        </div>
                                    </Link> */}

                                </div>

                                {/* <Timing /> */}

                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <div class="orderwindow orange">
                <p>Your Order window: Sunday 10 AM to Monday 8 PM</p>
            </div>


            {/* Community Modal */}
            <div className="modal fade community show" id="community" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="communityLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <img src="/img/icons/close.svg" alt />
                            </button>
                            <h4 className="modal-title mt-5" id="communityLabel">Select your Community</h4>

                            <input type="text" placeholder="Your Address" className="form-control" />

                            <ul className="community-menu">
                                <li>
                                    {/* {allcommunity.map((community) => {
                                        return (<a onClick={() => {
                                            var commName = community.community_name;
                                            document.getElementById("commName").textContent = commName;
                                        }} data-bs-dismiss="modal">{community.community_name}</a>)
                                    })} */}
                                </li>
                            </ul>

                            <p className="find">Didn’t find your community? <a href="#" class="addAddressBtn" data-bs-toggle="modal" data-bs-target="#addAddress"><img src="/img/icons/plusround.svg" alt /><a data-bs-dismiss="modal">Add your address</a></a></p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Address Modal */}


            <div class="modal fade addAddress" id="addAddress" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addAddressLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <img src="/img/icons/close.svg" alt />
                            </button>
                            <h4 class="modal-title mt-5" id="addAddressLabel">Add your address</h4>

                            <div class="form-row">
                                <div class="col-6 input-wrapper">
                                    <input id="addrName" class="intxt" type="text" id="user" required />
                                    <label class="inplbl" for="user">Full Name</label>
                                </div>
                                <div class="col-6 input-wrapper">
                                    <input id="addrEmail" class="intxt" type="text" required />
                                    <label class="inplbl" for="user">Email Address</label>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-12 input-wrapper">
                                    <input id="addrLine1" class="intxt" type="text" required />
                                    <label class="inplbl" for="user">Address Line 1</label>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-12 input-wrapper">
                                    <input id="addrLine2" class="intxt" type="text" required />
                                    <label class="inplbl" for="user">Address Line 2</label>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-4 input-wrapper">
                                    <input id="addrPin" class="intxt" type="text" required />
                                    <label class="inplbl" for="user">Pincode</label>
                                </div>
                                <div class="col-4 input-wrapper">
                                    <input id="addrCity" class="intxt" type="text" required />
                                    <label class="inplbl" for="user">City</label>
                                </div>
                                <div class="col-4 input-wrapper">
                                    <input id="addrState" class="intxt" type="text" required />
                                    <label class="inplbl" for="user">State</label>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col-12 modbtncol">
                                    <button class="btn btncancel" data-bs-dismiss="modal">Cancel</button>
                                    <button id="addAddressNext" class="btn btnsave">Save Address</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Login Modal */}


            <div class="modal fade login" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <img src="/img/icons/close.svg" alt />
                            </button>
                            <h4 class="modal-title text-center mt-5" id="loginLabel">Login</h4>
                            <form onSubmit >
                                <div class="form-row">
                                    <div class="col-12 input-wrapper hasicon">
                                        <i class="icon fa fa-phone-alt"></i>
                                        <input onChange={(e) => setPhone(e.target.value)} class="intxt" type="number" name="number" placeholder="Enter Mobile Number" required />
                                        <label class="inplbl" for="user">Enter you mobile no</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-check modalcheck">
                                        <input class="form-check-input" type="checkbox" value="otp" id="keepSignIn" required />
                                        <label class="form-check-label" for="keepSignIn">
                                            Keep me signed in
                                        </label>
                                    </div>
                                </div>

                                <div class="form-row mt-3">
                                    <div class="col-12 modbtncol">
                                        <button onClick={login} id="loginNext" data-bs-toggle="modal" data-bs-target="#otpModal" data-bs-dismiss="modal" aria-label="Close" class="btn btnsave w-100"   ><p data-bs-dismiss="modal">Continue</p></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





            {/* OTP Modal */}


            <div class="modal fade otp" id="otpModal" data-bs-backdrop="static" data-bs-eyboard="false" tabindex="-1" aria-labelledby="otpLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <img src="/img/icons/close.svg" alt />
                            </button>
                            <h4 class="modal-title text-center mt-5" id="otpLabel">OTP</h4>

                            <div class="form-row">
                                <div class="col-12 text-center">
                                    <p class="resend">Please enter the OTP sent to mobile no
                                        <br />+91-9876543210 <button class="change">Change</button></p>
                                </div>
                            </div>
                            <div class="form-row">
                                <form method="get" class="digit-group" data-bs-group-name="digits" data-bs-autosubmit="false" autocomplete="off">
                                    <input type="text" id="digit-1" name="digit-1" data-bs-next="digit-2" />
                                    <input type="text" id="digit-2" name="digit-2" data-bs-next="digit-3" data-bs-previous="digit-1" />
                                    <input type="text" id="digit-3" name="digit-3" data-bs-next="digit-4" data-bs-previous="digit-2" />
                                    <input type="text" id="digit-4" name="digit-4" data-bs-previous="digit-3" />
                                </form>
                            </div>
                            <div class="form-row">
                                <div class="col-12 text-center">
                                    <p class="resend"><a href="#">Resend OTP <span>in 00:30</span></a></p>
                                </div>
                            </div>

                            <div class="form-row mt-3">
                                <div class="col-12 modbtncol">
                                    <button id="otpNext" class="btn btnsave w-100">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Header;