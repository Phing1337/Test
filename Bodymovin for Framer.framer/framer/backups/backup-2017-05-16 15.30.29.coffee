# BodymovinLayer
# by @72mena
# Important: Don't forget to add the bodymovin plugin to your index.html
# ----------------
# Loading animation by @mhotovec
# Pen animation by @slykuiper
# Star animation by @MVHarvey

{BodymovinLayer} = require 'BodymovinLayer'

# Variables
pageCount = 3
gutter = 60
pagesHolder = []
colors = ["#03A9F4", "#FFF", "#607D8B"]

# PageComponent
pageScroller = new PageComponent
	point: Align.center
	width: Screen.width / 1.5
	height: Screen.height / 1.5
	scrollVertical: false
	clip: false
pageScroller.content.clip = false

# Loop to create pages
for index in [0...pageCount]
	page = new Layer
		size: pageScroller.size
		x: (pageScroller.width + gutter) * index
		backgroundColor: colors[index]
		borderRadius: 10
		parent: pageScroller.content
		clip: false
	
	pagesHolder.push page

	page.onClick ->
		pageScroller.snapToPage(this)

# Labels
# headerLabel = new TextLayer
# 	text: "Bodymovin for Framer"
# 	fontSize: 32
# 	x: Align.center
# 	color: "#FFF"
# 	y: 24
# subheaderLabel = new TextLayer
# 	text: "Animations made in After Effects and exported as JSON files"
# 	fontSize: 24
# 	x: Align.center
# 	color: "#EEE"
#	y: 80


# Animations
# Lots of repetition here, but leaving it as is for the sake of clarity.

# Animation 1
animLoading = new BodymovinLayer
	name: "LoadingAnimation"
	path: "images/loading.json"
	size: 400
	parent: pagesHolder[0]
animLoading.center()

sizeLabel1 = new TextLayer
	text: "12 KB"
	parent: pagesHolder[0]
	x: Align.center
	color: "#FFF"
	y: -70
# author1 = new TextLayer
# 	text: "by @mhotovec"
# 	fontSize: 24
# 	parent: pagesHolder[0]
# 	x: Align.center
# 	color: "#888"
# 	y: pageScroller.height + 30

# Animation 2
# animPen = new BodymovinLayer
# 	name: "PenAnimation"
# 	path: "images/pen.json"
# 	size: 400
# 	parent: pagesHolder[1]
# animPen.center()

sizeLabel2 = new TextLayer
	text: "36 KB"
	parent: pagesHolder[1]
	x: Align.center
	color: "#FFF"
	y: -70
author2 = new TextLayer
	text: "by @slykuiper"
	fontSize: 24
	parent: pagesHolder[1]
	x: Align.center
	color: "#888"
	y: pageScroller.height + 30

# Animation 3
animStar = new BodymovinLayer
	name: "StarAnimation"
	path: "images/star.json"
	size: 400
	parent: pagesHolder[2]
animStar.center()

sizeLabel3 = new TextLayer
	text: "8 KB"
	parent: pagesHolder[2]
	x: Align.center
	color: "#FFF"
	y: -70
author3 = new TextLayer
	text: "by @MVHarvey"
	fontSize: 24
	parent: pagesHolder[2]
	x: Align.center
	color: "#888"
	y: pageScroller.height + 30


# On tap, change direction of animation.
animHolder = [animLoading, animPen, animStar]
for item in animHolder
	item.onTap ->
		if this.direction isnt 1
			this.direction = 1
		else
			this.direction = -1
