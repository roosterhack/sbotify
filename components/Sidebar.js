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

const Sidebar = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
      <div className="space-y-4">
        <Button onClick={() => signOut()}>
          <HomeIcon className="h-5 w-5" />
          <p>Logout</p>
        </Button>
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
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
        <p className="cursor-pointer hover:text-white">Play list name...</p>
      </div>
    </div>
  );
};

export default Sidebar;
Sidebar;
