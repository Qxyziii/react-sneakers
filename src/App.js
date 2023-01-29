import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
	return (
		<div className="wrapper clear">
			<Drawer />
			<Header />
			<div className="content p-40">
				<div className="d-flex align-center justify-between mb-40">
					<h1>Всe кросcовки</h1>
					<dir className="search-block d-flex">
						<img src="img/search.svg" alt="Search" srcset="" />
						<input type="text" placeholder="Поиск..." />
					</dir>
				</div>

				<div className="d-flex">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
