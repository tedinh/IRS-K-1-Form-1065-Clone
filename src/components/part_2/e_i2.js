import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

class Left extends Component {
    render(){
        return(
            <div className="left-column">
                <div className="left-column2">
                <div className="section1">
                    <p className="section1-p">Partner's identifying number</p>
                    <input className="section1-input" type="text"/>

                    <p className="section1-p">Partner's name, address, city, state, and Zip code</p>
                    <textarea className="section1-textarea" />
                </div>

                <div className="section2">
                    <input type="radio" /> <span>General partner or LLC member-manager</span>
                <br/>
                    <input type="radio" /> <span>Limited partner or other LLC member</span>
                </div>

                <br/>   

                <div className="section3">
                    <input type="radio" /> <span>Domestic partner</span>
                <br/>
                    <input type="radio" /> <span>Foreign Partner</span>
                </div>

                <div className="section4">
                    <p>What type of entity is this partner?</p>
                    <input className="section4-input" type="text"/>
                </div>

                <div className="section5">
                    <input type="checkbox"/><span> If this partner is a retirement plan (IRA/SEP/Keogh/etc.), check here</span>
                </div>
                  
                </div>
                
                <div className="part2-buttons">
                <Link to='/'>
                    <div className="left-button">
                        <h4 className="previous">PREVIOUS PART</h4>
                    </div>
                </Link>
                <Link to="/part3">
                    <div className="right-button">
                        <h4 className="next">NEXT PART</h4>
                    </div>
                </Link>
                </div>
            </div>
        )
    }
}

export default Left