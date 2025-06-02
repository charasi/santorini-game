1. What’s a pixel?
   Think of a pixel like a tiny square tile in a huge wall made of LEGO bricks.

Your computer screen is made of millions of these tiny squares.

Each square (pixel) can be a different color.

Together, all those colored squares make pictures.

🔢 2. How do we talk about where a pixel is?
Imagine a grid, like Excel or a battleship board:

Pixels are arranged in rows and columns.

You find a pixel by saying:
👉 (column number, row number)
For example, (3, 5) means:

Move 3 spaces to the right

Then go 5 spaces down

📌 Important:

Columns go left to right

Rows usually go top to bottom (like how most screens work)

But not always! Some systems (like OpenGL) count rows bottom to top.

🖼️ 3. Pixels vs. Points
A pixel is a square area, not just a dot.

A pixel contains infinite points inside it.
(Mathematically speaking – don’t stress, just know it’s not just a single point.)

We don't really "draw pixels." What we want is a smooth image, like a painting. But pixels are chunky squares — they're an approximation.

🧾 4. Drawing with pixels is messy
Let’s say you want to draw a line between two points.

A real line is infinitely thin, like a hair.

But a pixel is a fat little square.

If the line goes diagonally, it can’t perfectly fit into the square shapes.

So you get something called aliasing — which looks like:
🪜 jagged stairs instead of a smooth line

🎨 5. Antialiasing to the rescue
Antialiasing means:

"Let’s make jagged lines look smoother by blending colors."

How?

If a pixel is partially covered by the line, color it gray, instead of all black or all white.

That way the line fades into the background, instead of looking like sharp blocks.

It’s not perfect, but it looks much better.

🖌️ 6. Drawing at exact coordinates is tricky
Example: you try to draw a black 1-pixel-wide line from (100, 100) to (120, 100).

You think:

“It should draw straight across row 100.”

But graphics systems say:

“Hold on — we treat integer coordinates as lines between pixels, not their centers.”

So the line ends up being in between two rows, and both rows get a little gray.

If you draw from (100.5, 100.5) to (120.5, 100.5), the line is now centered exactly in one row, and it shows up as solid black.

📏 7. Pixels aren’t all the same size anymore
Old monitors:

About 72 pixels per inch
(You could see the pixels clearly)

Modern displays:

300+ pixels per inch

Tiny pixels — your eyes can’t see individual squares

Problem:

If you design something for 100 pixels per inch, it’ll look tiny on high-res displays.

Solution:

Some systems treat “pixel” as just a unit, not a physical size

It adjusts based on screen type

🧾 8. Vector graphics to the rescue
Vector graphics use math to describe shapes, not pixels.

They can be scaled to any size and still look perfect.

Only when it's time to actually draw them on screen, the system turns the shapes into pixels — that’s called rasterization.

🧠 TL;DR (Too Long; Didn’t Read)
Pixels are tiny colored squares on your screen.

Drawing smooth shapes with them is hard.

Antialiasing helps make jagged lines look smooth.

High-res screens make everything more complicated.

Vector graphics are better because they’re resolution-independent.

********************************************************************************************************

In most 2D graphics systems (like HTML canvas, many games, etc.):
x = column = how far you go side to side (left ↔ right)

y = row = how far you go up and down (top ↕ bottom)

So:

(x, y) = (column, row)

(3, 5) means:

Go 3 pixels right

Then 5 pixels down

✅ This is what most people are used to in 2D graphics.

🧭 BUT: Not all systems agree!
Some systems, like OpenGL, flip the y-axis:

The x (left-to-right) stays the same ✅

The y goes from bottom to top ❗

So in OpenGL:

(0, 0) is the bottom-left

In canvas or image editors, (0, 0) is usually the top-left

🧠 TL;DR:
Yes: x = column, y = row in most cases

Just always check:

🧭 Where is (0, 0)?

⬆️ Does y go up or down?

