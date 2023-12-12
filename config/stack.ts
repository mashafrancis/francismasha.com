import { Colors } from './colors'

export enum Stack {
	// Languages
	typescript,
	javascript,
	python,
	rust,

	// Frontend
	react,
	reactnative,
	nextjs,

	// Styling
	materialui,
	tailwind,

	// Backend
	java,
	graphql,
	node,
	django,

	// Cloud
	aws,
	gcp,

	// Messaging
	mqtt,
	rabbitmq,
	kafka,

	// Databases
	redis,
	postgres,
	mongo,
	mysql,

	// Tools
	docker,
	kubernetes,
	terraform,
	jenkins,

	// Electronics
	arduino,
}

export const WorkStack = [
	Stack.typescript,
	Stack.javascript,
	Stack.python,
	Stack.rust,
	Stack.react,
	Stack.nextjs,
	Stack.java,
	Stack.aws,
	Stack.gcp,
	Stack.kubernetes,
	Stack.docker,
	Stack.terraform,
	Stack.rabbitmq,
	Stack.mqtt,
	Stack.kafka,
	Stack.graphql,
	Stack.postgres,
	Stack.redis,
	Stack.reactnative,
	Stack.arduino,
	Stack.mysql,
	Stack.jenkins,
	Stack.materialui,
	Stack.tailwind,
]

type StackInfoMap = {
	value: string
	color: string
}

export const StackInfo: Record<Stack, StackInfoMap> = {
	[Stack.typescript]: {
		value: 'TypeScript',
		color: Colors.typescript,
	},
	[Stack.javascript]: {
		value: 'JavaScript',
		color: Colors.javascript,
	},
	[Stack.rust]: {
		value: 'Rust',
		color: Colors.rust,
	},
	[Stack.java]: {
		value: 'Java',
		color: Colors.java,
	},
	[Stack.react]: {
		value: 'React',
		color: Colors.react,
	},
	[Stack.nextjs]: {
		value: 'NextJS',
		color: Colors.nextjs,
	},
	[Stack.reactnative]: {
		value: 'React Native',
		color: Colors.reactnative,
	},
	[Stack.graphql]: {
		value: 'GraphQL',
		color: Colors.graphql,
	},
	[Stack.aws]: {
		value: 'AWS',
		color: Colors.aws,
	},
	[Stack.gcp]: {
		value: 'Google Cloud',
		color: Colors.gcp,
	},
	[Stack.python]: {
		value: 'Python',
		color: Colors.python,
	},
	[Stack.node]: {
		value: 'Node',
		color: Colors.node,
	},
	[Stack.django]: {
		value: 'Django',
		color: Colors.django,
	},
	[Stack.kafka]: {
		value: 'Kafka',
		color: Colors.kafka,
	},
	[Stack.rabbitmq]: {
		value: 'RabbitMQ',
		color: Colors.rabbitmq,
	},
	[Stack.mqtt]: {
		value: 'MQTT',
		color: Colors.mqtt,
	},
	[Stack.postgres]: {
		value: 'Postgres',
		color: Colors.postgres,
	},
	[Stack.redis]: {
		value: 'Redis',
		color: Colors.redis,
	},
	[Stack.mongo]: {
		value: 'MongoDB',
		color: Colors.mongo,
	},
	[Stack.docker]: {
		value: 'Docker',
		color: Colors.docker,
	},
	[Stack.kubernetes]: {
		value: 'Kubernetes',
		color: Colors.kubernetes,
	},
	[Stack.terraform]: {
		value: 'Terraform',
		color: Colors.terraform,
	},
	[Stack.arduino]: {
		value: 'Arduino',
		color: Colors.arduino,
	},
	[Stack.jenkins]: {
		value: 'Jenkins',
		color: Colors.jenkins,
	},
	[Stack.mysql]: {
		value: 'MySQL',
		color: Colors.mysql,
	},
	[Stack.materialui]: {
		value: 'MaterialUI',
		color: Colors.materialui,
	},
	[Stack.tailwind]: {
		value: 'TailwindCSS',
		color: Colors.tailwind,
	},
}
