import React from 'react';
import '../index.css'

const Notification = ({message}) => {

    if (message === '') {
        return null
      }
      if(message.includes('ERROR')) {

        return(
            <div>
                <h2 className='error'>{message}</h2>
            </div>
        )

      }else{
        return(
            <div>
                <h2 className='messageStyle'>{message}</h2>
            </div>
        )
      }
}

export default Notification