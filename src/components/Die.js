
export default function Die(props) {
	function dotsOnDice() {
		if(props.value === 1) {
			return <>
			<div onClick={props.holdDice} style={styles} className="die first-face">
			<h2 className="invisible">{props.value}</h2>
			<span className="dot"></span>
	  		</div>
			</>
		} else if (props.value === 2) {
			return <>
			<div onClick={props.holdDice} style={styles} className="die second-face">
			<h2 className="invisible">{props.value}</h2>
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			</>
		} else if (props.value === 3) {
			return <>
			<div onClick={props.holdDice} style={styles} className="die third-face">
			<h2 className="invisible">{props.value}</h2>
			<span className="dot"></span>
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			</>
		} else if (props.value === 4) {
			return <>
			<div onClick={props.holdDice} style={styles} className="die fourth-face">
			<h2 className="invisible">{props.value}</h2>
			<div className="column">
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			<div className="column">
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			</div>
			</>
		} else if (props.value === 5) {
			return <>
			<div onClick={props.holdDice} style={styles} className="die fifth-face">
			<h2 className="invisible">{props.value}</h2>
			<div className="column">
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			<div className="column">
			<span className="dot"></span>
			</div>
			<div className="column">
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			</div>
			</>
		} else if (props.value === 6) {
			return <>
			<div onClick={props.holdDice} style={styles} className="die sixth-face">
			<h2 className="invisible">{props.value}</h2>
			<div className="column">
			<span className="dot"></span>
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			<div className="column">
			<span className="dot"></span>
			<span className="dot"></span>
			<span className="dot"></span>
			</div>
			</div>
			</>
		}
	}
	
	const styles = {
		backgroundColor: props.isHeld ? "#59E391" : "white",
	}
	  return (
	<>	
	{dotsOnDice()}
	</>
	
	
  );
}