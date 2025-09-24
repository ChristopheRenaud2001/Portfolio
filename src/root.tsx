import { Outlet } from "react-router";
import "./root.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IconCursor, { StyledCursor } from "./components/Cursor/IconCursor";
import { useEffect, useRef } from "react";
import { StyledBackground } from "./components/Background/background";

export default function Root() {
	const cursorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			if (cursorRef.current) {
				cursorRef.current.style.top = `${e.clientY}px`;
				cursorRef.current.style.left = `${e.clientX}px`;
			}
		});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (cursorRef.current) {
				if (window.scrollY > 500) {
					document.getElementById("bg")?.classList.add("changeBgSize");
				} else {
					document.getElementById("bg")?.classList.remove("changeBgSize");
				}
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="h-full">
			<StyledBackground id="bg" />
			<title>Chris' Portfolio</title>
			<Header />
			<div className="content place-self-end">
				<Outlet />
			</div>
			<Footer />

			<StyledCursor ref={cursorRef}>
				<IconCursor />
			</StyledCursor>
		</div>
	);
}
