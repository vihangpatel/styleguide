NavBar:

```js
<NavBar
	noBack
	listArray={[
		{
			title: 'events',
			isActive: true,
			href: () => {
				console.log('Redirecting to home')
			},
		},
		{
			title: 'plays',
			isActive: false,
			href: 'http://in.bookmyshow.com/mumbai/plays',
		},
		{
			title: 'sports',
			isActive: false,
			href: () => {
				console.log('Redirecting to sports')
			},
		},
	]}
/>
```

NavTitle:

```js
<NavBar
	title="Venue"
	href={() => {
		console.log('Go Back')
	}}
/>
```

NavTitle with button:

```js
<NavBar
	title="Venue"
	href={() => {
		console.log('Go Back')
	}}
	buttonRight="Reset"
	buttonProps={{
		buttonVariant: 'primary',
		isEnabled: true,
		width: '60',
		height: '25',
		label: 'Reset',
		click: this.handleResetDate,
		isLink: true,
	}}
/>
```
