// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "Fate/Zero",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/fatezero.webp",
		description: "震撼人心的作品，比Fate系列其他任何作品都要来得深刻，第一季节奏缓慢，第二季彻底封神。",
		episodes: "12 episodes",
		year: "2012",
		genre: ["战斗", "神话"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md779",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2020-09",
		endDate: "2021-01",
	},
	{
		title: "Clannad",
		status: "completed",
		rating: 9.9,
		cover: "/assets/anime/clannad.webp",
		description: "影响我一生的的神作，我个人更喜欢第二季离开校园的内容，这部作品让我对爱充满期许，尤其是亲情之爱。从初中到现在大学都是我心目中的第一名",
		episodes: "12 episodes",
		year: "2008",
		genre: ["日常", "治愈","催泪"],
		studio: "京都动画",
		link: "https://www.bilibili.com/bangumi/media/md1178",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-11",
		endDate: "2023-12",
	},
	{
		title: "Evagelion(新世纪福音战士)",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/eva.webp",
		description: "对人与人之间的关系做了深刻的讨论，我心目中仅次于Clannad的存在",
		episodes: "12 episodes",
		year: "1995",
		genre: ["人文", "机战"],
		studio: "GAINAX",
		link: "https://www.bilibili.com/bangumi/media/md1635",
		progress: 26,
		totalEpisodes: 26,
		startDate: "2024-02",
		endDate: "2024-03",
	},
	{
		title: "进击的巨人",
		status: "completed",
		rating: 9.0,
		cover: "/assets/anime/jjdjr.jpg",
		description: "很难评价的作品，人的最大敌人还是人",
		episodes: "12 episodes",
		year: "2013",
		genre: ["战斗"],
		studio: "MAPPA",
		link: "",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2025-04",
		endDate: "2025-06",
	},
	{
		title: "Kanon",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/kanon.webp",
		description: "高考假期看的，一个精彩的感人故事，我想获得男主那样的时间管理能力",
		episodes: "12 episodes",
		year: "2006",
		genre: ["日常", "治愈", "青梅"],
		studio: "京都动画",
		link: "https://www.bilibili.com/bangumi/media/md1375",
		progress: 24,
		totalEpisodes: 24,
		startDate: "2026-08",
		endDate: "2026-08",
	},
];

export default localAnimeList;
