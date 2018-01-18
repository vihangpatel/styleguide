VenueScrollList:

```js
    <VenueScrollList
        isLoading={false}
        lockWidth
        venues={
            [
                {
                    imageUrl: '//in.bmscdn.com/venueimages/venuelisting/GEKE.jpg',
                    venueName: 'Actor Prepares',
                    href: () => {console.log("Redirecting to GEKE venue page.")}
                },
                {
                    imageUrl: '//in.bmscdn.com/venueimages/venuelisting/GEKE.jpg',
                    venueName: 'Actor Prepares 2',
                },
                {
                    imageUrl: '//in.bmscdn.com/venueimages/venuelisting/GEKE.jpg',
                    venueName: 'Actor Prepares 3',
                },
                {
                    imageUrl: '//in.bmscdn.com/venueimages/venuelisting/GEKE.jpg',
                    venueName: 'Actor Prepares 4',
                },
                {
                    imageUrl: '//in.bmscdn.com/venueimages/venuelisting/GEKE.jpg',
                    venueName: 'Actor Prepares 5',
                }
            ]
        }
        
     />

```
Loading VenueScrollList: 
```js
    <VenueScrollList isLoading={true} lockWidth />
```


   

