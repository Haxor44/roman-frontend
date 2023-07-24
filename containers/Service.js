import React from "react";
import { useNavigate } from "react-router-dom";
import {Box} from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import mechanic from "../images/mechanic.jpg";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Checkout from './Checkout';
import ServiceDetail from './ServiceDetail';


const Service = () => {
  const navigate = useNavigate();
    return(
        
          <Box  flex={4}>
            
            <Card sx={{ maxWidth: 600,margin:6 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="John Doe"
        subheader="Mechanic"
      />
      <CardMedia
        component="img"

        height="20%"
        image={mechanic}
        alt="Mechanic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          <h4>Price:Ksh10,000</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     
        <IconButton aria-label="purchase">
          <Button variant="contained">Get Service</Button>
        </IconButton>
         <IconButton aria-label="add to favorites">
          <Rating name="size-medium" defaultValue={2} />
        </IconButton>
      </CardActions>

    </Card>


    <Card sx={{ maxWidth: 600,margin:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="John Doe"
        subheader="Mechanic"
      />
      <CardMedia
        component="img"

        height="20%"
        image={mechanic}
        alt="Mechanic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          <h4>Price:Ksh20,000</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     
        <IconButton aria-label="purchase">
          <Button variant="contained" onClick={()=> navigate("/serviceDetail")}>Get Service</Button>
        </IconButton>
         <IconButton aria-label="add to favorites">
          <Rating name="size-medium" defaultValue={2} />
        </IconButton>
      </CardActions>

    </Card>


    <Card sx={{ maxWidth: 600,margin:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="John Doe"
        subheader="Mechanic"
      />
      <CardMedia
        component="img"

        height="20%"
        image={mechanic}
        alt="Mechanic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          <h4>Price:Ksh30,000</h4>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     
        <IconButton aria-label="purchase">
          <Button variant="contained">Get Service</Button>
        </IconButton>
         <IconButton aria-label="add to favorites">
          <Rating name="size-medium" defaultValue={2} />
        </IconButton>
      </CardActions>

    </Card>
          </Box>
        
      )
  
}





export default Service;