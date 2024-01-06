import Link from "next/link";

const cardData = [
  {
    id: 1,
    heading: "2 Million",
    subheading: "Customers",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 2,
    heading: "1K",
    subheading: "Downloads",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 3,
    heading: "$73 Million",
    subheading: "Transaction",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    id: 4,
    heading: "2.0",
    subheading: "Latest Version",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="my-24 mx-20 grid lg:grid-cols-4 md:grid-cols-1 gap-4 items-start p-4">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="justify-center items-center p-4 px-4 "
            >
              <Link href={`/${card.id}`}>
                <h2 className="font-para-medium-regular text-5xl text-center text-pri-purple-400">
                  {card.heading}
                </h2>
                <h5 className="text-center text-black font-semibold py-2">
                  {card.subheading}
                </h5>
                <p className="text-center text-sm py-1">{card.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
