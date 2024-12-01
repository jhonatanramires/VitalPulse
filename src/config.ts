import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "home",
	},
	blog: {
		path: "/blog",
		title: "blog",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	media: {
		path: "/media",
		title: "contenido",
	},
	about: {
		path: "/about",
		title: "sobre mi",
	},
};

export const SITE = {
	// Your site's detail?
	name: "VitalPulses",
	title: "VitalPulses :D",
	description: "VitalPulses - La onda que impulsa el cuidado",
	url: "https://vitalpulses.netlify.app",
	githubUrl: "https://github.com/jhonatanramires/VitalPulse",
	listDrafts: true,
	image:
		"https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png",
	// YT video channel Id (used in media.astro)
	ytChannelId: "@JhonatanStevenRodriguezR-fy1ng",
	// Optional, user/author settings (example)
	// Author: name
	author: "Jhonatan Ramirez", // Example: Fred K. Schott
	// Author: Twitter handler
	authorTwitter: "kare_jhon", // Example: FredKSchott
	// Author: Image external source
	authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
	// Author: Bio
	authorBio:
		"Soy **Jhonatan Steven Rodríguez Ramírez**, estudiante de Ingeniería Electrónica en el programa PEAMA de la Universidad Nacional de Colombia, sede Orinoquía. Me apasionan la electrónica y la enseñanza, y en **VitalPulse**, un sitio dedicado a la cultura, la salud y el cuidado, combino estos intereses. A través de este espacio, exploro cómo la tecnología y el bienestar pueden entrelazarse para fomentar una vida más saludable y consciente. Mi objetivo es crear contenido que inspire y eduque sobre cómo el cuidado personal puede transformarse mediante un enfoque integral y tecnológico.",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = true;
