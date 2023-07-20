import React from "react";
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

class Suggestions extends React.Component{


	render(){

		return(
				<Box flex={2} p={2}  sx={{display:{xs:"none", sm:"block"}}}>
					<Box position="fixed">
						<List>
							<ListItem>
								<Typography variant="h4" fontWeight={100}>
									Suggestions
								</Typography>
							</ListItem>
						</List>
						

					</Box>				
				</Box>
			);
	}
}

export default Suggestions;