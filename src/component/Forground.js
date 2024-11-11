import React, { useRef } from 'react'
import Caed from './Caed'

 
function Forground() {

  const ref = useRef(null);
    const data = [
        {
            desc: "hy ky name is arnav and how are you ",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Downloa Now", tagColor:"green"},
        },
          {
            desc: "hy ky name is arnav and how are you ",
            filesize: ".10mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Downloa Now", tagColor:"green"},
        },
            {
            desc: "hy ky name is arnav and how are you ",
            filesize: ".9mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Downloa Now", tagColor:"green"},
        },
    ];
    return (
      <><div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
            {data.map((item, index) => (
                <Caed data={ item} reference={ref} />
        ))};
      </div>
          
          </>
  )
}

export default Forground ;