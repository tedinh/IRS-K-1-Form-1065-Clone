import React, { Component } from 'react';

class Right extends Component {
    render(){
        return(
            <div className="right-column">

            <div className="first-half">
                <p>Partner's share of profit, loss, and capital</p>


                <div className="container table-container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Beginning</th>
                        <th>Ending</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Profit</td>
                        <td><input className="table-input" type="text" /> %</td>
                        <td><input className="table-input" type="text" /> %</td>
                    </tr>
                    <tr>
                        <td>Loss</td>
                        <td><input className="table-input" type="text" /> %</td>
                        <td><input className="table-input" type="text" /> %</td>
                    </tr>
                    <tr>
                        <td>Capital</td>
                        <td><input className="table-input" type="text" /> %</td>
                        <td><input className="table-input" type="text" /> %</td>
                    </tr>
                    </tbody>
                </table>
                </div>

            <div className="container table-container2">
                <table className="table table-striped">
                <tr>
                <td>Partner's share of liabilities at year end: Nonrecourse</td>
                <td className="table-input2">$ <input className="table-input" /></td>
                </tr>
                <tr>
                <td>Qualified nonrecourse financing</td>
                <td className="table-input2">$ <input className="table-input" /></td>
                </tr>
                <tr>
                <td>Recourse</td>
                <td className="table-input2">$ <input className="table-input" /></td>
                </tr>
                </table>
            </div>
                                

            </div>
            
            <div className="second-half">

            <div className="container table-container2">
                <table className="table table-striped">
                <tr>
                <td>Partner's capital account analysis: Beginning capital account</td>
                <td className="table-input3">$ <input className="table-input" /></td>
                </tr>
                <tr>
                <td>Capital contributed during the year</td>
                <td className="table-input3">$ <input className="table-input" /></td>
                </tr>
                <tr>
                <td>Current year increase (decrease)</td>
                <td className="table-input3">$ <input className="table-input" /></td>
                </tr>
                <tr>
                <td>withdrawals & distributions</td>
                <td className="table-input3">$ <input className="table-input" /></td>
                </tr>
                <tr>
                <td>Ending capital account</td>
                <td className="table-input3">$ <input className="table-input" /></td>
                </tr>
                </table>
            </div>

                <div className="part2-checkboxes">
                    <div><input type="checkbox"/><span className="part2-input">Tax basis</span></div>
                    <div><input type="checkbox"/><span className="part2-input">GAAP</span></div>
                    <div><input type="checkbox"/><span className="part2-input">Section 704(b) book</span></div>
                    <div><input type="checkbox"/><span className="part2-input">Other</span></div>
                </div>

                <div className="part2-last-question">
                    <span>Did the partner contribute property with a built-in gain or loss?</span>
                    <div className="yes-no-checkboxes">
                        <input type="checkbox"/> Yes
                        <input type="checkbox"/> No
                    </div>
                </div>

            </div>

            </div>
        )
    }
}

export default Right