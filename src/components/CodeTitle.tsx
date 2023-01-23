import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import {
	SiCss3,
	SiGnubash,
	SiHtml5,
	SiMarkdown,
	SiNextdotjs,
	SiPython,
	SiReact,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';
import { AiOutlineFileText, AiOutlineFolderOpen } from 'react-icons/ai';

type Props = {
	title?: string;
	lang: string;
};

export default function CodeTitle({ title, lang }: Props) {
	let Icon;
	switch (lang) {
		case 'html':
			Icon = SiHtml5;
			break;
		case 'css':
			Icon = SiCss3;
			break;
		case 'js':
			Icon = IoLogoJavascript;
			break;
		case 'bash':
			Icon = SiGnubash;
			break;
		case 'py':
			Icon = SiPython;
			break;
		case 'json':
			Icon = VscJson;
			break;
		case 'jsx':
			Icon = SiReact;
			break;
		case 'text':
			Icon = AiOutlineFileText;
			break;
		case 'md':
			Icon = SiMarkdown;
			break;
		case 'next':
			Icon = SiNextdotjs;
			break;
		case 'directory':
			Icon = AiOutlineFolderOpen;
			break;
		case 'vercel':
			Icon = SiVercel;
			break;
		case 'ts' || 'tsx':
			Icon = SiTypescript;
			break;
		default:
			Icon = BsFileEarmarkCodeFill;
			break;
	}

	return (
		<div className='relative !z-10'>
			<div
				className='p-0 flex items-center justify-between !mt-4 overflow-x-scroll xs:overflow-auto callout-blue'>
				<div className='flex items-center gap-2'>
					<Icon className='flex items-center w-4 h-4' />
					<p className='!my-0 font-[500] text-sm'>{title || lang}</p>
				</div>
			</div>
		</div>
	);
}
