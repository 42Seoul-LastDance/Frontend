'use client'

import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
	const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({
	  loaderUrl: "build/SocketTest.loader.js",
	  dataUrl: "build/SocketTest.data.unityweb",
	  frameworkUrl: "build/SocketTest.framework.js.unityweb",
	  codeUrl: "build/SocketTest.wasm.unityweb",
	});
  
	const [gameOver, setGameOver] = useState<boolean>(false);
  
	// react to unity
	function StartEvent() {
	  sendMessage("GameManager", "StartGame");
	}
	function RestartEvent() {
	  sendMessage("GameManager", "RestartGame");
	  setGameOver(false);
	}
  
	// unity to react
	const handleGameOver = useCallback(() => {
	  setGameOver(true);
	}, [setGameOver]);
  
	useEffect(() => {
	  addEventListener("GameOver", handleGameOver);
	  return () => {
		removeEventListener("GameOver", handleGameOver);
	  };
	}, [addEventListener, removeEventListener, handleGameOver]);
  
	return (
	  <Fragment>
		<div className="Game">
		  {gameOver === true && <p>{`Game Over!`}</p>}
		  <button onClick={StartEvent}> 시작 </button>
		  <button onClick={RestartEvent}> 재시작 </button>
		  <Unity unityProvider={unityProvider} style={{ width: 1280, height: 720 }} />
		</div>
	  </Fragment>
	);
  }
  
  export default Game