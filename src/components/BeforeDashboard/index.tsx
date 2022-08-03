import React from 'react';
import { Banner, Check } from 'payload/components';

import './index.scss';

const baseClass = 'before-dashboard';

const BeforeDashboard: React.FC = () => {
	return (
		<div className={baseClass}>
			<Banner type="success">
				<Check />
				<strong>Let's Get This Bread💰</strong>
			</Banner>
		</div>
	);
};

export default BeforeDashboard;
