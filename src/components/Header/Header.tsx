import "./header.css";
import { IoPerson } from "react-icons/io5";
import { TiInfoLarge } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import NavItem from "./NavItem/NavItem";

export default function Header() {
	return (
		<header className="fixed h-screen header-bg px-4 content-center place-items-center w-20">
			<nav className="w-fit">
				<ul>
					<NavItem
						icon={IoPerson}
						label="Me"
						onClick={() => (window.location.href = "#me")}
					/>
					<NavItem
						icon={TiInfoLarge}
						label="About Me"
						onClick={() => (window.location.href = "#about-me")}
					/>
					<NavItem icon={FaCode} label="Project" />
					<NavItem icon={IoMail} label="Contant Me" />
				</ul>
			</nav>
		</header>
	);
}
