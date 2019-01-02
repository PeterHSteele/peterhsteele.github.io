import React from 'react'

function ProjectInfo (props){
	return props.display?
	<div className='projectInfo' style={{background:'rgba(0,0,0,.8)'}}></div>:
	null
}


export default ProjectInfo