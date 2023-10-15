import { Typography, Grid } from "@mui/material";

const AboutMe = () => {
	return (
		<Grid container justifyContent={"center"} marginTop={"3%"}>
			<Grid item xs={4}>
				<Typography
					variant="h4"
					align="center"
					marginBottom={"5%"}
					gutterBottom
				>
					ABOUT ME
				</Typography>
				<Typography
					variant="p"
					display="block"
					align="center"
					marginBottom={"2"}
				>
					I am a passionate full-stack developer with expertise in web
					app development and security testing. I excel in secure web
					app development, mastering web front and backend
					technologies.
				</Typography>
				<Typography variant="p" display="block" align="center">
					I have built front-end applications that serves as a hub of
					information for countries worldwide, and a full-stack MERN
					application with CRUD functionalities and user
					authentication.
				</Typography>
				<Typography variant="p" display="block" align="center">
					I am committed to integrating robust security measures into
					development and creating innovative, cyber-strong
					applications. I am currently pursuing a Master’s in
					Information Security to enhance digital landscapes and
					contribute to cutting-edge cybersecurity tools.
				</Typography>
			</Grid>
		</Grid>
	);
};
export default AboutMe;
