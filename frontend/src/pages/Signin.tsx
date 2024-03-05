import Auth from '@/components/Auth';
import Quote from '@/components/quote';
import React from 'react';

const Signin = () => {
    return (
        <div className='grid lg:grid-cols-2 '>
            <div>
            <Auth type={"signin"}/> 
            </div>
            <div className="invisible lg:visible">
            <Quote />        
            </div>
        </div>
    )
}

export default Signin;