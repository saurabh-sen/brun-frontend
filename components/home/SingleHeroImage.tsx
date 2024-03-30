import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface ISingleHeroImage {
  heading: string;
  image: string | StaticImageData;
  route: string;
};

const SingleHeroImage: NextPage<ISingleHeroImage> = ({ heading, image, route }) => {
  return (
    <section className="singleheroimage">
      <p className="mb-12 text-3xl font-normal font-urbanist ">{heading}</p>
      <Image
        className="h-[720px] flex-1 !relative max-w-full overflow-hidden object-cover mb-12"
        loading="eager"
        alt=""
        src={image}
        fill
      />
    </section>
  );
};

export default SingleHeroImage;
