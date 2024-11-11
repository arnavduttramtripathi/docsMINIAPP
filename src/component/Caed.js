import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from 'framer-motion';


function Caed({data, reference}) {
  return (
      <motion.div  drag dragConstraints={ reference} whileDrag={{scale: 1.2}} dragElastic={0.1} dragTransition={{bounceStiffness: 200, bounceDamping: 10}} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden px-8 py-10 text-white'>
          <FaRegFileAlt />
          <p className='text-sm leading-tight-rignt mt-5 font-sembold'>
              { data.desc}</p>

          <div className='fotter absolute bottom-0  w-full  px-8 left-0'>
              <div className='flex items-center justify-between mb-3 py-3'>
                  <h5> 
                      {data.filesize}
                  </h5>
                  <span className='w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center'>
                 {data.close ? <IoCloseSharp/> :<LuDownload size='.7em' color='#fff' /> }
                         
                  </span>
                  
              </div>
              {data.tag.isOpen && (
                  <div className='tag  w-full py-4 bg-green-500 flex items-center justify-center '>
                      <h3 className='text-sm font-semibold'>
                         {data.tag.tagTitle}
                      </h3>
                  </div>
              )}
          </div>
    </motion.div>
  );
}

export default Caed