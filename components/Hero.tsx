import rightarrow from "../public/assets/images/rightarrow.svg";
import Image from "next/image";
import LogoCloud from "@/components/LogoCloud";
export default function Hero() {
  return (
    <>
      <div className="relative max-h-screen">
        {/* Hero Content */}
        <div className="justify-center items-center text-center  py-6 bg-white  ">
          <div className="inline-flex px-4 text-xs font-poppins rounded-xl text-[#582066] ">
            Seamliess Experience
          </div>
          <h2 className="flex flex-col items-center mb-5 text-black font-manrope font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
            <span className="flex p-4 line-clamp-1">Unleashing the Next</span>
            <span className="flex p-2">Generation of Card</span>
            <span className="flex p-2 ">Solutions</span>
          </h2>
          <h2 className="mx-auto text-md font-medium leading-relaxed text-gray-600 lg:w-3/4 xl:w-2/5 ">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </h2>
          <div className="flex flex-col text-center justify-center items-center py-10">
            <a
              href="#"
              className="flex items-center justify-center rounded-xl border border-orangered-100 bg-[#582066] px-4 py-3 font-semibold leading-6 shadow-lg transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 focus-ring focus:ring-orangered-100 focus:ring-opacity-50 active:border-orangered-100 active:bg-orangered-100 active:ring "
            >
              <span className="inline-block text-white">
                Unlock Your Card
                <Image
                  src={rightarrow}
                  alt=""
                  className="inline-block mx-2 text-white"
                />
              </span>
            </a>
            <span className="flex text-sm text-gray-500 my-2 p-1 space-x-0">
              no credit required
            </span>
          </div>
        </div>
        <LogoCloud />
      </div>
    </>
  );
}
