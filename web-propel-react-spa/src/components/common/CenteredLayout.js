import React from 'react';

function CenteredLayout({children}) {
    return (
        <div className='w-100 vh-100 d-flex align-items-center justify-content-center'>
           <div>{children}</div>
        </div>
    );
}

export default CenteredLayout;