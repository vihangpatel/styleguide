React component example:

```js
<EventSlider events={[
        {
            src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
            name: "Dummy Event",
            href: () => { console.log('From card 1') }
        },
        {
            src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
            name: "Dummy Event",
            href: 'http://in.bookmyshow.com'
        },
        {
            src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
            name: "Dummy Event"
        }
    ]} 
/>
```
Slider inside phone

```js
<Device>
    <EventSlider events={[
            {
                src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
                name: "Dummy Event"
            }, 
            {
                src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
                name: "Dummy Event"
            },
            {
                src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
                name: "Dummy Event"
            },
            {
                src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
                name: "Dummy Event"
            }, 
            {
                src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
                name: "Dummy Event"
            },
            {
                src: "//in.bmscdn.com/webin/test-m6/event-card-test.jpg",
                name: "Dummy Event"
            }
        ]}  />
</Device>