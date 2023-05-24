import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Books from './pages/Books';
import Book from './pages/Book';

import ThumbsUp from "./ThumbsUp";

const App = () => {
	return (
    // <ThumbsUp />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:username" element={<Profile />} />
      <Route path="/books" element={<Books />}>
				<Route path=":id" element={<Book />} />
			</Route>
		</Routes>
	);
}; 

export default App;