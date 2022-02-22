import "./event.css"
import topbar from "../../static/event/Cover-photo.png";

export default function Event() {

	return (
		<div className="eventContainer">
			<img className="topbar" src={topbar} alt="top" />
		</div>
	)
}