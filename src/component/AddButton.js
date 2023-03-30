import React from 'react';
import './css/addButton.css'
function AddButton() {
    return ( 
        <>
        <div className='d-flex justify-content-center bg-light'>
            <div className='bg-light button_div d-flex justify-content-center'>
                <button className='btn btn-success addition'>
                        +
                </button>
            </div>
        </div>
        </>
     );
}


export default AddButton;