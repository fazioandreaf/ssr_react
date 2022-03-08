import { useState, useContext } from "react";
import { InitialDataContext } from "./InitialDataContext";

export const useDataSSr = (resourceName, loadFunc) => {
	const context = useContext(InitialDataContext);
	const [data, setData] = useState(context._data[resourceName]);

	if (context._isServerSide) {
		context._request.push(
			loadFunc().then((res) => (context._data[resourceName] = res))
		);
		//client but the not have data
	} else if (!data) {
		loadFunc().then((res) => {
			setData(res);
			context._data[resourceName] = res;
		});
	}

	return data;
};
