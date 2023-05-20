import React from 'react'
import { useState } from 'react'
import './Account.css'

export const Account = () => {
    // Set show to false
    let [show, setShow] = useState(false);

    const handleShow = ()=>{
        // Set state to switch show to true
       setShow(!show);
    }

  return (
    <div className='table'>
        <table>
            <tbody>
                <tr>
                    <th>Account</th>
                    <th>Information</th>
                </tr>

                <tr>
                    <td>Balance</td>
                    <td>$100,000</td>
                </tr>

                <tr>
                    <td>Interest</td>
                    <td>%5.0</td>
                </tr>

                <tr>
                    <td>Account Number</td>
                    {/* Inside ternary use ternary to toggle between element/null */}
                    <td>{show ? <span>11-1234</span> : null}</td>
                    {/* Pass handleBtn function. Use ternary to toggle hide/show. */}
                    <td><button onClick={()=>{handleShow()}}>{show ? "Hide" : "Show"}</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
