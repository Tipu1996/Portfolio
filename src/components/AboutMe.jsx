import { Typography, Grid } from "@mui/material";

const typographyStyle = {
	display: "block",
	align: "center",
	marginBottom: "4%",
};

const AboutMe = () => {
	return (
		<Grid container justifyContent={"center"} marginTop={"3%"}>
			<Grid item xs={8} md={4}>
				<Typography
					variant="h4"
					align="center"
					marginBottom={"5%"}
					gutterBottom
				>
					ABOUT ME
				</Typography>
				<Typography {...typographyStyle}>
					I'm a versatile full-stack developer passionate about
					creating seamless web experiences. With expertise in
					JavaScript/TypeScript, React, and Express, I craft intuitive
					user interfaces and robust back-end solutions
				</Typography>
				<Typography {...typographyStyle}>
					I'm also a cybersecurity enthusiast, skilled in web app
					security using tools like ZAP and Burp Suite. Committed to
					innovation, I've contributed to dynamic web apps and secure,
					user-centric software. My goal is simple: creating impactful
					digital solutions
				</Typography>
				<Typography {...typographyStyle}>
					Let's collaborate and turn your ideas into web realities
				</Typography>
			</Grid>
		</Grid>
	);
};
export default AboutMe;
