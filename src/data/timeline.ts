import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "county-high-school",
		title: "在小县城县城一中读高中",
		description:
			"2023年9月至2026年6月，在小县城的县城一中就读高中，完成高中阶段学业，并在学习过程中逐渐对计算机和编程产生兴趣。",
		type: "education",
		startDate: "2023-09-01",
		endDate: "2026-06-30",
		location: "某小县城",
		organization: "县城一中",
		skills: ["数学", "物理", "英语"],
		achievements: [
			"完成高中阶段全部课程学习",
			"参加高考并取得理想成绩",
			"培养了对计算机和编程的浓厚兴趣",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
		featured: false,
	},
	{
		id: "first-programming-experience",
		title: "第一次接触编程",
		description:
			"高一第二学期（2024年3月）第一次接触编程，开始学习 Python 基础语法，并逐渐喜欢上写代码。",
		type: "education",
		startDate: "2024-03-01",
		endDate: "2026-03-02",
		location: "县城一中",
		skills: ["Python", "编程基础", "逻辑思维"],
		achievements: [
			"完成第一个 Hello World 程序",
			"学习基础循环和条件判断语句",
			"对编程产生浓厚兴趣，为后续 Web 开发打下基础",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: false,
	},
	{
		id: "first-django-blog",
		title: "编写第一个基于 Django 的博客网站",
		description:
			"2025年7月，使用 Django 框架编写了自己的第一个博客网站。",
		type: "project",
		startDate: "2025-07-01",
		endDate: "2025-07-31",
		skills: ["Python", "Django", "HTML",  "Git"],
		achievements: [
			"完成第一个基于 Django 框架的个人博客网站",
			"掌握 Django MTV 架构和数据库建模",
			"实现文章管理、页面渲染等基础功能",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: false,
	},
	{
		id: "fuzhou-university",
		title: "在福州大学就读电气工程及其自动化专业",
		description:
			"2026年9月至今，在福州大学就读电气工程及其自动化专业，继续学习电气工程、自动化以及编程相关知识。",
		type: "education",
		startDate: "2026-09-01",
		location: "福州",
		organization: "福州大学",
		skills: ["vibecoding", "电路分析"],
		achievements: [
			"目前尚无成就",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "blog-official-launch",
		title: "正式建立个人博客网站",
		description:
			"2026年9月25日正式建立个人博客网站，用于记录学习笔记、项目经历和生活点滴。",
		type: "project",
		startDate: "2026-09-25",
		skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL", "Git"],
		achievements: [
			"正式建立并上线个人博客网站",
			"整合此前 Django 博客项目经验",
			"开始持续发布个人文章和项目记录",
		],
		icon: "material-symbols:public",
		color: "#DC2626",
		featured: true,
	},
];