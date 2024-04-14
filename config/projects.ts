import { Maybe, Tuple } from "@/types";

import { Stack } from "./stack";

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
  api?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository?: Maybe<string>;
  deployment?: Deployment;
}

export type BannerImage = {
  src: string;
  blurDataUrl: string;
};

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website?: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: "Heimdall",
    slug: "heimdall",
    banner: "/static/projects/heimdall/banner.png",
    website: "https://heimdall.francismasha.com",
    description: `A utility tool for getting insights into your API's performance with global monitoring and analysis.`,
    shortDescription:
      "Almond is a design sustainable solutions for hydroponic farmers and growing fresh food.",
    repository: null,
    stack: [Stack.typescript, Stack.react, Stack.nextjs, Stack.tailwind],
    dimensions: [360, 640],
    screenshots: [
      "https://res.cloudinary.com/almondgreen/image/upload/v1674294477/Portfolio/sanctissima/sanctissima-1_tv0dni.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1674294479/Portfolio/sanctissima/sanctissima-2_v78twe.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1674294476/Portfolio/sanctissima/sanctissima-3_draaa1.png",
    ],
    deployment: {
      web: "https://heimdall.francismasha.com",
    },
    subProjects: [
      {
        title: "notes",
        description: "Personal notes and coding tips",
        repository: "",
        deployment: {
          web: "https://notes.francismasha.com/",
        },
      },
    ],
  },
  {
    title: "Sanctissima",
    slug: "sanctissima",
    banner: "/static/projects/sanctissima/banner.png",
    website: "https://francismasha.com",
    description: `A blog website design to interact with the church youth, through question and answer, accompanied with short articles.`,
    shortDescription:
      "Almond is a design sustainable solutions for hydroponic farmers and growing fresh food.",
    repository: null,
    stack: [Stack.typescript, Stack.react, Stack.nextjs, Stack.tailwind],
    dimensions: [360, 640],
    screenshots: [
      "https://res.cloudinary.com/almondgreen/image/upload/v1674294477/Portfolio/sanctissima/sanctissima-1_tv0dni.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1674294479/Portfolio/sanctissima/sanctissima-2_v78twe.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1674294476/Portfolio/sanctissima/sanctissima-3_draaa1.png",
    ],
    deployment: {
      web: "https://sanctissima.co.ke",
    },
    subProjects: [
      {
        title: "notes",
        description: "Personal notes and coding tips",
        repository: "",
        deployment: {
          web: "https://notes.francismasha.com/",
        },
      },
    ],
  },
  {
    title: "Dynatrace reporting tool",
    slug: "dt-edge",
    banner: "/static/projects/dt-edge/banner.png",
    website: "#",
    description:
      "Better known internally as dt-edge, is a reporting tool built on top of Safaricom dynatrace APIs. This enables different teams to schedule generated reports for different entities such as host usage, cpu utilization, memory capacity, among others.",
    shortDescription:
      "A reporting tool built on top of Safaricom dynatrace APIs.",
    repository: null,
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.nextjs,
      Stack.java,
      Stack.kubernetes,
      Stack.docker,
      Stack.mysql,
      Stack.jenkins,
      Stack.materialui,
    ],
    dimensions: [360, 640],
    screenshots: [
      "https://res.cloudinary.com/almondgreen/image/upload/v1667115349/Portfolio/dt-edge/dt-edge-1_elner5.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667115354/Portfolio/dt-edge/dt-edge-3_nahir6.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667115354/Portfolio/dt-edge/dt-edge-4_eg1qki.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667115357/Portfolio/dt-edge/dt-edge-5_yis4lm.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667115356/Portfolio/dt-edge/dt-edge-2_hvc0wu.png",
    ],
    deployment: {
      web: "#",
      api: "https://www.dynatrace.com/support/help/dynatrace-api",
    },
    subProjects: [
      {
        title: "Dynatrace Reporting tool API",
        description:
          "These were built using Java Springboot application. The main purpose is to serialize and reshape the data fetched from Dynatrace API.",
      },
      {
        title: "Reports scheduler app",
        description:
          "The scheduler app generates reports for various teams within the business and sends periodically depending on the time set by the team.",
      },
    ],
  },
  {
    title: "Almond hydroponics",
    slug: "almond-hydroponics",
    banner: "/static/projects/almond/banner.png",
    website: "#",
    description: `Almond is a design sustainable solutions for hydroponic farmers, empowering them to grow fresh, clean, and local food in their communities around the globe.`,
    shortDescription:
      "Almond is a design sustainable solutions for hydroponic farmers and growing fresh food.",
    repository: null,
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.nextjs,
      Stack.node,
      Stack.graphql,
      Stack.aws,
      Stack.mqtt,
      Stack.materialui,
    ],
    screenshots: [],
    deployment: {
      web: "#",
    },
    subProjects: [],
  },
  {
    title: "Personal portfolio",
    slug: "portfolio",
    banner: "/static/projects/portfolio/banner.png",
    website: "https://francismasha.com",
    description: `Simple portfolio web site to know about me, what I like to do and other fun stuff about coding and my personal notes made while working on some projects.`,
    shortDescription:
      "Almond is a design sustainable solutions for hydroponic farmers and growing fresh food.",
    repository: null,
    stack: [Stack.typescript, Stack.react, Stack.nextjs, Stack.tailwind],
    dimensions: [360, 640],
    screenshots: [
      "https://res.cloudinary.com/almondgreen/image/upload/v1667035479/Portfolio/portfolio-5_c66e6q.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667035479/Portfolio/portfolio-1_iegynz.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667035478/Portfolio/portfolio-3_rik4iq.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667035477/Portfolio/portfolio-4_iza7kp.png",
      "https://res.cloudinary.com/almondgreen/image/upload/v1667035475/Portfolio/portfolio-2_bvjfuf.png",
    ],
    deployment: {
      web: "https://francismasha.com",
    },
    subProjects: [
      {
        title: "notes",
        description: "Personal notes and coding tips",
        repository: "",
        deployment: {
          web: "https://notes.francismasha.com/",
        },
      },
      {
        title: "code",
        description: "Coding algorithms and data structures",
        repository: "",
        deployment: {
          web: "https://code.francismasha.com/",
        },
      },
    ],
  },
  // {
  // 	title: 'Musings sphere',
  // 	slug: 'musings-sphere',
  // 	banner: '/static/projects/almond/banner.png',
  // 	website: 'https://almondhydroponics.com',
  // 	description: `Almond is a design sustainable solutions for hydroponic farmers, empowering them to grow fresh, clean, and local food in their communities around the globe.`,
  // 	shortDescription:
  // 		'Peapods is a new type of decentralized social network that values real human interaction.',
  // 	repository: null,
  // 	stack: [
  // 		Stack.javascript,
  // 		Stack.react,
  // 		Stack.node,
  // 		Stack.graphql,
  // 		Stack.aws,
  // 		Stack.mqtt,
  // 	],
  // 	screenshots: [],
  // 	deployment: {
  // 		web: '#',
  // 	},
  // 	subProjects: [],
  // },
  // {
  // 	title: 'PSC Marketplace',
  // 	slug: 'psc-marketplace',
  // 	banner: '/static/projects/almond/banner.png',
  // 	website: 'https://almondhydroponics.com',
  // 	description: `Almond is a design sustainable solutions for hydroponic farmers, empowering them to grow fresh, clean, and local food in their communities around the globe.`,
  // 	shortDescription:
  // 		'Peapods is a new type of decentralized social network that values real human interaction.',
  // 	repository: null,
  // 	stack: [
  // 		Stack.javascript,
  // 		Stack.react,
  // 		Stack.node,
  // 		Stack.graphql,
  // 		Stack.aws,
  // 		Stack.mqtt,
  // 	],
  // 	screenshots: [],
  // 	deployment: {
  // 		web: 'https://almondhydroponics.com',
  // 	},
  // 	subProjects: [],
  // },
  // {
  // 	title: 'Proximity',
  // 	slug: 'proximity',
  // 	website: 'https://proximity-mobile.web.app',
  // 	banner: '/static/projects/proximity/banner.jpeg',
  // 	description:
  // 		'An open source social media app that does not use your data against you.',
  // 	repository: 'https://github.com/karanpratapsingh/Proximity',
  // 	stack: [
  // 		Stack.typescript,
  // 		Stack.reactnative,
  // 		Stack.node,
  // 		Stack.graphql,
  // 		Stack.postgres,
  // 	],
  // 	screenshots: [
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=a9b5a094-8a16-4c84-af16-65bf2378d7d9',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fca4c07e-c922-445e-a259-a06c038e0974',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=31dafec8-fc20-4d6f-96e7-312a4c847ac5',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-4-.png?alt=media&token=4067a226-5b7b-4ffa-859e-401323a864c4',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=c349a959-ab54-4e2d-8f8e-2393466bb5c0',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=f2c25e34-38e8-4886-b247-dc6f270c36d0',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=2af284b0-4266-4072-a900-cc9ef8521f74',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fproximity%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=e041e4bd-50fc-49a7-8a22-f6e98d3e1bc6',
  // 	],
  // 	deployment: {
  // 		web: 'https://proximity-mobile.web.app',
  // 		android:
  // 			'https://play.google.com/store/apps/details?id=com.proximity.app',
  // 		ios: 'https://apps.apple.com/us/app/proximity-app/id1489041006',
  // 	},
  // 	subProjects: [],
  // },
  // {
  // 	title: 'Velvet Live',
  // 	slug: 'velvet-live',
  // 	banner: '/static/projects/velvet-live/banner.png',
  // 	website: 'https://boom.london',
  // 	description: `Connect with shoppers who need your advice and expertise when they're shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app.`,
  // 	repository: null,
  // 	stack: [
  // 		Stack.javascript,
  // 		Stack.react,
  // 		Stack.reactnative,
  // 		Stack.graphql,
  // 		Stack.gcp,
  // 	],
  // 	screenshots: [
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
  // 	],
  // 	deployment: {
  // 		web: 'https://boom.london',
  // 		android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
  // 	},
  // 	subProjects: [],
  // },
  // {
  // 	title: 'Stewards',
  // 	slug: 'stewards',
  // 	website: 'https://stewards.app',
  // 	repository: null,
  // 	banner: '/static/projects/stewards/banner.png',
  // 	description:
  // 		'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard.',
  // 	stack: [
  // 		Stack.javascript,
  // 		Stack.react,
  // 		Stack.reactnative,
  // 		Stack.graphql,
  // 		Stack.gcp,
  // 	],
  // 	screenshots: [
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=37c14308-767c-41c7-a064-df8b63cd18e8',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=6ad6b4f6-ba09-423d-bd3f-b06ae093113a',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=cd2945c0-af97-4b3d-a503-d52174232a8e',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=6fcaeab6-d539-4f39-9985-e6ee85e28f0a',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=3c1fcd3e-4d93-4275-8d87-94a9b9236a9d',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=9733914a-61a9-41ed-b715-3334ca425588',
  // 	],
  // 	deployment: {
  // 		web: 'https://stewards.app',
  // 		android:
  // 			'https://play.google.com/store/apps/details?id=app.stewards.customer',
  // 		ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
  // 	},
  // 	subProjects: [
  // 		{
  // 			title: 'Staff Management',
  // 			repository: null,
  // 			description:
  // 				'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers.',
  // 			deployment: {
  // 				android:
  // 					'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
  // 			},
  // 		},
  // 		{
  // 			title: 'Admin Dashboard',
  // 			repository: null,
  // 			description:
  // 				'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
  // 			deployment: {
  // 				web: 'https://manage.stewards.app',
  // 			},
  // 		},
  // 		{
  // 			title: 'Self Checkout',
  // 			repository: null,
  // 			description:
  // 				"Stewards self checkout solution for customers who don't like waiting. Available on demand for iPad and tablets.",
  // 			deployment: {},
  // 		},
  // 	],
  // },
  // {
  // 	title: 'Celebrify',
  // 	slug: 'celebrify',
  // 	website: 'https://celebrify.in',
  // 	banner: '/static/projects/celebrify/banner.jpeg',
  // 	description:
  // 		'Get personalized videos from your favorite celebrities at just one click. Request personalized video messages for your friends, family, loved ones or even yourself. Be it a doubt or even a special wish from your favorite celebrity.',
  // 	repository: null,
  // 	stack: [Stack.react, Stack.reactnative, Stack.django, Stack.aws],
  // 	dimensions: [450, 270],
  // 	screenshots: [
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423',
  // 	],
  // 	deployment: {
  // 		web: 'https://celebrify.in',
  // 		android:
  // 			'https://play.google.com/store/apps/details?id=com.celebrify.app',
  // 		ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
  // 	},
  // 	subProjects: [],
  // },
  // {
  // 	title: 'KCards',
  // 	slug: 'kcards',
  // 	banner: '/static/projects/kcards/banner.jpeg',
  // 	description:
  // 		'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
  // 	repository: 'https://github.com/karanpratapsingh/KCards',
  // 	stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
  // 	dimensions: [450, 270],
  // 	screenshots: [
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
  // 		'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
  // 	],
  // 	deployment: {
  // 		web: 'https://kcards-server.herokuapp.com',
  // 		android: 'https://play.google.com/store/apps/details?id=com.kcards',
  // 		ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
  // 	},
  // 	website: 'https://kcards-server.herokuapp.com',
  // 	subProjects: [],
  // },
];
