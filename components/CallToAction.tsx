import card from "../public/assets/images/card.svg";
import Image from "next/image";
import headphone from "../public/assets/images/headphone.svg";

export default function CallToAction() {
  return (
    <>
      <div className="jusitfy-center">
        <div className="mx-20 my-24 flex flex-col items-center justify-center">
          <div className=" px-8 w-3/5">
            <p className="font-Manrope from-neutral-50 text-4xl text-center font-semibold">
              Unlock Limitless Possibilities with Our New Card Solutions
            </p>
            <div className="flex buttons mt-8 items-center justify-center gap-2">
              <a
                href="#"
                className="flex items-center justify-center rounded-xl border border-orangered-100 bg-[#582066] px-3 py-2 font-semibold leading-6 shadow-lg transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 focus-ring focus:ring-orangered-100 focus:ring-opacity-50 active:border-orangered-100 active:bg-orangered-100 active:ring "
              >
                <span className="inline-block text-white">
                  Unlock Your Card
                  <Image
                    src={card}
                    alt="card"
                    className="inline-block mx-2 text-white"
                  />
                </span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-xl border border-orangered-100 bg-neutral-1200 px-3 py-2 font-semibold leading-6 shadow-lg transition ease-in-out hover:-translate-y-1 delay-10 hover:scale-110 focus-ring focus:ring-orangered-100 focus:ring-opacity-50 active:border-orangered-100 active:bg-orangered-100 active:ring "
              >
                <span className="inline-block text-neutral-400">
                  Customer Support
                  <Image
                    src={headphone}
                    alt="card"
                    className="inline-block mx-2  size-5"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
