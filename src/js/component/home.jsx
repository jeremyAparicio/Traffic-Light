import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Luces = () => {
	const [ color, setColor] = useState("red");
	console.log(color)
	return (
		<div className="text-center">
			<div className="semaforo">
				<div className="glass">
					<button className={color === "red" ? "red":"grey"} type="button" onClick={() => setColor("red")}></button>
				</div>
				<div className="glass">
					<button className={color === "yellow" ? "yellow":"grey"} type="button" onClick={() => setColor("yellow")}></button>
				</div>
				<div className="glass">
					<button className={color === "green" ? "green":"grey"} type="button" onClick={() => setColor("green")}></button>
				</div>
			</div>
		</div>
	)
	
};
export default Luces;
