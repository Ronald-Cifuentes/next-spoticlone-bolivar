import { FC } from "react";
import { AdditionalControllersProps } from "./interfaces";
import { MdOutlineMicExternalOn, MdQueueMusic } from "react-icons/md";
import { RiVolumeUpLine } from "react-icons/ri";

const AdditionalControllers: FC<AdditionalControllersProps> = ({
  dataTestId = "additional-controllers",
}) => {
  return (
    <div
      data-testid={dataTestId}
      className="flex items-center col-span-2 gap-3"
    >
      <MdOutlineMicExternalOn className="text-gray" />
      <MdQueueMusic className="text-gray" />
      <RiVolumeUpLine className="text-gray" />

      <div className="w-20 mt-3">
        <div className="relative w-full pt-1 ">
          <div className="flex h-1 mb-4  overflow-hidden text-xs bg-[#535353] rounded">
            <div className="flex flex-col justify-center w-1/3 text-center text-white shadow-none bg-gray whitespace-nowrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalControllers;
