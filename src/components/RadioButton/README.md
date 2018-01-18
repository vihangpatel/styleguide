RadioButton:

```js
;<RadioButton
	size={35}
	isEnabled={true}
	isOn={false}
	isReadOnly={false}
	onToggle={input => {
		console.log(input)
	}}
/>
```

RadioMaterial:

Unchecked:

```js
;<RadioIcon
	label="Option 1"
	name="group-option-1"
	value="option1"
	checked
	onChange={() => {
		console.log('clicked')
	}}
/>
```

Unchecked:

```js
;<RadioIcon
	label="Option 1"
	name="group-option-1"
	value="option1"
	onChange={() => {
		console.log('clicked')
	}}
/>
```

Group: Needs to control the value by enternal state.

```js
;<RadioGroup
	value={'option1'}
	onChange={radio => {
		console.log('clicked')
	}}
>
	<RadioIcon label="Option 1" name="group-option-1" value="option1" />
	<RadioIcon label="Option 2" name="group-option-2" value="option2" />
</RadioGroup>
```
