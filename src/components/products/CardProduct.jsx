import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";


export default function CardProduct({ item }) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  return (
    <div className="name1-in">
      <div className="dis-card">
        <img src={item.picture} alt="card" height={128} width={100} />
        <div
          className="dis-name"
          style={{ marginLeft: "3.4%", marginTop: "1%" }}
        >
          <b>{item.name}</b>
          <div className="added">
            Tier:
            <b className="tier-num"> {item.tier}</b>
          </div>
        </div>
        <span className="type-name">{item.type}</span>
        <div className="price-all">
          $
          <b className="price-c">
            {"\u00a0"}
            {item.price}
          </b>
        </div>
        <div className="buy-but">
          <button className="button-buy" role="button">
            Buy now
          </button>
        </div>
        <div className="admin-check">
          <div className="edit-but">
            <button className="but-adm-icon" onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </button>
          </div>
          <div className="delete-but">
            <button
              className="but-adm-icon"
              onClick={() => deleteProduct(item.id)}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
