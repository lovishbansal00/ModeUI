import Image from "next/image";
import logo from "../public/assets/images/Logo.svg";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-20 mb-10">
        <div className="flex flex-col items-center justify-center mb-16">
          <Image src={logo} alt={logo} className="" />
          <div className="mt-4 w-3/5">
            <p className="text-center text-base font-para-medium-regular text-neutral-400  ">
              Mode UI is a comprehensive design system that empowers designers
              and developers to create cohesive and visually stunning user
              interfaces across various platforms and devices
            </p>
          </div>
        </div>
        <div className="">
          <div className="mt-8 grid gap-8 grid-cols-5 ">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Contact us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Features{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Product</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Figma design system{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Ios kit{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Android kit{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Wireframe{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Resources</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Templates{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Landing pages{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Documentation{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Comp library{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy policy{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Terms & conditions{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Disclaimer{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Affiliate programme{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Support</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Help centre{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Raise ticket{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Report{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Refund{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8">
          <div className="flex flex-col items-center sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              © 2023 Mode UI Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
