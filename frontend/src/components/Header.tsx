import { useState } from 'react';
import Logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import AddMenuModal from './AddMenuModal';

const Header = () => {

    const [isNavOpen , setIsNavOpen] = useState<boolean>(false)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    
    const handleAddModal = () => {
        setIsOpenModal(prev=>!prev)
    }

    return (
      
        <>
         <div className='bg-[#121618] '>
            
            <div className="container max-w-[1200px] max-h-[60px] md:max-h-[100px] mx-auto text-white flex justify-between items-center md:items-baseline pb-1 px-2">
                <div className='relative top-[35px] md:top-[50px] left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0'>
                     <div className='flex gap-1 '>
                    <img  className='w-[80px]  md:w-[90px] h-fit ' src={Logo} alt="" />
                    <div className='text-3xl mt-2 hidden md:block' >
                        <div className='flex gap-1  '>
                            <h1 className='text-[#0796EF]'>DEEP</h1>
                            <h1>NET</h1>
                        </div>
                        <div>
                            <h1 className='text-[#857878]'>SOFT</h1>
                        </div>
                    </div>
                  </div>
                </div>
                
                {
                    !isNavOpen ? ( 
                          <button className='block md:hidden text-neutral-500 p-2' onClick={()=>setIsNavOpen(prev=>!prev)} >
                            <FaBars size={28} />
                          </button>
                    ) : (
                         <div className='mobNav md:hidden '>
                             <button className='block md:hidden absolute top-2 right-2 text-neutral-500 p-2' onClick={()=>setIsNavOpen(prev=>!prev)} >
                                <IoCloseOutline size={40} />
                             </button>
                             <p>HOME</p>
                             <p>MENU</p>
                             <p onClick={handleAddModal}>ADD MENU</p>
                             <p>CONTACT US</p>
                         </div>
                    )
                }
                 <div className='hidden md:flex text-base tracking-widest gap-[33px] justify-center items-center; '>
            
                     <p>HOME</p>
                     <p>MENU</p>
                     <p onClick={handleAddModal}>ADD MENU</p>
                    <p>CONTACT US</p>
                </div>
                
              
        </div>
            </div>
            
            {
                isOpenModal && (<AddMenuModal close={()=>setIsOpenModal(prev=>!prev)} />)
            }
        
        </>
  )
}

export default Header
