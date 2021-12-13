import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import { useSpotify } from "../hooks/useSpotify";
import { playlistIdState } from "../atoms/playlistAtom";
import { useRecoilState } from "recoil";

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlist, setPlaylist] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getUserPlaylists()
        .then((data) => setPlaylist(data.body.items));
    }
  }, [session, spotifyApi]);

  return (
    <div className="text-gray-500 p-5  border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide lg:text-sm text-xs sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
      <div className="space-y-4">
        <Button>
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </Button>
        <Button>
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </Button>
        <Button>
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </Button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <Button>
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </Button>
        <Button>
          <HeartIcon className="h-5 w-5" />
          <p>Like songs</p>
        </Button>
        <Button>
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </Button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* playlist */}
        {playlist.length &&
          playlist.map((list) => (
            <p
              onClick={() => setPlaylistId(list.id)}
              className="cursor-pointer hover:text-white"
              key={list.id}
            >
              {list.name}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
Sidebar;
