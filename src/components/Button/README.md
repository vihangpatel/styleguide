Button: Can choose between the button variants or the color of their choice
```js
  <Box row>
   <Box padding="5">
    <Button buttonVariant='default' isEnabled width={100} height={35} label='Default' showLoader/>
   </Box>
   <Box padding="5">
    <Button buttonVariant='primary' isEnabled width={100} height={35} label='Primary' />
    </Box>
   <Box padding="5">
    <Button buttonVariant='danger' isEnabled width={100} height={35} label='Danger' />
    </Box>
    <Box padding="5">
    <Button buttonVariant='success' isEnabled width={100} height={35} label='Success' />
   </Box>
   <Box padding="5">
    <Button buttonVariant='info' isEnabled width={100} height={35} label='Info' />
    </Box>
   <Box padding="5">
    <Button buttonVariant='accent' isEnabled width={100} height={35} label='Accent' />
    </Box>
  </Box>
```