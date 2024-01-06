import Image from "next/image";
import Nuxt from "../public/assets/images/socials/Nuxt.svg";
import Miro from "../public/assets/images/socials/Miro.svg";
import Lotties from "../public/assets/images/socials/Lotties.svg";
import Wise from "../public/assets/images/socials/Wise.svg";
import Dribble from "../public/assets/images/socials/Dribble.svg";
import Kinsta from "../public/assets/images/socials/Kinsta.svg";
import AngelList from "../public/assets/images/socials/AngelList.svg";
import Behance from "../public/assets/images/socials/Behance.svg";

export default function logocloud() {
  return (
    <>
      <div className="w-full justify-center items-center">
        <div className="grid lg:grid-cols-8 sm:grid-cols-4 pb-5 mx-24 gap-6 my-4">
          <Image src={Nuxt} alt="nuxt" className="" />
          <Image src={Miro} alt="miro" className="" />
          <Image src={Lotties} alt="lottiefiles" className="" />
          <Image src={Wise} alt="wise" className="" />
          <Image src={Dribble} alt="dribble" className="" />
          <Image src={Kinsta} alt="kinsta" className="" />
          <Image src={AngelList} alt="angellist" className="" />
          <Image src={Behance} alt="behance" className="" />
        </div>
      </div>
    </>
  );
}
