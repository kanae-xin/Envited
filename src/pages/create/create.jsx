import "./create.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../static/landing/Landing-page-background-gradient.png";
import navi from "../../static/landing/Nav-Bar_landing page.png";

export default function Create() {
	const [event, setEvent] = useState({
		name:"",
		host:"",
		startTime:"",
		endTime:"",
		location:"",
		photo:""
	});

	const navigate = useNavigate(); 

	const onChangeEvent = (e) =>{
		setEvent({...event,[e.target.name] : e.target.value});
	}

	const SubmitInfo = (e) =>{
		e.preventDefault();
    	let path = `../event`; 
    	navigate(path,{data: event});
	}

	return (
		<div className="createContainer" style={{ backgroundImage: `url(${bg})` }}>
			<img className="navi" src={navi} alt="background" />
			<div className="info">
				<form onSubmit={SubmitInfo}>
					<label>Event name: </label><input type="text" name="name" value={event.name} onChange={onChangeEvent}/>
					<label>Host name: </label><input type="text" name="host" value={event.host} onChange={onChangeEvent}/>
					<label>Start date: </label><input type="date" name="startTime" value={event.startTime} onChange={onChangeEvent}/>
					<label>End date: </label><input type="date" name="endTime" value={event.endTime} onChange={onChangeEvent}/>
					<label>Location: </label><input type="text" name="location" value={event.location} onChange={onChangeEvent}/>
					<label>Event photo: </label><input type="file" name="photo" value={event.photo} onChange={onChangeEvent}/>
					<br/>
					<button className="submit" type="submit">Next</button>
				</form>	
			</div>
		</div>
	)
}