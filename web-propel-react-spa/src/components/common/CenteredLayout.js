import React from 'react';

function CenteredLayout({children}) {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
           <div className='row'>
               {children}
           </div>
        </div>
    );
}

export default CenteredLayout;