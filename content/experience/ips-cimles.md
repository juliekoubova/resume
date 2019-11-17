---
name: Interactive 3D Machining Visualization
vendor: IPS s.r.o.
from: 2018-10-01
tech:
  - WebGL
  - three.js
  - NGXS
  - D3
  - Angular
  - TypeScript
  - Node.js
  - WebSockets
---

Inherited a messy prototype of an app that would play a recording of a
machining run; turned it into a modern, maintainable, server-rendered Angular
application based on the [NGXS](https://github.com/ngxs/store/) state management library.


Later implemented playback of live data streamed over a web socket.
Created a custom chart component using [D3.js](https://d3js.org/) that was
performant enough to scroll smoothly at 60 FPS. Developed a WebGL shader rendering
thousands of arrows representing forces exerted by the tool at each point of its path.
