import {
	Typography,
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
	return (
		<Box marginTop={"7%"}>
			<AppBar position="relative">
				<Toolbar>
					<Grid container direction={"column"} alignItems={"center"}>
						<Grid item>
							<Typography variant="h6" paddingTop={"3%"}>
								Connect with me
							</Typography>
						</Grid>
						<Grid item container justifyContent={"center"}>
							<a href="https://github.com/Tipu1996">
								<IconButton
									aria-label="Facebook Icon"
									alignItems={"center"}
								>
									<Grid item>
										<GitHubIcon />
									</Grid>
								</IconButton>
							</a>
							<Grid item>
								<a href="https://www.linkedin.com/in/muhammad-abdullah-bin-ashfaq-691647140/">
									<IconButton
										aria-label="LinkedIn Icon"
										alignItems={"center"}
									>
										<LinkedInIcon />
									</IconButton>
								</a>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default Footer;
