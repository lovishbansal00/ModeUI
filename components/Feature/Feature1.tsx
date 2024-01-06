import rightarrow from "../../public/assets/images/rightarrow.svg";
import Image from "next/image";
import globe from "../../public/assets/images/globe.svg";
import key from "../../public/assets/images/key.svg";
import lock from "../../public/assets/images/lock.svg";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "Globally Accepted",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: globe,
  },
  {
    id: 2,

    title: "Biometric Integrated",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: key,
  },
  {
    id: 3,
    title: "Fully Secured",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    icon: lock,
  },
];

export default function Home() {
  return (
    <>
      {/* About Section: Company with Values */}
      <div className="bg-white min-h-screen mx-20">
        <div className="items-center justify-center px-4 lg:px-8 lg:py-32 ">
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

          {/* Values */}

          <div className="grid sm:grid-rows-1 lg:grid-rows-1 gap-8 px-4 justify-center items-center md:grid-cols-3 lg:gap-16">
            {cardData.map((cardS) => (
              <div key={cardS.id} className="flex flex-col items-center">
                <Link href={`/${cardS.id}`}>
                  <div className="flex justify-center">
                    <Image src={cardS.icon} alt="" className="flex " />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="flex my-4 text-base font-medium text-neutral-50 text-para-medium-regular leading-5">
                      {cardS.title}
                    </h3>
                  </div>
                  <div className="flex text-center">
                    <p className="flex leading-relaxed text-gray-700 ">
                      {cardS.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* END Values */}
        </div>
      </div>
    </>
  );
}
