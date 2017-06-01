# Set Screen background
	Screen.backgroundColor = "#EE4444"


	Menu_1.animate
		x: 0
		options:
			time: .40
			curve: Spring

	Menu_1.x = -301
	Menu_1.y = 0
# 	globalSection.x = 360

	select.states.a =
		x: 0
		width: 50
		
	select.states.b =
		x: 82
		width: 68
				
	Menu_1.states.b =
		x: 0
		y: 0


	Menu_1.states.a =
		x: -300
		y: 0
		
	All.states.a =
		x: 0

	All.states.b =
		x: 300

# 	globalSection.states.a =
# 		x: 360
# 		opacity: 1
# 		
# 	all_Section.states.a =
# 		x: -360
		
	Menu.onClick (event, layer) ->
	
		Menu_1.animate "b",
			time: .6
			curve: Spring

		All.animate "b",
			time: .6
			curve: Spring

		Menu.onClick (event, layer) ->

			Menu_1.animate "a",
				time: .3
				curve: Bezier.easeInOut
				
			All.animate "a",
				time: .3
				curve: Bezier.easeInOut


	Global_Button.onClick (event, layer) ->
		pages.snapToPage globalSection
		select.animate "b",
			time: .35
			curve: Bezier.easeInOut
# 
	All_Button.onClick (event, layer) ->
		pages.snapToPage all_Section
		select.animate "a",
			time: .35
			curve: Bezier.easeInOut
# 		all_Section.animate "b",
# 			time: .35
# 			curve: Bezier.easeInOut
# 
# 		select.animate "a",
# 			time: .35
# 			curve: Bezier.easeInOut
# 			
# 
# 		globalSection.animate "a",
# 			time: .35
# 			curve: Bezier.easeInOut
			
	page = [all_Section, globalSection]

	pages = PageComponent.wrap(all_Section)
	pages.addPage(globalSection)

	pages.scrollVertical = false
	
	pages.animationOptions =
		curve: Bezier.ease
		time: 0.25
			
	pages.on 'change:currentPage', ->
		if pages.horizontalPageIndex(pages.currentPage) == 1
			select.animate "b",
				time: .35
				curve: Spring
		if pages.horizontalPageIndex(pages.currentPage) == 0
			select.animate "a",
				time: .35
				curve: Spring
	
# 	console.log "hi"



