# Customer Support
Your task today is to build the visual interface for a customer support service.

The data for the service can be fetched at https://kea-alt-del.dk/customersupport/

Each item in the array is what I call a "request" in the rest of this document

The endpoint provides one additional parameter you can work with if you like

| Parameter | What it does |
| --- | --- |
| count=10 | sets the amount of returned support requests |

All requests are generated randomly each time data is fetched
 
## Example
https://kea-alt-del.dk/customersupport/?count=10

### "Required tasks"
The following tasks are "required", meaning you should complete them unless you can come up with better solution than my suggestion

* Each request should be presented in a clear way so that the employees can get a quick overview of the requests
* Each request has an `importance` indicating how quickly the support team should handle the request. I suggest you use color codes to show the importance (red when it's close to 100, green when it's close to 0)
* Each request has a property called `full`. This contains additional information that should not be visible initiallly, only when requested (like "read more")
* The support team should be able to mark a request as completed (remove from from the DOM). Consider animating the removal so that it's clear to the end user that it's being removed. The event `animationend` could prove helpfull here

### Suggested tasks
* Create some sort of visual indication of the amount of requests in the queue, a progress bar? a dial? just a number?

### Hints & ideas
* Focus on the details, let's see some awesome transitions on hover
* It's OK to find stuff online, like a preloader from codepen, snippets from stackoverflow
* jQuery, GSAP or similar is also OK. But before you pull in a huge library, consider if it's something you could do in vanilla JS

#### The idea
1. Practice JS in a less strict setting
2. Have a bigger project to play with
3. Recap `fetch` and `<template>`
4. We (the teachers) will get a feeling for "where you are", which is also why we'll all three be there

#### Final notes
Hand in your solution on fronter before Monday


