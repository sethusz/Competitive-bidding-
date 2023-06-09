import React from "react";

import "./StatsItem.scss"

export const StatsItem = (props) => {
	return (
		<div className={`stats__item ${props.styles || ""}`}>
			<div className="stats__title">{props.title}</div>
			<div className="stats__content">{props.text}</div>
			<div className="stats__image">
				<img src={props.image || ""} alt="" />
			</div>
		</div>
	)
}

