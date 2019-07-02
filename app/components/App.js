import React from 'react'
import Nav from './Nav.js'
import Project from './Project.js'
import Footer from './Footer.js'
import 'reset-css'
import '../index.css'

const projectInfo=[
	{
		title:"wordcloud builder",
		projectLink:'https://peterhsteele.github.io/wordcloud/build/index.html',
		repoLink:'https://github.com/PeterHSteele/wordcloud',
		image:'../../assets/wordcloud.png',
		libs:['react','node.js','bootstrap'],
		description:''
	},
	{
		title:"space invaders",
		projectLink:'https://peterhsteele.github.io/they-came-from-above/build/index.html',
		repoLink:'https://github.com/PeterHSteele/they-came-from-above/',
		image:'../../assets/invaders.png',
		libs:['react','node.js','react-konva (canvas shapes)','react-spring (animations)'],
		description:''
	},
	{
		title:"food facts",
		projectLink:'https://peterhsteele.github.io/food-facts/build/index.html',
		repoLink:'https://github.com/PeterHSteele/food-facts',
		image:"../../assets/foodfacts.png",
		libs:['react','node.js','bootstrap','mongoose/mongodb','express'],
		description:'mongo database with simple front-end interface'
	},
	{
		title:'chatroom',
		projectLink:'https://react-socket-chat.glitch.me/',
		repoLink:'https://glitch.com/edit/#!/react-socket-chat?path=README.md:1:0',
		image:'../../assets/chat.png',
		libs:['react','node.js','express','socket.io','mongoose/mongodb'],
		host:'glitch'
	},
	{
		title:'the game of life',
		projectLink:'https://codepen.io/psteele1128/full/NaWQwZ',
		repoLink:'https://codepen.io/psteele1128/pen/NaWQwZ',
		image:'../../assets/life.png',
		libs:['react'],
		host:'codepen'
	},
	{
		title:'dungeon crawler',
		projectLink:'https://codepen.io/psteele1128/full/vjggeK',
		repoLink:'https://codepen.io/psteele1128/pen/vjggeK?editors=0110',
		image:'../../assets/rogue-like.png',
		libs:['react'],
		host:'codepen'
	},
	{
		title:'education choropleth',
		projectLink:'https://codepen.io/psteele1128/full/qKKemX',
		repoLink:'https://codepen.io/psteele1128/pen/qKKemX',
		image:'../../assets/choropleth.png',
		libs:['d3'],
		host:'codepen'
	},
	{
		title:'javascript calculator',
		projectLink:'https://codepen.io/psteele1128/full/MbZxPM',
		repoLink:'https://codepen.io/psteele1128/pen/MbZxPM',
		image:'../../assets/calculator.png',
		libs:['jquery'],
		host:'codepen'
	},
	{
		title:'tomato timer',
		projectLink:"https://codepen.io/psteele1128/full/woOrGV",
		repoLink:'https://codepen.io/psteele1128/pen/woOrGV',
		image:'../../assets/tomato.png',
		libs:['jquery'],
		host:'codepen'
	}
]

const frontendRepros = [
	{
		title:"pitchfork",
		projectLink:"https://peterhsteele.github.io/pitchfork-copycat/",
		repoLink:"https://github.com/PeterHSteele/pitchfork-copycat",
		image:'../../assets/p4k_copycat.png',
		libs:['html','css']
	},
	{
		title:"wells fargo",
		projectLink:"https://peterhsteele.github.io/wells-fargo-copycat",
		repoLink:"https://github.com/PeterHSteele/wells-fargo-copycat",
		image:"../../assets/wells_fargo.png",
		libs:["html","css"]
	}
]

const navItems=[
	{
		text:'projects',
		href:'#projects'
	},
	{
		text:'about me',
		href:'#aboutMe'
	},
	{
		text:'frontend reproductions',
		href:'#copycats'
	}
]
const footerItems=[
	{
		text:'github',
		link:'https://github.com/PeterHSteele'
	}
]

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			active:-1
		}

		this.handleMouseEnter=this.handleMouseEnter.bind(this);
		this.handleMouseLeave=this.handleMouseLeave.bind(this);
	}

	handleMouseEnter(e,projectNumber){
		this.setState({
			active:projectNumber
		})
	}

	handleMouseLeave(e){
		this.setState({
			active:-1
		})
	}

	render(){
		//nav
		const navLinks=navItems.map(e=><a className='navLink' href={e.href}>{e.text}</a>)
		let activeProject=this.state.active;
		
		//projects
		const that=this
		const projects=projectInfo.map(function(e,i){
			return (
				<li key={e.title}>
					<Project 
					handleMouseEnter={that.handleMouseEnter}
					handleMouseLeave={that.handleMouseLeave}
					active={i===activeProject}
					projectNumber={i}
					title={e.title}
					repoLink={e.repoLink}
					projectLink={e.projectLink}
					libs={e.libs}
					image={e.image}
					description={e.description}
					host={e.host}/>
				</li>
			)
		})

		const copycats = frontendRepros.map(function(e,i){
			return (
				<li key={e.title}>
					<Project
					handleMouseEnter={that.handleMouseEnter}
					handleMouseLeave={that.handleMouseLeave}
					active={i===activeProject}
					projectNumber={i}
					title={e.title}
					repoLink={e.repoLink}
					projectLink={e.projectLink}
					libs={e.libs}
					image={e.image}
					description={e.description}
					host={e.host}/>
				</li>
			)
		})

		//introduction to frontend reproductions section

		const copycatsOverview='Some frontend copies of various websites made with just html and css.'
							   

		//about me
		const aboutMe=function(){
			return (
				<p>full-stack web developer working in react, node.js, and mongodb. usually
				playing basketball <span role='image' ariaLabel='basketball'>🏀</span> or off in the woods.</p>
			)
		}

		const email = 'steele.peter.3@gmail.com'

		//footer
		const footerLinks=footerItems.map((e)=>{
			return (
				<li key={e.text}>
					<a href={e.link}>{e.text}</a>
				</li>
			)
		})

		return(
			<div className='app'>
				<Nav navLinks={navLinks} />
				<section id="projects">
					<div className="contentRow"><h2>projects</h2></div>
					<ul>{projects}</ul>
				</section>
				<section id="copycats">
					<div className="contentRow"><h2>frontend reproductions</h2></div>
					<div className="contentRow"><p>{copycatsOverview}</p></div>
					<ul>{copycats}</ul>
				</section>
				<section id="aboutMe">
					<div className="contentRow"><h2>about me</h2></div>
					<div className="contentRow">{aboutMe()}</div>
					<div className="contentRow"><a href="mailto:steele.peter.3@gmail.com">{email}</a></div>
				</section>
				<Footer footerLinks={footerLinks}/>
			</div>
		)
	}
}

export default App