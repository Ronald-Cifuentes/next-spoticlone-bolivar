import { FC } from "react";
import { SidebarProps } from "./interfaces";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdList } from "react-icons/io";
import { useSpotify } from "../../Redux/Spotify/hook";

const activeLink = "bg-[#282828] text-white";
const inactiveLink = "bg-transparent text-gray";

const Sidebar: FC<SidebarProps> = ({ dataTestId = "sidebar" }) => {
  const router = useRouter();

  const { playlists, fetchPlaylists } = useSpotify();

  useEffect(() => {
    fetchPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (router.pathname === "/login") {
    return null;
  }

  return (
    <aside
      data-testid={dataTestId}
      className="fixed top-0 left-0 w-64 h-full bg-[#fff]"
    >
      <div className="flex flex-col items-center h-full m-5 mt-5">
        <Image
          src="/images/logo-cbolivar.jpeg"
          width={125}
          height={50}
          style={{ objectFit: "contain" }}
          alt="Spotify logo"
        />

        <ul className="w-full mt-4">
          <Link href="/" passHref>
            <li
              className={`${
                router.pathname === "/" ? activeLink : inactiveLink
              } flex text-sm items-center gap-3 p-2 rounded ${
                router.pathname !== "/" && "hover:text-[#000]"
              }`}
            >
              {router.pathname === "/" ? (
                <RiHome5Fill className="text-2xl" />
              ) : (
                <RiHome5Line className="text-2xl" />
              )}
              <span className="font-bold">Home</span>
            </li>
          </Link>

          <Link href="/search" passHref>
            <li
              className={`${
                router.pathname === "/search" ? activeLink : inactiveLink
              } flex items-center gap-3 p-2 text-sm rounded cursor-pointer  ${
                router.pathname !== "/search" && "hover:text-[#000]"
              }`}
            >
              <IoSearchOutline className="text-2xl" />

              <span className="font-bold">Search</span>
            </li>
          </Link>

          <Link href="/collection/playlists" passHref>
            <li
              className={`${
                router.pathname.includes("/collection") &&
                !router.pathname.includes("tracks")
                  ? activeLink
                  : inactiveLink
              } flex items-center gap-3 p-2 text-sm rounded cursor-pointer  ${
                !router.pathname.includes("/collection") &&
                !router.pathname.includes("tracks") &&
                "hover:text-[#000]"
              }`}
            >
              <IoMdList className="text-2xl" />
              <span className="font-bold">Your Library</span>
            </li>
          </Link>

          <Link href="/collection/tracks" passHref>
            <li
              className={`${
                router.pathname === "/collection/tracks"
                  ? "text-[#000]"
                  : "text-gray"
              } flex items-center mt-6 gap-3 p-2 text-sm rounded cursor-pointer  ${
                router.pathname !== "/collection/tracks" && "hover:text-[#000]"
              }`}
            >
              <Image
                src="/images/liked_cover.jpeg"
                height={28}
                width={28}
                style={{ objectFit: "contain" }}
                alt="Liked playlist cover"
              />
              <span className="font-bold">Liked songs</span>
            </li>
          </Link>
        </ul>

        <div className="w-full h-px mt-4 bg-gray"></div>

        <ul
          id="sidebar-playlists"
          className="flex flex-col w-full gap-3 pr-3 mt-5 overflow-x-hidden text-sm text-gray"
        >
          {playlists?.map((playlist) => (
            <Link
              key={`${playlist?.id}`}
              href={`/playlist/${playlist?.id}`}
              className="w-full"
              passHref
            >
              <li
                key={playlist.id}
                className="text-sm font-semibold truncate cursor-default hover:text-white"
              >
                {playlist.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
