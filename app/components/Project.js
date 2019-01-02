import React from 'react';
import ProjectInfo from './ProjectInfo.js'
import List from './List.js'

class Project extends React.Component{
	render (){
		const infoStyle={
			background:'rgba(0,0,0,.8)',
			opacity:this.props.active?1:0
		}

		return (
			<div
			onMouseEnter={(e)=>this.props.handleMouseEnter(e,this.props.projectNumber)} 
			onMouseLeave={(e)=>this.props.handleMouseLeave(e)}
			className={"project "+this.props.title}
			style={{backgroundImage:'url('+this.props.image+')'}}>
				<div 
				className='projectInfo'
				style={infoStyle}
				>
					<div className="contentContainer">
						<div className='contentRow'><h3>{this.props.title}</h3></div>
						<div className='contentRow'>
							<ul>
								<li><a href={this.props.repoLink}>repository</a>{this.props.host?" ("+this.props.host+")":''}</li>
								<li><a href={this.props.projectLink}>project</a></li>
							</ul>
						</div>
						<div className='contentRow'><h4>libraries</h4></div>
						<div className='contentRow'><List listItems={this.props.libs} /></div>
						<div className='contentRow>'>{this.props.description}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Project