********************************************************************************************************
🧠 BIG IDEA #1: Coordinates aren’t always in pixels
When you're drawing graphics on a screen, you're working inside a rectangle (like a window or canvas). That rectangle is made up of pixels, yes — but you don’t have to think in pixel units.

Instead, you can think in whatever units make sense for your app:

Feet (for a floor plan)

Meters (for a map)

Inches, tiles, game squares... whatever.

This is called a real-number coordinate system — it’s just a way to describe positions using real (decimal) numbers, not pixel grid spots.

🧱 BIG IDEA #2: You define your own coordinate system
You can say:

The left edge of your drawing area is at x = 0

The right edge is at x = 15

The top edge is at y = 12

The bottom edge is at y = 0

In this case, your drawing area goes:

Horizontally: 0 to 15 (15 "units" wide)

Vertically: 0 to 12 (12 "units" tall)

🟢 This coordinate system has nothing to do with pixels — yet.

🔄 BIG IDEA #3: You need to map (convert) real coordinates to pixel coordinates
Let’s say your canvas (rectangle) is 800 pixels wide and 600 pixels tall. The computer doesn't understand your “15 feet by 12 feet” — it only knows pixels.

So, to actually draw something, you need to convert your real-world coordinate to a pixel.

If realX = 7.5 and realY = 6, where is that on the 800x600 pixel screen?

You use this formula:

ini
Copy
Edit
pixelX = ((realX - left) / (right - left)) * screenWidth
pixelY = ((realY - top) / (bottom - top)) * screenHeight
Let’s plug it in with numbers:

Your real coordinates go from left = 0 to right = 15

top = 0 to bottom = 12

screen width = 800

screen height = 600

real point = (7.5, 6)

Calculating pixelX:
bash
Copy
Edit
pixelX = ((7.5 - 0) / (15 - 0)) * 800
= (7.5 / 15) * 800
= 0.5 * 800
= 400
Calculating pixelY:
bash
Copy
Edit
pixelY = ((6 - 0) / (12 - 0)) * 600
= (6 / 12) * 600
= 0.5 * 600
= 300
🎯 So, your point (7.5, 6) in your real coordinate system ends up at pixel (400, 300) on the screen.

🧭 BIG IDEA #4: Coordinate directions matter
Here’s a curveball:

In many systems, y goes down as it increases (like HTML canvas, images).

In others (like OpenGL), y goes up as it increases.

The formulas still work. You just have to tell the formula:

Which number is top

Which number is bottom

The formulas don’t care which one is larger — they just stretch and flip as needed.

📐 BIG IDEA #5: Aspect Ratio
What is it?
Aspect ratio = how wide something is compared to how tall it is.

A square = 1:1 = aspect ratio 1

A widescreen TV = 16:9 = aspect ratio 16 ÷ 9 ≈ 1.78

A sheet of paper (8.5x11) = 8.5 ÷ 11 ≈ 0.77

Why does it matter?
If your coordinate system doesn’t match your screen’s shape, things look stretched or squished.

🟡 Example: Draw a circle x² + y² = 9

Looks like a perfect circle only if horizontal and vertical units are the same size on screen.

Otherwise, it becomes an oval (squashed circle).

✅ Solution: Match your coordinate system to your screen shape
To avoid distortion:

Make sure the aspect ratio of your coordinate system matches your drawing area.

How do you check the aspect ratio of your coordinate system?

Use:

sql
Copy
Edit
aspectRatio = abs((right - left) / (top - bottom))
Compare that to the screen’s aspect ratio:

ini
Copy
Edit
screenAspectRatio = widthInPixels / heightInPixels
If they match: no distortion ✅
If they don’t: you’ll have to adjust your coordinate system (like adding extra padding or shifting limits) to compensate.

🎯 TL;DR (Too Long; Didn't Read)
You don’t have to think in pixels — you can use real-world units

A coordinate system defines how you interpret “where” something is

You convert real coordinates → pixel coordinates with a formula

Make sure your aspect ratios match or your shapes will look wrong

Most graphics systems do this for you, but it’s vital to understand when designing custom graphics or doing math yourself
