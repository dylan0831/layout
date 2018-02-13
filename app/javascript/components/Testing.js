import React from "react"

class Testing extends React.Component {
  render () {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 hdr-bg-img">
                    <br />
                        <div className="row">
                            <div className="col-md-12" align="center">
                                <h1>Find The Best <b>Insurance Deals</b> in Malaysia</h1>
                                <br />
                            </div>
                        </div>

                        <br/>

                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-6" id="exTab">
                                <ul className="nav nav-pills nav-justified" style={{backgroundColor : "lightgrey"}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#homeInsurance">
                                            <img src={require('bigIcon-carInsurance.png')} /> &nbsp; <span>Home Insurance</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#travelInsurance">
                                            <img src={require('bigIcon-travelInsurance.png')} /> &nbsp; <span>Travel Insurance</span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#carInsurance">
                                            <img src={require('bigIcon-carInsurance.png')} /> &nbsp; <span>Car Insurance</span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content clearfix">
                                    <div id="homeInsurance" className="tab-pane active container">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-1" />
                                                <div className="col-md-11">
                                                    <br />
                                                        <h2>I am looking for</h2>

                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="basicCoverage" value="" /> Basic Coverage</label>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="lossOfCash" value="" /> Loss of
                                                                    Cash</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="accidentalDamage" value="" /> Accidental
                                                                    Damage</label>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label className="lbl-color-mod"><input type="checkbox" name="tempAccommodation" value="" /> Temporary
                                                                    Accommodation</label>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <p style={{fontWeight : "bold", fontSize : "18px", color: "#1B3C68", paddingTop : "6px"}}>Sum Insured
                                                                    (RM)</p>
                                                            </div>
                                                            <div className="col-md-2">
                                                                <input className="sum-input" type="number" />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <button className="btn btn-apply-color" type="submit" >Search Now</button>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </form>
                                        <br />
                                    </div>

                                    <div id="travelInsurance" className="tab-pane fade">
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-11">
                                                <h2>TRAVEL</h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="carInsurance" className="tab-pane fade">
                                        <div className="row">
                                            <div className="col-md-1" />
                                            <div className="col-md-11">
                                                <h2>CAR</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" />
                        </div>
                        <br /><br /><br />
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
                <div className="col-md-1" />

                <div className="col-md-10">

                    <div className="row" align="center">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} className="promo-pic-size" />
                                        <h3>Last Chance to Get These Amazing Gifts with Your New Card</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} /> Up to 8% Cash Back <br />
                                            <img src={require('icon-bullet.png')} /> Up to 10x Rewards Points
                                        </p>
                                        <br />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} className="promo-pic-size" />
                                        <h3>11 - 11 Ending Soon! Grab These 4 Awesome Gifts Now!</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} /> Up to 8% Cash Back <br />
                                            <img src={require('icon-bullet.png')} /> Up to 10x Rewards Points
                                        </p>
                                        <br />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} className="promo-pic-size" />
                                        <h3>Wait No More! Get 4 Fantastic Gifts with Your Insurance Now!</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} /> Up to 8% Cash Back Every Month <br />
                                            <img src={require('icon-bullet.png')} /> Up to 10x Rewards Points
                                        </p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <div className="row" align="center">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} className="promo-pic-size" />
                                        <h3>Last Chance to Get These Amazing Gifts with Your New Card</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} /> Up to 8% Cash Back <br />
                                            <img src={require('icon-bullet.png')} /> Up to 10x Rewards Points
                                        </p>
                                        <br />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} className="promo-pic-size" />
                                        <h3>11 - 11 Ending Soon! Grab These 4 Awesome Gifts Now!</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} /> Up to 8% Cash Back <br />
                                            <img src={require('icon-bullet.png')} /> Up to 10x Rewards Points
                                        </p>
                                        <br/>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="box">
                                        <img src={require('promo.png')} className="promo-pic-size" />
                                        <h3>Wait No More! Get 4 Fantastic Gifts with Your Insurance Now!</h3>
                                        <p>
                                            <img src={require('icon-bullet.png')} /> Up to 8% Cash Back Every Month <br />
                                            <img src={require('icon-bullet.png')} /> Up to 10x Rewards Points
                                        </p>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-1" />
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-md-12" style={{ backgroundColor : "#E7F1F3" }}>

                    <div className="row">
                        <div className="col-md-12" align="center">
                            <br /><br />
                                <h1>Just <span className="hdr-title"><b>Browsing?</b></span> These Might Interest You</h1>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-1">
                            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                <span className="fa fa-chevron-left fa-lg text-muted" />
                                <span className="sr-only">Previous</span>
                            </a>
                        </div>
                        <div className="col-md-10 col-centered">
                            <div id="carousel" className="carousel slide" data-type="multi" data-ride="carousel" data-interval="2500">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="carousel-col">
                                            <div className="box-in-carousel mx-auto d-block" align="center">
                                                <div className="row line-under">
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6 text-left">
                                                                <img src={require('AIGlogo.png')} height="50" width="80" />
                                                            </div>
                                                            <div className="col-md-6 text-right">
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
                                                            <span className="fa fa-info-circle info" aria-hidden="true" /> <br />
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
                                                        <p><img src={require('rounded-add-button.png')} /> &nbsp; Add to Compare</p>
                                                    </div>
                                                </div>

                                                <div className="row line-under card-row-pad-btm">
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>
                                                                    9/10 <br />
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
                                                                <button className="btn btn-read-color">Read More</button>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn btn-apply-color">Apply Now</button>
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
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6 text-left">
                                                                <img src={require('Allianzlogo.jpeg')} height="50" width="70" />
                                                            </div>
                                                            <div className="col-md-6 text-right">
                                                                <p>
                                                                    <span className="card-title">Allianz</span> <br />
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
                                                            <span className="fa fa-info-circle info" aria-hidden="true" /> <br />
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
                                                        <p><img src={require('rounded-add-button.png')} /> &nbsp; Add to Compare</p>
                                                    </div>
                                                </div>

                                                <div className="row line-under card-row-pad-btm">
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>
                                                                    8/10 <br />
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
                                                                <button className="btn btn-read-color">Read More</button>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn btn-apply-color">Apply Now</button>
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
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6 text-left">
                                                                <img src={require('ambank.png')} height="50" width="100" />
                                                            </div>
                                                            <div className="col-md-6 text-right">
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
                                                            <span className="fa fa-info-circle info" aria-hidden="true" /> <br/>
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
                                                        <p><img src={require('rounded-add-button.png')} /> &nbsp; Add to Compare</p>
                                                    </div>
                                                </div>

                                                <div className="row line-under card-row-pad-btm">
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>
                                                                    7/10 <br />
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
                                                                <button className="btn btn-read-color">Read More</button>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn btn-apply-color">Apply Now</button>
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
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6 text-left">
                                                                <img src={require('AXAlogo.png')} height="50" width="50" />
                                                            </div>
                                                            <div className="col-md-6 text-right">
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
                                                            <span className="fa fa-info-circle info" aria-hidden="true" /> <br />
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
                                                        <p><img src={require('rounded-add-button.png')} /> &nbsp; Add to Compare</p>
                                                    </div>
                                                </div>

                                                <div className="row line-under card-row-pad-btm">
                                                    <div className="col-md-12 higher-height">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p>
                                                                    7/10 <br />
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
                                                                <button className="btn btn-read-color">Read More</button>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <button className="btn btn-apply-color">Apply Now</button>
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
                        <div className="col-md-1">
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
    );
  }
}
export default Testing
