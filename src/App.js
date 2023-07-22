// App.js

import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";

function App() {
	
	const [search, setSearch] = useState("");
	const [crypto, setCrypto] = useState([]);

	
	useEffect(() => {
		Axios.get(
			`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
		).then((res) => {
			setCrypto(res.data.coins);
		});
	}, []);

	return (<div>
		<Header 
    setSearch={setSearch}/>
    <Table 
    search={search}
    setSearch={setSearch}
    crypto={crypto}
    setCrypto={setCrypto}
    />
			
		</div>
	);
}

export default App;
