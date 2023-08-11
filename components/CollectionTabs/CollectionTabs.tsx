import { FC } from "react";
import { CollectionTabsProps } from "./interfaces";
import Link from "next/link";
import { useRouter } from "next/router";

const collectionTabs = ["playlists", "artists", "albums"];

const CollectionTabs: FC<CollectionTabsProps> = ({
  dataTestId = "collection-tabs",
}) => {
  const router = useRouter();
  return (
    <div
      data-testid={dataTestId}
      className="flex items-center gap-8 bg-transparent"
    >
      {collectionTabs.map((tab) => (
        <Link href={`/collection/${tab}`} key={tab}>
          <span
            className={`${
              router.pathname === `/collection/${tab}`
                ? "bg-[#323233]"
                : "bg-transparent"
            } text-white rounded capitalize text-sm font-bold px-6 py-3`}
          >
            {tab}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CollectionTabs;
