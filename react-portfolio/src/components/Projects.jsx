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
	align: "center",
	marginTop: "8%",
	marginBottom: "10%",
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
				<Grid container justifyContent={"space-around"}>
					<Grid item xs={12} md={4} textAlign={"center"}>
						<Card>
							<CardContent>
								<Typography {...headerStyle}>
									Countries App
								</Typography>
								<Typography>
									A front-end application, serving as a hub of
									information for all the countries in the
									world by fetching data from an API server
								</Typography>
							</CardContent>
							<LinkButtons />
						</Card>
					</Grid>
					<Grid item xs={3} textAlign={"center"}>
						<Card>
							<CardContent>
								<Typography {...headerStyle}>
									Library App
								</Typography>
								<Typography>
									A full-stack MERN application built from
									scratch, serving as a library. It has a
									backend server that uses MongoDB for data
								</Typography>
							</CardContent>
							<LinkButtons visit={"false"} />
						</Card>
					</Grid>
					<Grid item xs={3} textAlign={"center"}>
						<Card>
							<CardContent>
								<Typography {...headerStyle}>
									Java SpringBoot Library
								</Typography>
								<Typography>
									A BackEnd API server application built from
									scratch, serving for the same library
									project as the above-mentioned
								</Typography>
							</CardContent>
							<LinkButtons visit={"false"} />
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
export default Projects;
