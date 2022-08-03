import React from 'react';

import './index.scss';

const baseClass = 'after-dashboard';

const AfterDashboard: React.FC = () => {
	return (
		<div className={baseClass}>
			<h4>Welcome to Ambassy</h4>
			<p>Ambassy & Payload Project Test</p>
			<h4><a
					href="/api/graphql-playground" target="_blank">GraphQL playground</a></h4>
	
		</div>
	);
};

export default AfterDashboard;
