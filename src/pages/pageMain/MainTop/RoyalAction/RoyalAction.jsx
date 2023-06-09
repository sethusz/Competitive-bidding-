import React from "react";

import "./RoyalAction.scss"

export const RoyalAction = (props) => {
	return (
		<div className={'main__royalAction'}>
			<div className={'royalAction__title'}>Royal Auction</div>
			<div className={'royalAction__text'}>
				This is an international online auction that offers the opportunity
				to bid for the right to purchase goods, services, crypto-assets,
				cars, real estate and other things, for 15-20% of their market value
			</div>
			<div className={'royalAction__crown'}>
				<img src={'src/assets/pageMain/royalAuction.png'} />
			</div>
		</div>
	)
}
