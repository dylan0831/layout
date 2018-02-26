import React from "react"
import PropTypes from "prop-types"

class Parksons extends React.Component {
  render () {
    return (
        <body style={{margin: "0px"}}>
        <div className="container-fluid">
            <div className="row">
                <img src={require('promo-content.jpg')} alt="" id="bg1" />
            </div>
        </div>

        <div className="container">
            <form>
                <h1 className="text-center"><span className="title-font-theme">Claim</span> Your Prize</h1><br/>
                <div className="row">
                    <div className="col-md-12 form-inline">
                        <div className="col-md-3">&nbsp;</div>
                        <div className="col-md-6 form-group">
                            <label for="input-name">Full Name (as per I/C)</label>
                            <input type="text" className="form-control1" name="full-name" id="input-name"
                                   placeholder="e.g Mohammad Johan bin Ismail"/>
                        </div>
                        <div className="col-md-3">&nbsp;</div>
                    </div>
                </div>
                <br/>

                    <div className="row">
                        <div className="col-md-12 form-inline">
                            <div className="col-md-3">&nbsp;</div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label for="input-number">Mobile Number</label><br/>
                                    <input type="number" className="form-control" name="mobile-number" id="input-number"
                                           placeholder="e.g 0113456789"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label for="input-email">Email address</label><br/>
                                    <input type="email" className="form-control" name="email" id="input-email"
                                           placeholder="e.g johan.ismail@example.com"/>
                                </div>
                            </div>
                            <div className="col-md-3">&nbsp;</div>
                        </div>
                    </div>
                    <br/>
                        <div className="row">
                            <div className="col-md-12 form-inline">
                                <div className="col-md-3">&nbsp;</div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label for="input-password">Password (min. 6 characters)</label><br/>
                                        <input type="password" className="form-control" name="password" id="input-password" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label for="input-password-confirm">Confirm Password</label><br/>
                                        <input type="password" className="form-control" name="password-confirm" id="input-password-confirm" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-3">&nbsp;</div>
                            </div>
                        </div>
                        <br/>
                            <div className="row">
                                <div className="col-md-12 form-inline">
                                    <div className="col-md-3">&nbsp;</div>
                                    <div className="col-md-6 form-group d-block mx-auto">
                                        <label for="input-promo">Promo Code</label>
                                        <input type="text" className="form-control2" name="promo-code"  id="input-promo"
                                               placeholder="e.g AB1234"/>
                                    </div>
                                    <div className="col-md-3">&nbsp;</div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-4">&nbsp;</div>
                                <div className="col-md-4 text-center">
                                    <button type="submit" className="btn btn-warning btn-black-font btn-lg">Claim Now</button>
                                </div>
                                <div className="col-md-4">&nbsp;</div>
                            </div>
            </form>
        </div>
        <br/><br/>
          
        </body>
    );
  }
}

export default Parksons
