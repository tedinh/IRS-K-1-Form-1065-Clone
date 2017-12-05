import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

class Left extends Component {
    render(){
        return(
            <div className="left">

            <table class="table table-bordered">
            <tbody>
              <tr>
                <td>1</td>
                <td>Ordinary Business Income (loss)
                <br/>
                <input className="left-input" type="text" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Net rental real estate income (loss)
                <br/>
                <input className="left-input" type="text" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Net rental real estate income (loss)
                <br/>
                <input className="left-input" type="text" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Net rental real estate income (loss)
                <br/>
                <input className="left-input" type="text" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Net rental real estate income (loss)
                <br/>
                <input className="left-input" type="text" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Net rental real estate income (loss)
                <br/>
                <input className="left-input" type="text" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Net rental real estate income (loss)
                <br/>
                <input className="left-input" type="text" />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="part2-buttons part3">
                <Link to='/part2'>
                    <div className="left-button">
                        <h4 className="previous">PREVIOUS PART</h4>
                    </div>
                </Link>
                    <div className="right-button" disabled>
                        <h4 className="next">NEXT PART</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default Left