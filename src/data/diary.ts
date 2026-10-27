// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};


// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"今天开始写日记吧，其实也不会每天都写，今天在我们班发现一个好好看的女孩子。然后今天也是重新开始学stm32和c语言了,好久没学都忘光了。",
		date: "2026-10-20T10:30:00Z",
	},
	{
		id: 2,
		content:
		    "今天下午一直再想我到底要在大学里面做什么，仔细想想其实发现自己的目标其实也没有那么模糊，总之大一上就高数线代工图别挂科了，四级过掉，积累电力电子知识，争取参加竞赛。哦对了，关于那个女生，确实越看越好看呐，好想每节课都坐她附近，不过仔细想想我只是单纯喜欢看美女，而不是对特定的某个人产生某种情感......吧",
		date:"2026-10-27T08:57:00Z"
	}
];