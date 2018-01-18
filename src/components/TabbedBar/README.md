```js
<TabbedBar tabsList={[{
	label: 'Today',
	active: true,
	href: () => { console.log('Today Clicked') }
},
{
	label: 'Tomorrow',
	href: () => { console.log('Tomorrow Clicked') }
},
{
	label: 'This Weekend',
	href: () => { console.log('This Weekend Clicked') }
},
{
	label: 'All',
	href: () => { console.log('All Clicked') }
}]}/>
```