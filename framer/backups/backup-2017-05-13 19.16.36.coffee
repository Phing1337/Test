# Show Hints
Framer.Extras.Hints.enable()

# Import file "FramerTest" (sizes and positions are scaled 1:2)
figma = Framer.Importer.load("imported/FramerTest@2x")

logIn = figma.Group_36
Plan = figma.Group_31
Collections = figma.Collections
Collections.x = 0
Collections.y = 0
Collections.index = 0
Collections.opacity = 0





Screen1 = figma.Home
Screen1.x = 0
Screen1.y = -1336
Screen1.index = 1
Screen1.opacity = 0

Panel = figma.Menu_Side_Bar
Panel.x = -650
Panel.y = 50
## login animation to first page ##
Page = [Screen1, Collections]
logIn.on Events.Click, ->
	logIn.animate
		properties:
			scale: .95
		time: 0.5
		curve: Spring(500, 10, 10)
	figma.Log_In_Page.animate
		properties:
			y: 1334
		time: .5
		delay: .3
		curve: 'spring'
		
	Screen1.animate
		properties:
			y:0
			opacity: 1
		time: .5
		delay: .3
		curve: 'spring'

##menu animation ##		

	Screen1.states.a =
		scale: 0.79
		rotationY: 45
		x: 410
		y: 8
		
		
Menu = [figma.menu_5, figma.Menu]

Screen1.states.b =
	x: 0
	y:0
	scale: 1.00
	rotation: 0
	rotationY: 0

Panel.states.a =
	opacity: 1.00
	x: 0	
Panel.states.b =
	x: -650
	
	
# Menu.on Events.Click, ->
# 	this.superLayer.stateCycle('a', 'b')
# 	Panel.stateCycle('a','b')
# 	this.superLayer.animate "a",
# 		time: 0.50
# 		curve: Spring(damping: 0.42)
# 		delay: 0.00
# 	Panel.animate "a",
# 		time: 0.50
# 		curve: Spring(damping: 0.42)
# 		delay: 0.00

figma.Search_Navigation_Bar.on Events.Click, ->
	this.superLayer.animate
	Panel.stateCycle('a','b')
	this.superLayer.animate "b",
		time: 0.50
		curve: Spring(damping: 0.42)
		delay: 0.00
	Panel.animate "b",
		time: 0.50
		curve: Spring(damping: 0.42)
		delay: 0.00
	
# Menu.on Events.Click, ->
# 	Screen1.animate
# 		properties:
# 			x:310
# 			rotationY: 45
# 		time: .5
# 		curve: "spring"


	

	Panel.animate "a",
		time: 0.50
		curve: Spring(damping: 0.42)
		delay: 0.00


Plan.on Events.Click, ->
	Screen1.animate
		properties:
			y: 1334
		time: .5
		curve: 'spring'
	Collections.animate
		properties:
			opacity: 1
	
# Menu.on Events.Click, ->
# 	Collections.opacity = .5
# 	Screen1.opacity = .5
# 	console.log 'menu Clicked'	
	for options in Menu
		if menu
				