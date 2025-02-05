import { useState } from "react";
import Button from "./Button";

function AddFriendForm({ onAddFriend }) {
    const [friend, setFriend] = useState({name:"", image:"https://i.pravatar.cc/48"});

    const handleSubmit = (e)=> {
      e.preventDefault();
  
      if (!friend.name || !friend.image) return;
  
      const id = crypto.randomUUID();
      const newFriend = {
        id,
        name: friend.name,
        image: `${friend.image}?=${id}`,
        balance: 0,
      };
  
      onAddFriend(newFriend);
  
      setFriend({ name: "", image: "https://i.pravatar.cc/48" });
    }

    const handleChange = (e)=> {
      const { name, value } = e.target;
      setFriend((prevFriend) => ({
        ...prevFriend,
        [name]: value,
      }));
    }
  
    return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👫 Friend name</label>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={handleChange}
        />
  
        <label>🌄 Image URL</label>
        <input
          type="text"
          name="image"
          value={friend.image}
          onChange={handleChange}
        />
  
        <Button>Add</Button>
      </form>
    );
  }
  

export default AddFriendForm