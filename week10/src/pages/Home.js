import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>홈</h1>

			<ul>
				<li>
					<Link to="/naye">나예집</Link>
				</li>
                <li>
					<Link to="/moonbear">화이트 퍼피 하우스</Link>
				</li>
                <li>
					<Link to="/books">책방</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;