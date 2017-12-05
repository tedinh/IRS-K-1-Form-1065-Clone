import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <div className="header-box">
                <div className="left-box">
                    <h1 className="header-title">Schedule K-1</h1>
                    <span>(Form 1065)</span>
                </div>

                <div className="middle-box">
                    <h1 className="header-title">Partner's Share of Income, Deductions, Credits, etc.</h1>
                    <span>Part I: Information About the Partnership</span>
                </div>

                <div>
                    <h1 className="right-box">2016</h1>
                </div>
            </div>
        )
    }
}

export default Header