import React from 'react'

export default function Mybtnfunc(props) {
     const bg = props.bg != null ? props.bg : '#BDBDBD';
			const title = props.title;
    return (
			<div>
				<button
					style={{
						width: 120,
						height: 45,
						fontFamily: '"Baloo 2" ,cursive',
						backgroundColor: bg,
					}}
					onClick={props.onClick}
				>
					{title}
				</button>
				);
			</div>
		);
}
