import { FC } from "react";
import { CardItemProps } from "./interfaces";
import { RiMusic2Fill } from "react-icons/ri";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const CardItem: FC<CardItemProps> = ({
  dataTestId = "card-item",
  images,
  id,
  altTitle,
  heading,
  subheading = "",
  imageRounded = false,
  type,
}) => {
  const thumbnailRef = useRef<HTMLImageElement>();

  return (
    <div data-testid={dataTestId}>
      <Link href={`/${type}/${id}`} passHref legacyBehavior>
        <div className="transition duration-300 p-4 rounded cursor-pointer hover:bg-[#FFD24F] bg-[#504641]">
          {images?.length > 0 ? (
            <Image
              src={images[0].url}
              alt={altTitle}
              ref={thumbnailRef}
              width={200}
              height={200}
              className={`object-cover w-full h-36  ${
                imageRounded ? "rounded-full" : "rounded"
              }`}
            />
          ) : (
            <div className="w-full h-40">
              <RiMusic2Fill className="w-full h-full bg-paper " />
            </div>
          )}
          <h3 className="mt-5 font-bold truncate">{heading}</h3>
          {subheading && (
            <h6 className="text-sm truncate text-gray">{subheading}</h6>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
