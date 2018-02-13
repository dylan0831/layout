import React from "react"

class LandingPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 hdr-bg-img">
                        <br/>
                        <div className="row">
                            <div className="col-md-12" align="center">
                                <h1>Find The Best <b>Insurance Deals</b> in Malaysia</h1>
                                <br/>
                            </div>
                        </div>

                        <br/>
                        <div>
                            <img src={require('Coming-Soon.png')} alt="coming-soon" className="coming-soon-hdr-img" />
                            <div className="row">
                                <div className="col-md-3 col-sm-3"/>
                                <div className="col-md-6 col-sm-6" id="exTab">
                                    <ul className="nav nav-pills nav-justified" style={{backgroundColor: "lightgrey"}}>
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="pill" href="#homeInsurance">
                                                <img src={require('bigIcon-homeInsurance.png')} alt="home-insurance-icon" /> &nbsp; <span>Home Insurance</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"> {/*data-toggle="pill" href="#travelInsurance"*/}
                                                <img src={require('bigIcon-travelInsurance.png')} alt="travel-insurance-icon" /> &nbsp; <span>Travel Insurance</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"> {/*data-toggle="pill" href="#carInsurance"*/}
                                                <img src={require('bigIcon-carInsurance.png')} alt="car-insurance-icon" /> &nbsp; <span>Car Insurance</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content clearfix">
                                        <div id="homeInsurance" className="tab-pane active container">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-1 col-sm-1"/>
                                                    <div className="col-md-10 col-sm-10">
                                                        <br/>
                                                        <h2>I am looking for</h2>

                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-3">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="basicCoverage" value="" /> Basic
                                                                    Coverage</label>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="lossOfCash" value="" /> Loss of
                                                                    Cash</label>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="accidentalDamage" value="" /> Accidental
                                                                    Damage</label>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="tempAccommodation" value="" /> Temporary
                                                                    Accommodation</label>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-12">
                                                                <p style={{fontWeight: "bold", fontSize: "18px", color: "#1B3C68", paddingTop: "6px"}}>Sum Insured
                                                                    (RM)</p>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <input className="sum-input" type="number" />
                                                            </div>
                                                            <div className="col-md-3 col-sm-12">
                                                                <button className="btn btn-apply-color btn-search-mobile" style={{float: "right"}} type="submit" disabled>Coming Soon</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 col-sm-1"/>
                                                </div>
                                            </form>
                                            <br/>
                                        </div>

                                        <div id="travelInsurance" className="tab-pane fade">
                                            <div className="row">
                                                <div className="col-md-1"/>
                                                <div className="col-md-11">
                                                    <h2>TRAVEL</h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="carInsurance" className="tab-pane fade">
                                            <div className="row">
                                                <div className="col-md-1"/>
                                                <div className="col-md-11">
                                                    <h2>CAR</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3"/>
                            </div>
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12" align="center">
                        <h1>Looking for <span className="hdr-title"><b>Promotions?</b></span> Check these out.</h1>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-1"/>

                    <div className="col-md-10">

                        <div className="row" align="center">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="box">
                                            <img src={require('promo-content.jpg')} alt="promo-pic" className="promo-pic-size" />
                                            <h3>Parkson Free 60 days Protection for your Home Content</h3>
                                            <p>
                                                <img src={require('icon-bullet.png')} alt="icon-bullet" /> Members only <br />
                                                <img src={require('icon-bullet.png')} alt="icon-bullet" /> Free 60 days Home Protection
                                            </p>
                                            <button className="btn btn-apply-color" style={{float: "right"}} onClick="location.href='promo/parkson.php'">More</button>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="box">
                                            <img src={require('promo-travel.jpg')} alt="promo-pic" className="promo-pic-size" />
                                            <h3>Join us to stand a chance to win a Hong Kong trip (worth up to RM5000)</h3>
                                            <p>
                                                <img src={require('icon-bullet.png')} alt="icon-bullet" /> 5day 4 night 2pax <br />
                                                <img src={require('icon-bullet.png')} alt="icon-bullet" /> Hong Kong Air ticket & Stay Included
                                            </p>
                                            <br/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="box">
                                            <img src={require('promo-roadtax.jpg')} alt="promo-pic" className="promo-pic-size" />
                                            <br/>
                                                <br/>
                                                    <br/>
                                                        <br/>
                                                            <h3>Motor / Car road tax + insurance *Zero % installment plan! </h3>
                                                            <p>
                                                                <img src={require('icon-bullet.png')} alt="icon-bullet" />  0% installment plan up to 12 months.<br/>
                                                                <img src={require('icon-bullet.png')} alt="icon-bullet" /> Free delivery to your doorstep.
                                                            </p>
                                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>
                        {/*<div className="row" align="center">
                        <div className="d-none d-md-block d-lg-block col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} alt="promo-pic" className="promo-pic-size" />
                                        <h3>Last Chance to Get These Amazing Gifts with Your New Card</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} alt="icon-bullet" /> Up to 8% Cash Back <br/>
                                            <img src={require('icon-bullet.png')} alt="icon-bullet" /> Up to 10x Rewards Points
                                        </p>
                                        <br/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="box">
                                        <img src="img/promo.png" alt="promo-pic" className="promo-pic-size" />
                                        <h3>11 - 11 Ending Soon! Grab These 4 Awesome Gifts Now!</h3>
                                        <p>
                                          <img src="img/icon-bullet.png" alt="icon-bullet" /> Up to 8% Cash Back <br>
                                          <img src="img/icon-bullet.png" alt="icon-bullet" /> Up to 10x Rewards Points
                                        </p>
                                        <br/>
                                      </div>
                                    </div>

                                    <div className="col-md-4">
                                      <div className="box">
                                        <img src="img/promo.png" alt="promo-pic" className="promo-pic-size" />
                                        <h3>Wait No More! Get 4 Fantastic Gifts with Your Insurance Now!</h3>
                                        <p>
                                          <img src="img/icon-bullet.png" alt="icon-bullet" /> Up to 8% Cash Back Every Month <br>
                                          <img src="img/icon-bullet.png" alt="icon-bullet" /> Up to 10x Rewards Points
                                        </p>
                                        <br/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>*/}
                                    </div>

                                    <div className="col-md-1" />
                                </div>
                                <br/>
                                <hr style={{width: "78%"}} />

                                    <br/>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1 className="text-center"><span className="hdr-title"><b>About</b></span> Us</h1>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row" >

                                        <div className="col-md-2" />
                                        <div className="col-md-8">
                                            <p className="text-center" style={{fontSize: "22px"}}> Einsure was formed in 2016 as an extension from ORC Risk Consulting Group which started since 1999 by Chartered Insurance Practitioners and already establish a solid foundation in General and Life Insurance Industry in Malaysia. With einsure, we now have complete digital marketing & IT expertise.<br/><br/>
                                                With vast experience and knowledge of the industry from our team and many local & international networks, “einsure.my” are targeting to be a reputable household name by offering a convenient portal, accurate and useful information.<br/><br/>
                                                Our goals is to build up consumers who can upgrade to super consumers from their single clicks. We are here to provides quality marketing solutions and customized consultations for corporate and individuals clients.
                                                The driving force of this undertaking is our striving and dedicated team that is highly trained and knowledgeable.</p>
                                        </div>
                                        <div className="col-md-2" />

                                    </div>
                                    <br/>

                                    <div>
                                        <img src={require('Coming-Soon.png')} alt="coming-soon" className="coming-soon-img" />
                                        <div className="row">
                                            <div className="col-md-12" style={{backgroundColor: "#E7F1F3"}}>

                                                <div className="row">
                                                    <div className="col-md-12" align="center">
                                                        <br/><br/>
                                                            <h1>Just <span className="hdr-title"><b>Browsing?</b></span> These Might Interest You</h1>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="row">
                                                    <div className="col-md-1 d-none d-sm-block">
                                                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                                            <span className="fa fa-chevron-left fa-lg text-muted" />
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                    </div>
                                                    <div className="d-md-block d-lg-block col-md-10 col-centered">
                                                        <div id="carousel" className="carousel slide" datatype="multi" data-ride="carousel" data-interval="5000">
                                                            <div className="carousel-inner">
                                                                <div className="carousel-item active">
                                                                    <div className="carousel-col">
                                                                        <div className="box-in-carousel mx-auto d-block" align="center">
                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height mobile-title-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6 text-left">
                                                                                            <img src={require('AIGlogo.png')} alt="AIG-logo" height="50" width="80" />
                                                                                        </div>
                                                                                        <div className="col-md-6 text-right mobile-remove-pad-left">
                                                                                            <p>
                                                                                                <span className="card-title">AIG</span> <br />
                                                                                                <span className="card-subtitle">Premier Client Solutions</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <p>
                                                                                        <span className="price-tag">RM 144.00</span>
                                                                                        <span className="fa fa-info-circle info d-none d-sm-block" aria-hidden="true" /> <br />
                                                                                        <span className="price-subtitle">Basic Premium</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Loss/Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Accidental Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Temporary Accommodation</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Snatch Theft</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p><img src={require('rounded-add-button.png')} alt="add-icon" /> &nbsp; Add to Compare</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under card-row-pad-btm">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                9/10 <br/>
                                                                                                Coverage Rating
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star-o star" aria-hidden="true" /> <br />
                                                                                                Policy Holder
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row btn-padding-top">
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-read-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-apply-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="carousel-item">
                                                                    <div className="carousel-col">
                                                                        <div className="box-in-carousel" align="center">
                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height mobile-title-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6 col-12 text-left">
                                                                                            <img src={require('Allianzlogo.jpeg')} alt="Allianz-logo" height="50" width="70" />
                                                                                        </div>
                                                                                        <div className="col-md-6 col-12 text-right">
                                                                                            <p>
                                                                                                <span className="card-title">Allianz</span> <br/>
                                                                                                <span className="card-subtitle">Home Shield</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <p>
                                                                                        <span className="price-tag">RM 130.00</span>
                                                                                        <span className="fa fa-info-circle info d-none d-sm-block" aria-hidden="true" /> <br />
                                                                                        <span className="price-subtitle">Basic Premium</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Loss/Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Accidental Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Temporary Accommodation</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p />
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p><img src={require('rounded-add-button.png')} alt="add-icon" />&nbsp; Add to Compare</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under card-row-pad-btm">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                8/10 <br/>
                                                                                                Coverage Rating
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star-half-o star" aria-hidden="true" /> <br />
                                                                                                Policy Holder
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row btn-padding-top">
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-read-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-apply-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="carousel-item">
                                                                    <div className="carousel-col">
                                                                        <div className="box-in-carousel" align="center">
                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height mobile-title-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6 text-left">
                                                                                            <img src={require('ambank.png')} alt="Ambank-logo" height="50" width="100" />
                                                                                        </div>
                                                                                        <div className="col-md-6 text-right mobile-remove-pad-left">
                                                                                            <p>
                                                                                                <span className="card-title">AMGENERAL</span> <br />
                                                                                                <span className="card-subtitle">Household Plus</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <p>
                                                                                        <span className="price-tag">RM 142.46</span>
                                                                                        <span className="fa fa-info-circle info d-none d-sm-block" aria-hidden="true" /> <br />
                                                                                        <span className="price-subtitle">Basic Premium</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Loss/Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Accidental Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p />
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Snatch Theft</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p><img src={require('rounded-add-button.png')} alt="add-icon" /> Add to Compare</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under card-row-pad-btm">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                7/10 <br/>
                                                                                                Coverage Rating
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star-o star" aria-hidden="true" /> <br />
                                                                                                Policy Holder
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row btn-padding-top">
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-read-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-apply-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="carousel-item">
                                                                    <div className="carousel-col">
                                                                        <div className="box-in-carousel" align="center">
                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height mobile-title-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6 text-left">
                                                                                            <img src={require('AXAlogo.png')} alt="AXA-logo" height="50" width="50" />
                                                                                        </div>
                                                                                        <div className="col-md-6 text-right mobile-remove-pad-left">
                                                                                            <p>
                                                                                                <span className="card-title">AXA</span> <br />
                                                                                                <span className="card-subtitle">Smart Home Optimum</span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <p>
                                                                                        <span className="price-tag">RM 150.00</span>
                                                                                        <span className="fa fa-info-circle info d-none d-sm-block" aria-hidden="true" /> <br />
                                                                                        <span className="price-subtitle">Basic Premium</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Loss/Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Accidental Damage</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Temporary Accommodation</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p>Snatch Theft</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under">
                                                                                <div className="col-md-12 lower-height">
                                                                                    <p><img src={require('rounded-add-button.png')} alt="add-icon" /> Add to Compare</p>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row line-under card-row-pad-btm">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                7/10 <br/>
                                                                                                Coverage Rating
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <p>
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" />
                                                                                                <span className="fa fa-star star" aria-hidden="true" /> <br />
                                                                                                Policy Holder
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row">
                                                                                <div className="col-md-12 higher-height">
                                                                                    <div className="row btn-padding-top">
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-read-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <button className="btn btn-apply-color" disabled>Coming Soon</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-1 d-none d-sm-block">
                                                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                                            <span className="fa fa-chevron-right fa-lg text-muted" />
                                                            <span className="sr-only">Next</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <br/>
                                                <br/>
                                            </div>

                                        </div>
                                    </div>
                            </div>

                            );
                            }
                            }
                            export default LandingPage
