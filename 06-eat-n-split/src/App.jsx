/** @format */

import { useState } from "react"
import data from "./data"
import AddFriendForm from "./components/AddFriendForm"
import Button from "./components/Button"
import FriendList from "./components/FriendList"
import SplitBillForm from "./components/SplitBillForm"
export default function App() {
  const [friends, setFriends] = useState(data)
  const [showAddNewFriendForm, setShowAddNewFriendForm] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const handleShowNewFriendFrom = () => {
    setShowAddNewFriendForm((show) => !show)
  }

  const handleAddNewFriend = (newFriend) => {
    setFriends((prev) => [...prev, newFriend])
    setShowAddNewFriendForm(false)
  }

  const handleSelection = (friend) => {
    setSelectedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend,
    )
    setShowAddNewFriendForm(false)
  }

  const handleSplitBill = (amount) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + amount }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddNewFriendForm && (
          <AddFriendForm onAddFriend={handleAddNewFriend} />
        )}

        <Button onClick={handleShowNewFriendFrom}>
          {showAddNewFriendForm ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  )
}
