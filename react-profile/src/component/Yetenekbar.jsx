import React from 'react'
import "../css/yetenekbar.css"
import { Progress } from '@chakra-ui/react'


function Yetenekbar({children,_value}) {
  return (
    
    <div className='barmain'>
      <div className='yetenek'>
        {children ==null ? (<div>
            {(() => {
            _value=61;
            return "Test";
          })()}
        </div>

        ) : children}
      </div>
      <Progress colorScheme='purple' borderRadius={65} borderStyle={'solid'} borderWidth={2} blockSize={'4'}  padding={"1%"} border borderColor={'purple.500'}  value={_value}></Progress>
    </div>
    
  )
}

export default Yetenekbar
