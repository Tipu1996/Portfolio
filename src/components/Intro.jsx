import { Typography, Grid } from "@mui/material";

const Intro = () => {
	return (
		<Grid
			container
			marginY={"10%"}
			justifyContent={"space-around"}
			alignItems={"center"}
		>
			<Grid item xs={6}>
				<Typography variant="h5" marginBottom={"3%"}>
					Hi, I am Abdullah Ashfaq
				</Typography>
				<Typography variant="h4">
					I am experienced FullStack Developer with a passion of
					building efficient, secure and exceptional web applications
				</Typography>
			</Grid>
			<Grid item xs={3}>
				<img
					src="/public/devImg.jpg"
					alt="devImage"
					style={{
						borderRadius: "50%",
						width: "100%",
						height: "100%",
					}}
				/>
			</Grid>
		</Grid>
	);
};
export default Intro;
