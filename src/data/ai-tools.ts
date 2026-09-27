export type AIToolCategory =
	| "chat"
	| "coding"
	| "image"
	| "audio"
	| "video"
	| "writing"
	| "search"
	| "other";

export type AIToolFrequency =
	| "daily"
	| "weekly"
	| "occasional"
	| "experimental";

export type LocaleString = Partial<
	Record<"en" | "zh_CN" | "zh_TW" | "ja", string>
>;

export function getLocaleString(value: LocaleString, lang: string): string {
	return value[lang as keyof LocaleString] ?? value["en"] ?? "";
}

export interface AITool {
	id: string;
	name: string;
	description: LocaleString;
	icon: string;
	category: AIToolCategory;
	frequency: AIToolFrequency;
	url?: string;
	usage?: LocaleString;
	tags?: string[];
	color?: string;
}

export const aiToolsData: AITool[] = [
	{
		id: "deepseek",
		name: "DeepSeek",
		description: {
			zh_CN: "深度求索推出的 AI 助手，擅长推理、编程与中文对话。",
		},
		icon: "material-symbols:neurology",
		category: "chat",
		frequency: "daily",
		url: "https://chat.deepseek.com",
		usage: {
			zh_CN: "每天：代码编写、复杂推理、资料整理",
		},
		tags: ["对话", "推理", "编程"],
		color: "#4D6BFE",
	},
	{
		id: "doubao",
		name: "豆包",
		description: {
			zh_CN: "字节跳动推出的 AI 助手，支持对话、写作与多场景创作。",
		},
		icon: "material-symbols:chat-bubble",
		category: "chat",
		frequency: "daily",
		url: "https://www.doubao.com",
		usage: {
			zh_CN: "每天：日常问答、写作辅助、灵感生成",
		},
		tags: ["对话", "写作", "创作"],
		color: "#3B82F6",
	},
	{
		id: "chatgpt",
		name: "ChatGPT",
		description: {
			zh_CN: "与神对话是需要代价的",
		},
		icon: "material-symbols:smart-toy",
		category: "chat",
		frequency: "daily",
		url: "https://chatgpt.com",
		usage: {
			zh_CN: "按需：复杂问题探讨、写作与推理",
		},
		tags: ["对话", "推理", "写作"],
		color: "#10A37F",
	},
];