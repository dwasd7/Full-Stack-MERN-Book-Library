import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();


  const { _id, name, author, description, tier, image } = props.book;

  const deleteBook= async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Tier Number: {tier}</h4>    
      <div className="changebutton">
        <Button variant= "contained" LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
          Update
        </Button>
        <Button variant= "contained" color="error" onClick={deleteBook} sx={{ mt: "auto" }}>
          Delete
        </Button>
      </div>
    </div>
  );
};
export default Book;