import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Donoras({ donor }) {
  const { id, firstName, lastName, age, gender, bloodGroup } = donor;

  return (
    <div className="donor-card">
      <Card>
        <CardContent className="donor-card-content">
          <Typography gutterBottom variant="h5" component="div">
            {firstName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {lastName}
          </Typography>
          <Typography>{age} metų</Typography>
          <Typography>{gender}</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {bloodGroup}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/donoro-informacija/${id}`}>
            <Button className="btn"> Peržiūrėti išsamiau</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Donoras;
