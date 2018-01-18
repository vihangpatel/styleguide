With Loading

```js
<Device>
	<Collection
		title="Discover"
		description="Events Happening Now"
		cards={[]}
		loading
	/>
</Device>
```
With actual data

```js
<Device>
	<Collection
		title="Discover"
		description="Events Happening Now"
		cards={
			[
				{
					name: "Today",
					description: "Events happening today",
					icon: "today",
					image:"http://in.bmscdn.com/expcards/weekend_planner_24-jul-2015_07-47.jpg",
					href:"http://in.bmscdn.com/expcards/weekend_planner_24-jul-2015_07-47.jpg"
				},
				{
					name: "Tomorrow",
					description: "Events happening tomorrow",
					icon: "tomorrow",
					image:"http://in.bmscdn.com/expcards/weekend_planner_24-jul-2015_07-47.jpg"
				},
				{
					name: "Weekend",
					description: "Events happening over the weekend",
					icon: "weekend",
					image: "http://in.bmscdn.com/expcards/weekend_planner_24-jul-2015_07-47.jpg"
				}
			]
		}
	/>
</Device>
```