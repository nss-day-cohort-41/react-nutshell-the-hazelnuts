import React from "react";
import { Link } from "react-router-dom";

// returns HTML for individual Events (cards)

const EventCard = props => {
    return (
    <div className="card">
        <div className="card-content">
            <h3><span className="card-eventtitle">{props.event.title}</span></h3>
            <li>&#x1F3E0; Location:</li> 
            <li><span>{props.event.location}</span></li>
            <li>&#x1F4C5; Date:</li> 
            <li><span>{props.event.date}</span></li>
            <button type="button"
                onClick={() => props.history.push(`/events/${props.event.id}/edit`)}> Edit 
            </button>
            {props.deleteEvent &&
            <button type="button" onClick={()=> 
               props.deleteEvent(props.event.id)}>Cancel Event</button>}
            <Link to={`/events/${props.event.id}`}><button>Event Details</button></Link>
        </div>
    </div>
    )
}

export default EventCard;