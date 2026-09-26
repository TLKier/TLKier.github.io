
import dazbeeCover from "../../../assets/music/cover/だんご大家族.jpg?url";
import hitoriCover from "../../../assets/music/cover/Last regrets.jpg?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "だんご大家族",
		artist: "茶太",
		cover: dazbeeCover,
		url: "assets/music/url/だんご大家族.mp3",
		duration: 241,
	},
	{
		id: 2,
		title: "Last regrets",
		artist: "彩音",
		cover: hitoriCover,
		url: "assets/music/url/Last regrets.mp3",
		duration: 253,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: DEFAULT_COVER_URL,
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
