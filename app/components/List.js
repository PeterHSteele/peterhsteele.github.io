import React from 'react'

function List(props){
	return (
		<ul>
			{props.listItems.map(e=><li key={e}>{e}</li>)}
		</ul>
	)
}

export default List