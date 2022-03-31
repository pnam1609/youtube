import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';


import css from './App.module.less';
import Home from '../Views/Home/Home';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Panels>

			</Panels>
		</div>
	)
});

export default ThemeDecorator(App);
