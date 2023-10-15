import { Typography, Grid, Box } from "@mui/material";

const Projects = () => {
	return (
		<Box marginTop={"10%"}>
			<container>
				<Typography variant="h4" marginBottom={"3%"} align="center">
					Projects
				</Typography>
				<Grid container justifyContent={"space-around"}>
					<Grid item xs={3} textAlign={"center"}>
						Item 1
					</Grid>
					<Grid item xs={3} textAlign={"center"}>
						Item 2
					</Grid>
					<Grid item xs={3} textAlign={"center"}>
						Item 3
					</Grid>
				</Grid>
			</container>
		</Box>
	);
};
export default Projects;
