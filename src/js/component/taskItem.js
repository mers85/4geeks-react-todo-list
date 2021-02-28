import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function TaskItem(props) {
	const [hideButton, setHideButton] = useState("d-none");
	function onClickDelete() {
		props.onClickDelete(event, props.taskId);
	}

	return (
		<li
			className="list-group-item"
			id={props.taskId}
			onMouseOver={event => {
				setHideButton("");
			}}
			onMouseLeave={event => {
				setHideButton("d-none");
			}}>
			{props.taskText}
			<button
				type="button"
				onClick={onClickDelete}
				className={"close " + hideButton}>
				<span aria-hidden="true">&times;</span>
			</button>
		</li>
	);
}

TaskItem.propTypes = {
	taskId: PropTypes.number,
	taskText: PropTypes.string,
	onClickDelete: PropTypes.func
};
