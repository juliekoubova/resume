---
name: Interactive 3D Machining Visualization
vendor: IPS s.r.o.
from: 2018-10-01
to: 2019-08-05
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

Inherited a prototype of an app that would animate 3D models of tools and work
pieces recorded during a machining run; turned it into a modern, maintainable,
server-rendered Angular application based on the NGXS state management library.


Later implemented playback of live data streamed over a web socket.
Created a custom chart component using D3.js that was performant enough to
scroll smoothly at 60 FPS. Developed a WebGL shader rendering thousands of arrows
representing forces exerted by the tool at each point of its path.
