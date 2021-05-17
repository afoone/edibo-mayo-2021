import React from 'react'
import CommentsList from './components/CommentsList'
import UsersList from './components/UsersList'

function App() {
  return <div className="app">
   <UsersList></UsersList>
   <CommentsList></CommentsList>
  </div>;
}

export default App;
