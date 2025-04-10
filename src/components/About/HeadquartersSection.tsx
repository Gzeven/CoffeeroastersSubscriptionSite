import Image from "next/image";

type Location = {
  name: string;
  icon: string;
  address: string[];
  iconWidth: number;
  iconHeight: number;
};

const LOCATIONS = [
  {
    name: "United Kingdom",
    icon: "/images/about/desktop/illustration-uk.svg",
    address: ["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"],
    iconWidth: 42,
    iconHeight: 50,
  },
  {
    name: "Canada",
    icon: "/images/about/desktop/illustration-canada.svg",
    address: [
      "1528 Eglinton Avenue",
      "Toronto",
      "Ontario M4P 1A6",
      "+1 416 485 2997",
    ],
    iconWidth: 52,
    iconHeight: 50,
  },
  {
    name: "Australia",
    icon: "/images/about/desktop/illustration-australia.svg",
    address: ["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"],
    iconWidth: 49,
    iconHeight: 44,
  },
];

function LocationCard({
  icon,
  name,
  address,
  iconWidth,
  iconHeight,
}: Location) {
  return (
    <div className="flex flex-col items-center md:items-start md:w-1/3">
      <div className="pb-[48px]">
        <Image
          src={icon}
          alt={`map of ${name}`}
          width={iconWidth}
          height={iconHeight}
          style={{ objectFit: "contain" }}
          loading="lazy"
        />
      </div>
      <h3 className="text-[28px] md:text-2xl xl:text-[32px] font-heading text-dark-grey-blue pb-6">
        {name}
      </h3>
      <p className="text-base text-dark-grey-blue">
        {address.map((line: string, i: number) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

export default function HeadquartersSection() {
  return (
    <section className="margin-item pb-[120px] md:pb-[144px]  text-center md:text-left xl:max-w-[1048px] xl:mx-auto ">
      <h2 className="text-2xl font-heading text-grey mb-[72px]">
        Our headquarters
      </h2>

      {/* Container for locations */}
      <div className="flex flex-col md:flex-row gap-20 md:gap-8 justify-center items-center">
        {LOCATIONS.map((location) => (
          <LocationCard key={location.name} {...location} />
        ))}
      </div>
    </section>
  );
}
