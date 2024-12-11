// import { MdOutlineEmail } from "react-icons/md";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import  Logo from '../assets/Logo.png'

const AboutBanner = () => {


  return (
    <div className="bg-black">
      <div className="container max-w-[1200px] mx-auto text-white py-[80px]">
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-6 items-center tracking-widest">
          
          <div className="border text-neutral-600 border-blue-400 rounded-lg p-5 max-w-[300px] w-full flex flex-col justify-center items-center gap-1">
          <h2 className="text-[#0796EF] font-medium text-lg ">Connect With Us</h2>
          <div className="flex gap-2 items-center mt-2">
              {/* <BsFillTelephoneFill /> */}
              <p>+91 96473524253</p>
          </div>
          <div className="flex gap-2 items-center">
              {/* <MdOutlineEmail /> */}
              <p>info@deepNetSoft.com</p>
          </div>
          </div>
          
          <div className=" relative border border-blue-400 rounded-lg p-5  max-w-[300px] w-full ">
            <div className="absolute top-0 left-[50%]  translate-y-[-50%] translate-x-[-50%] bg-black ">
              <img src={Logo} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col mt-10 gap-3">
              <div className="flex gap-3 text-2xl font-light tracking-widest	">
                <h1 className="text-[#0796EF]">DEEP</h1>
                <h1>NET</h1>
                <h1 className="text-[#857878]">SOFT</h1>
              </div>
             <div className="">
              <div className="flex gap-3 text-[14px] text-neutral-600">
                <FaFacebookF />
                <FaInstagram />
                <FaWhatsapp/>
                <FaTwitter/>
               </div>
             </div>
           </div>
          </div>

          <div className="border text-neutral-600 border-blue-400 rounded-lg p-5 max-w-[300px] w-full flex flex-col justify-center items-center gap-1">
            <h1 className="text-[#0796EF] font-medium text-lg ">FIND US</h1>
            <div className="flex gap-2 justify-center ">
              <IoLocationSharp size={30} />
                <p>First Floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
            </div>
          </div>
          

         </div>
      </div>
    </div>
  )
}

export default AboutBanner
