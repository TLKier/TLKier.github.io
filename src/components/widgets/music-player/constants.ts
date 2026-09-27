
import Cover1 from "../../../assets/music/cover/だんご大家族.jpg?url";
import Cover2 from "../../../assets/music/cover/Last regrets.jpg?url";
import Cover3 from "../../../assets/music/cover/空気力学少女と少年の詩.jpg?url";
import Cover4 from "../../../assets/music/cover/Horizon Dreamer.jpg?url";
import Cover5 from "../../../assets/music/cover/Polytope.jpg?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "だんご大家族",
		artist: "茶太",
		cover: Cover1,
		url: "assets/music/url/だんご大家族.mp3",
		duration: 241,
	},
	{
		id: 2,
		title: "Last regrets",
		artist: "彩音",
		cover: Cover2,
		url: "assets/music/url/Last regrets.mp3",
		duration: 253,
	},
	{
		id: 3,
		title: "空気力学少女と少年の詩",
		artist: "はな",
		cover: Cover3,
		url: "assets/music/url/空気力学少女と少年の詩.mp3",
		duration: 253,
	},
	{
		id: 4,
		title: "Horizon Dreamer",
		artist: "三浦大知",
		cover: Cover4,
		url: "assets/music/url/Horizon Dreamer.mp3",
		duration: 253,
	},
		{
		id: 5,
		title: "Polytope",
		artist: "三浦大知",
		cover: Cover5,
		url: "assets/music/url/Polytope.mp3",
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
