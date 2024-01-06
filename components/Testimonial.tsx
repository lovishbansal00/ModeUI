import Image from "next/image";
import wise from "../public/assets/images/socials/Wise.svg";
import picture from "../public/assets/images/picture.svg";
import ratingStar from "../public/assets/images/ratingStar.svg";

export default function Testimonial() {
  return (
    <>
      <div className="justify-center">
        <div className="my-24 mx-20 p-8 flex flex-col justify-center items-center">
          <Image alt="wise" src={wise} className="mb-8" />
          <p className="text-center mb-12 text-neutral-100 font-Manrope text-3xl font-medium w-3/5">
            I had the pleasure of experiencing the next generation of card
            solutions with this incredible product. It's refreshing to see such
            innovation in the financial industry.
          </p>
          <div className="flex flex-col jutify-center items-center">
            <Image src={picture} alt="person" className="mx-9 mb-4" />
            <h2 className="font-para-medium-regular text-neutral-50 text-base font-medium">
              Nich Babich
            </h2>
            <h2 className="text-sm text-neutral-400 font-para-medium-regular mb-3">
              Lead Designer
            </h2>
            <div className="rating px-2 flex flex-row gap-3">
              <Image src={ratingStar} alt="star" />
              <Image src={ratingStar} alt="star" />
              <Image src={ratingStar} alt="star" />
              <Image src={ratingStar} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
