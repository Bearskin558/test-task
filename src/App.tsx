import "./App.css"
import Burger from "./components/Burger/Burger"
import ClientCard from "./components/ClientCard/ClientCard"
import Filters from "./components/Filters/Filters"
import Products from "./components/Products/Products"

function App() {
	return (
		<div className="app">
			<ClientCard />
			<Burger />
			<div className="products-block">
				<Filters />
				<Products />
			</div>
		</div>
	)
}

export default App
