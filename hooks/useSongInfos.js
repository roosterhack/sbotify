import { useSpotify } from "./useSpotify";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { currentTrackIdState } from "../atoms/songAtom";

export const useSongInfos = () => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const res = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        );

        if (res) {
          const trackInfo = await res.json();
          setSongInfo(trackInfo);
        }
      }
    };

    fetchSongInfo();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
};
