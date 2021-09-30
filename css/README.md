# Classes
## Slideshow
### Instance Variables
Name|Description|Initial value
-|-|-
`config`|Configuration|From constructor
`dom`|Element holding slide show|`config.dom`
`slides`|Array of slides|`config.slides`
`currentSlide`||`null`
`slideIndex`||`-1`
`objects`|Slide objects by name|`{}`

### Methods
* `reset()`: Resets slideshow to initial state, wipes `dom` element
* `clear()`: Removes all slide objects
* `nextSlide()`: Ends current slide, moves to next
* `gotoSlide(id)`:
* `add(objectConfig)`: Creates a new slide object of type `cfg.type` and returns value of `obj.add()`
* `remove(objId)`: Calls `obj.remove()` and returns its value

### Events Published
Name|Args|Description
-|-|-
`slideshow/slideChange`|`slideId`|Published when slide changed

### Events Listened
Name|Args|Description
-|-|-
`slideshow/next`||Calls `nextSlide()`
`slideshow/goto`|`slideId`|Calls `gotoSlide(slideId)`

## Slides
### Instance Variables
Name|Description|Initial value
-|-|-
`id`|Slide ID|Used by `slideshow.gotoSlide(id)`

### Methods
* `onstart(slideshow)`: Called when slide starts
* `onend(slideshow)`: Called when slide ends
* `onjump(slideshow)`: Called when slide is goto'ed

## Slide Objects

### Instance Variables
Name|Description|Initial value
-|-|-
`slideshow`||

### Methods
* `add()`: Called right away after creation
* `remove()`: Called when object is removed

## Button
### Configuration
Name|Description
-|-
`id`|Object ID
`text_id`|Text ID
`sound`|Sound ID to play when clicked, otherwise plays random `button[1,2,3]` sound
`active`|Boolean indicating initial active/inactive state, default `true`
`onclick`|Called when button pressed
`message`|Message published when button pressed
`size`|div size attribute
`tooltip`|Tooltip text ID
`uppercase`|Button text is uppercase

### Instance Variables
Name|Description|Initial value
-|-|-
`active`|Boolean indicating if button is active|`true`

### Methods
* `setText(textId)`: Set text by ID
* `setText2(words)`: Set text literally
* `deactivate()`: Deactivate button
* `activate()`: Activate previously deactivated button

### Messages listened
Name|Args|Description
-|-|-
`[BUTTON_ID]/activate`||Activates button
`[BUTTON_ID]/deactivate`||Deactivates button

## `helpers.js`
### Methods
* `_add(slideObj)`: Adds `slideObj.dom` to slideshow element
* `_remove(slideObj)`: Removes `slideObj.dom` from slideshow
