import type { IconType } from "react-icons";
import "./navItem.css";

export default function NavItem(props: {
	icon: IconType;
	label: string;
	onClick?: () => void;
	className?: string;
}) {
	return (
		<li
			className={`icon nav-item py-4${props.className ? ` ${props.className}` : ""}`}
			onClick={props.onClick}
		>
			<props.icon className="inline transition ease-in-out w-5 h-5 hover:scale-130 opacity-60 hover:opacity-100 hover:cursor-pointer" />
		</li>
	);
}
