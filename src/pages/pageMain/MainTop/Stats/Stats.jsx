import React from "react";

import { StatsItem } from "./StatsItem/StatsItem";

import "./Stats.scss"

import StatsData from "./Data/StatsData.js"

export const Stats = (props) => {

	const getData = StatsData.map((stat) => {
		return <StatsItem
			key={stat.id}
			styles={stat.styles}
			title={stat.title}
			text={stat.text}
			image={stat.image}
		/>
	})

	return (
		<div className="main__stats">
			{getData}
		</div>
	)
}
