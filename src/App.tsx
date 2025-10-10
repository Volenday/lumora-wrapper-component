import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TestRefreshComponent from './TestRefreshComponent';
import LumoraWrapper from './lib/components/LumoraWrapper';

// Main App component for development/testing purposes
const App = () => {
	const [count, setCount] = useState(0);
	const [showTestComponent, setShowTestComponent] = useState(false);

	return (
		<LumoraWrapper
			enableRefreshToken={true}
			showHeader={true}
			appName='Lumora Wrapper Test'
			pageName='Token Refresh Testing'
		>
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1>Vite + React + Lumora Wrapper</h1>
			<div className='card'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<button
					onClick={() => setShowTestComponent(!showTestComponent)}
					style={{ marginLeft: '10px' }}
				>
					{showTestComponent ? 'Hide' : 'Show'} Token Refresh Test
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>

			{showTestComponent && <TestRefreshComponent />}
		</LumoraWrapper>
	);
};

export default App;
