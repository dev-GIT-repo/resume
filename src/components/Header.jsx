import React from 'react'
import '../App.css'

const Header = ({ title, personaldetails }) => {
    return (
        <div>
            <div className='text-center'>
                <h3><u>{title}</u></h3>
            </div>
            <div className='row'>
                {console.log(personaldetails)}
                <div className='col-8'>
                    <p><b>{personaldetails.name}</b></p>
                    <p><span className="bi bi-telephone"> {personaldetails.contact.mobile}</span> | <span className="bi bi-envelope-at"> {personaldetails.contact.email}</span></p>
                    <p><span className="bi bi-whatsapp"> {personaldetails.contact.whatsapp}</span></p>
                </div>
                <div className='col-2'>
                    <img src={personaldetails.img} className='align-self-center rounded-2 shadow' style={{ 'width': 7 + 'em', 'height': 7 + 'em' }}></img>
                </div>
            </div>
        </div>
    )
}

export default Header