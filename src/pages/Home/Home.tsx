import AboutMe from "../../sections/AboutMe/AboutMe";
import Me from "../../sections/Me/Me";

function Home() {
	return (
		<div className="px-40" style={{ fontFamily: "Prata" }}>
			<Me />
			<AboutMe />
		</div>
	);
}
export default Home;
