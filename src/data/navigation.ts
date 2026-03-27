export interface NavEntry {
	href: string;
	title: string;
}

export const navigationPages: NavEntry[] = [
	{ href: "/prefazione", title: "Prefazione" },
	{ href: "/introduzione/definizione", title: "1.1 - Definizione" },
	{ href: "/introduzione/storia", title: "1.2 - Storia" },
	{ href: "/introduzione/classificazione", title: "1.3 - Classificazione" },
	{ href: "/accessibilita/definizione", title: "2.1 - Definizione" },
	{ href: "/accessibilita/tecnologie/introduzione", title: "2.2 - Tecnologie" },
	{ href: "/accessibilita/tecnologie/hardware", title: "2.2.1 - Hardware" },
	{ href: "/accessibilita/tecnologie/software", title: "2.2.2 - Software" },
	{ href: "/accessibilita-web/definizione", title: "3.1 - Definizione" },
	{
		href: "/accessibilita-web/w3c",
		title: "3.2 - Il World Wide Web Consortium (W3C)",
	},
	{
		href: "/accessibilita-web/wai",
		title: "3.3 - Web Accessibility Initiative (WAI)",
	},
	{
		href: "/accessibilita-web/wai-aria",
		title: "3.3.1 WAI - Accessible Rich Internet Applications (WAI-ARIA)",
	},
	{
		href: "/accessibilita-web/wcag",
		title: "3.3.2 Web Content Accessibility Guidelines (WCAG)",
	},
	{
		href: "/accessibilita-web/wai-altro",
		title: "3.3.3 Ulteriori documentazione rilasciate dal WAI",
	},
	{
		href: "/accessibilita-web/migliorare-accessibilita",
		title: "3.4 Migliorare ulteriormente l'accessibilità",
	},
	{
		href: "/accessibilita-web/conclusione",
		title: "3.5 Accessibilità Web - Conclusione",
	},
	{ href: "/accessibilita-web/legislazione", title: "3.6 - Legislazione Italiana" },
	{ href: "/appendice/braille", title: "Appendice A - Braille" },
	{
		href: "/appendice/classificazione-dispositivi-assistivi",
		title: "Appendice B - Classificazione Dispositivi Assistivi",
	},
	{ href: "/appendice/legge-stanca", title: "Appendice C - Legge Stanca" },
];

export function getAdjacentPages(currentPath: string): {
	prev: NavEntry | undefined;
	next: NavEntry | undefined;
} {
	const path = currentPath.replace(/\/$/, "");
	const index = navigationPages.findIndex((p) => p.href === path);
	if (index === -1) return { prev: undefined, next: undefined };
	return {
		prev: index > 0 ? navigationPages[index - 1] : undefined,
		next: index < navigationPages.length - 1 ? navigationPages[index + 1] : undefined,
	};
}
