import Image from "next/image";
import rightarrow from "../../public/assets/images/rightarrow.svg";
import mobile from "../../public/assets/images/mobile.svg";
import featurespending from "../../public/assets/images/featurespending.svg";

export default function Home() {
  return (
    <>
      {/* About Section: Company with Values */}
      <div className="bg-white min-h-screen mx-20">
        <div className="items-center justify-center px-4 lg:px-8 lg:py-20 ">
          {/* Heading */}
          <div className="flex flex-col text-center items-center">
            <div className="flex text-5xl font-semibold  md:w-3/5">
              Elevating Card Programs with Cutting-Edge Technology
            </div>
            <h3 className="flex mx-auto my-4 text-lg font-para-medium-regular text-center w-2/3  text-neutral-400 lg:w-3/4 xl:w-2/5 ">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </h3>
          </div>
          {/* END Heading */}

          {/* Button */}
          <div className="flex flex-col text-center justify-center items-center py-10">
            <a
              href="#"
              className="flex items-center justify-center rounded-xl px-4 py-3 font-semibold leading-6  "
            >
              <span className="inline-block text-[#582066]">
                Compare all Pro Feautres
                <Image
                  src={rightarrow}
                  alt=""
                  className="inline-block mx-2 fill-[#582066]"
                />
              </span>
            </a>
          </div>
          {/* Button*/}
        </div>
        <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 space-between mb-24">
          <div className="bg-[#FAF9FF] ml-8">
            <Image src={mobile} alt="mobile" className="" />
          </div>
          <div className="bg-[#FAF9FF] mr-8">
            <Image src={featurespending} alt="mobile" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
