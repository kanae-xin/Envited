import "./home.css"
import { useNavigate } from "react-router-dom";
import bg from "../../static/landing/Landing-page-background-gradient.png";
import navi from "../../static/landing/Nav-Bar_landing page.png";
import create from "../../static/landing/Create-event-button.png";
import leftProduct from "../../static/landing/Product-Image_Left.png";
import midProduct from "../../static/landing/Product-Image_Middle.png";
import rightProduct from "../../static/landing/Product-Image_Right.png";
import iconBg from "../../static/landing/Social-Media-icons.png";


export default function Home() {
	let navigate = useNavigate(); 
  	const routeChange = () =>{ 
    let path = `../create`; 
    	navigate(path);
  	}

	return (
		<div className="homeContainer" style={{ backgroundImage: `url(${bg})` }}>

			<div className="home">
				<img className="navi" src={navi} alt="background" />
				<span className="bigTitle">
					Facebook events without Facebook.
				</span>
				<span className="smallTitle">
					Easily host and share events with your friends across any social media.
				</span>
				<button className="create" onClick={routeChange}>
				{
					<img className="createImage" src={create} alt="create button" />
				}
				</button>
				<img className="leftProduct" src={leftProduct} alt="left Product" />
				<img className="midProduct" src={midProduct} alt="middle product" />
				<img className="rightProduct" src={rightProduct} alt="right product" />
				<img className="iconBg" src={iconBg} alt="icon background" />
			</div>
		</div>
	)
}