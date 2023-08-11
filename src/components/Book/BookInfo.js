import React, { Fragment } from 'react';

const BookInfo = ({info}) => {

  console.log(info.title);
  return (
    <Fragment>

  <h2>Book Details</h2>
{
  Object.keys(info).length>0?
<div>
<div>
<p className='fw-bold'>{info.userName}</p>
<p className='fw-bold'>Title:{info.title}</p>
<p className='fw-light'>Dedsription:{info.discri}</p>
<p className='fst-italic'>Price:{info.price}</p>
</div>  

</div>:
<div className='alert alert-secondary' role='alert' >
There is no book selected yet. Please select!
</div>




}






      
    </Fragment>
  );
};

export default BookInfo;
