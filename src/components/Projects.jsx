import {
	Typography,
	Grid,
	Box,
	Card,
	CardContent,
	Container,
} from "@mui/material";
import LinkButtons from "./LinkButtons";

const headerStyle = {
	variant: "h6",
	marginTop: "6%",
	marginBottom: "5%",
};

const gridItemStyle = {
	xs: "12",
	md: "4",
	textAlign: "center",
};

const cardContentStyle = {
	whiteSpace: "pre-line",
	overflow: "hidden",
	textOverflow: "ellipsis",
	maxHeight: "6em",
	minHeight: "6em",
};

const skillStyles = {
	lineHeight: "1.5rem",
	minHeight: "3rem",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	marginBottom: "5%",
	justifyContent: "center",
	color: "#EBC85E",
};

const skills = [
	"React",
	"TS",
	"Redux",
	"Node.js",
	"Express.js",
	"MongoDB",
	"Postgres",
];

const projects = [
	{
		name: "Countries App",
		skills: ["React", "TS", "Redux"],
		description:
			"A front-end application, serving as a hub of information for all the countries in the world by fetching data from an API server",
		visit: true,
		url: "https://friendly-cocada-f19b07.netlify.app/",
		sourceCode: "https://github.com/Tipu1996/FrontEnd-Countries-App",
	},
	{
		name: "Library App",
		skills: skills, // You can use the 'skills' array here.
		description:
			"A full-stack MERN application built from scratch, serving as a library. It has a backend server that uses MongoDB for data",
		visit: false,
		url: null,
		sourceCode: "https://github.com/Tipu1996/Full-Stack-MERN-Library-App",
	},
	{
		name: "Java SpringBoot Library Server",
		skills: ["Java", "SpringBoot"],
		description:
			"A BackEnd API server application built from scratch, serving for the same library project as the above-mentioned",
		visit: false,
		url: null,
		sourceCode:
			"https://github.com/Tipu1996/JavaSpringBoot-BackEnd-Library-Server",
	},
];

const renderProjectCards = () => {
	return projects.map((project, index) => (
		<Grid
			item
			{...gridItemStyle}
			key={index}
			justifyContent={"center"}
			xs={10}
			md={4}
		>
			<Card>
				<CardContent>
					<Typography {...headerStyle}>{project.name}</Typography>
					<div className="skills" style={skillStyles}>
						{project.skills.map((skill, skillIndex) => (
							<Typography
								key={skillIndex}
								variant="body2"
								style={{ marginRight: "1rem" }}
							>
								{skill}
							</Typography>
						))}
					</div>
					<Typography style={cardContentStyle}>
						{project.description}
					</Typography>
				</CardContent>
				<LinkButtons
					visit={project.visit}
					url={project.url}
					sourceCode={project.sourceCode}
				/>
			</Card>
		</Grid>
	));
};

const Projects = () => {
	return (
		<Box marginTop={"10%"}>
			<Container>
				<Typography variant="h4" marginBottom={"3%"} align="center">
					Projects
				</Typography>
			</Container>
			<Container>
				{/** this container replaces the very long Container commented out below */}
				<Grid container spacing={4} justifyContent={"center"}>
					{renderProjectCards()}
				</Grid>
			</Container>
			{/* <Container>
				<Grid container spacing={4}>
					<Grid item {...gridItemStyle}>
						<Card>
							<CardContent>
								<Typography {...headerStyle}>
									Countries App
								</Typography>
								<div className="skills" style={skillStyles}>
									<Typography
										variant="body2"
										style={{ marginRight: "1rem" }}
									>
										React
									</Typography>
									<Typography
										variant="body2"
										style={{ marginRight: "1rem" }}
									>
										TS
									</Typography>
									<Typography variant="body2">
										Redux
									</Typography>
								</div>
								<Typography style={cardContentStyle}>
									A front-end application, serving as a hub of
									information for all the countries in the
									world by fetching data from an API server
								</Typography>
							</CardContent>
							<LinkButtons />
						</Card>
					</Grid>
					<Grid item {...gridItemStyle}>
						<Card>
							<CardContent>
								<Typography {...headerStyle}>
									Library App
								</Typography>
								<div className="skills" style={skillStyles}>
									{skills.map((skill, index) => (
										<Typography
											key={index}
											variant="body2"
											style={{ marginRight: "1rem" }}
										>
											{skill}
										</Typography>
									))}
								</div>
								<Typography style={cardContentStyle}>
									A full-stack MERN application built from
									scratch, serving as a library. It has a
									backend server that uses MongoDB for data
								</Typography>
							</CardContent>
							<LinkButtons visit={"false"} />
						</Card>
					</Grid>
					<Grid item {...gridItemStyle}>
						<Card>
							<CardContent>
								<Typography {...headerStyle}>
									Java SpringBoot Library
								</Typography>
								<div className="skills" style={skillStyles}>
									<Typography
										variant="body2"
										style={{ marginRight: "1rem" }}
									>
										Java
									</Typography>
									<Typography
										variant="body2"
										style={{ marginRight: "1rem" }}
									>
										SpringBoot
									</Typography>
								</div>
								<Typography style={cardContentStyle}>
									A BackEnd API server application built from
									scratch, serving for the same library
									project as the above-mentioned
								</Typography>
							</CardContent>
							<LinkButtons visit={"false"} />
						</Card>
					</Grid>
				</Grid>
			</Container> */}
		</Box>
	);
};
export default Projects;
