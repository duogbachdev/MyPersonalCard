import logoImg from "../src/assets/img/logonek.jpg";
import gifNek from "../src/assets/img/gifnek.gif";
import fb from "../src/assets/img/fb.gif";
import ins from "../src/assets/img/ins.gif";
import note from "../src/assets/img/note.gif";
import phone from "../src/assets/img/phone.gif";
import pin from "../src/assets/img/pin.gif";
import { AiFillHeart } from "react-icons/ai";
function App() {
  return (
    <div className="bg-bgnek py-10 md:h-screen relative font-iawriter">
      {/* Hiệu ứng mờ cho hình ảnh nền */}
      <div className="absolute inset-0 backdrop-blur-lg opacity-80"></div>

      <div className="container mx-auto relative">
        <div className="flex justify-center">
          <img className="rounded-full w-[100px]" src={logoImg} alt="" />
        </div>
        <p className="text-center font-semibold mt-5 text-[#47d353] leading-5 text-3xl">Trang Tone</p>
        <p className="text-center mt-12 px-5 md:px-0 font-semibold md:leading-5 text-xl">
          Mình là Trang Tone, đây là bio của mình nek (≧∇≦)ﾉ
        </p>

        <>
          <div className="flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex rounded-full text-white py-2 w-[300px] md:w-[700px] lg:w-[1000px] bg-gradient-to-r from-[#43e97b] to-[#d4fc79] items-center px-5 gap-10 md:gap-52 xl:gap-96 mt-8">
              <img className="w-[25%] md:w-[5%]" src={gifNek} alt="" />
              <p className="text-center font-semibold text-xl">Website</p>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex rounded-full text-white py-2 w-[300px] md:w-[700px] lg:w-[1000px] bg-gradient-to-r from-[#43e97b] to-[#d4fc79] items-center px-5 gap-10 md:gap-52 xl:gap-96 mt-8">
              <img className="w-[25%] md:w-[5%]" src={note} alt="" />
              <p className="text-center font-semibold text-xl">Documents</p>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex rounded-full text-white py-2 w-[300px] md:w-[700px] lg:w-[1000px] bg-gradient-to-r from-[#43e97b] to-[#d4fc79] items-center px-5 gap-10 md:gap-52 xl:gap-96 mt-8">
              <img className="w-[25%] md:w-[5%]" src={phone} alt="" />
              <p className="text-center font-semibold text-xl">Phone</p>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex rounded-full text-white py-2 w-[300px] md:w-[700px] lg:w-[1000px] bg-gradient-to-r from-[#43e97b] to-[#d4fc79] items-center px-5 gap-10 md:gap-52 xl:gap-96 mt-8">
              <img className="w-[25%] md:w-[5%]" src={ins} alt="" />
              <p className="text-center font-semibold text-xl">Instagram</p>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex rounded-full text-white py-2 w-[300px] md:w-[700px] lg:w-[1000px] bg-gradient-to-r from-[#43e97b] to-[#d4fc79] items-center px-5 gap-10 md:gap-52 xl:gap-96 mt-8">
              <img className="w-[25%] md:w-[5%]" src={fb} alt="" />
              <p className="text-center font-semibold text-xl">
                <a href="http://duogbachdev.me">Facebook</a>
              </p>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex rounded-full text-white py-2 w-[300px] md:w-[700px] lg:w-[1000px] bg-gradient-to-r from-[#43e97b] to-[#d4fc79] items-center px-5 gap-10 md:gap-52 xl:gap-96 mt-8">
              <img className="w-[25%] md:w-[5%]" src={pin} alt="" />
              <p className="hidden md:block text-center font-semibold text-xl">
                Pinterest &#40;tổng hợp meme, ảnh...&#41;
              </p>
              <p className="md:hidden text-center font-semibold text-xl">Pinterest</p>
            </div>
          </div>
        </>

        <p className="text-center mt-10 font-semibold leading-5 ">
          &copy;Copyright 2023 <br />{" "}
          <a
            className="flex text-[#e0ad20] hover:text-black justify-center items-end gap-3"
            href="http://facebook.com/duogbachdev"
          >
            Duog Bach{" "}
            <span className="text-red-500">
              <AiFillHeart />
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
