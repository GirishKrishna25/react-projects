##### lastSlide - activeSlide - nextSlide (like circle)

###### opacity becomes 1 for only active slide and also we use overflow: hidden property.if we use use postiton: absolute, we must provide height to the element.

##### keys to remember

1. by default all the articles get the 'nextSlide' class and because of opactity: 0 in article and overflow: hidden in section, we don't see them in our UI.
2. we display the 'index' state value. so if 'index' === 'personIndex' in map, we replace nextSlide to activeSlide.
3. by default, for lastSlide we put the last element of the array by using 'index - 1' value. But for first, lastSlide would be the last item of the array.

4. to make this work effectively, we use 'useEffect' hook.
5. and for auto-slide we used useEffect with setInterval and clearInterval.
