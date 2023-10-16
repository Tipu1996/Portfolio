import { Button, CardActions } from "@mui/material";

const LinkButtons = ({ visit, url, sourceCode }) => {
	return (
		<CardActions sx={{ justifyContent: "space-evenly", marginY: "3%" }}>
			{visit === false ? (
				<Button
					variant="contained"
					style={{
						borderRadius: "5rem",
						display: "none",
					}}
					disabled
				>
					VISIT
				</Button>
			) : (
				<Button
					variant="contained"
					style={{
						borderRadius: "5rem",
					}}
					href={url}
				>
					VISIT
				</Button>
			)}
			<Button
				variant="contained"
				style={{
					borderRadius: "5rem",
					fontWeight: "bold",
				}}
				href={sourceCode}
			>
				SOURCE CODE
			</Button>
		</CardActions>
	);
};
export default LinkButtons;
