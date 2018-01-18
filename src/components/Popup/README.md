Pills:

```js
;<Popup
	show={false}
	config={{
		title: 'Reset Filters',
		content: 'Are you sure you want to reset all filters?',
		closeAction: () => {
			console.log('Clicked on close...')
		},
		verticalPosition: 'bottom',
		buttons: [
			{
				text: 'Yes',
				action: () => {
					console.log('Clicked on Yes')
				},
			},
		],
	}}
/>
```
