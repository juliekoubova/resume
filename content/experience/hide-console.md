---
to: 2016-07-01
name: HideConsoleOnClose
---
While working on an internal developer tool at IPS, created a Win32 library
that keeps a console process running in the background when the user closes its window.
Implemented using a DLL injected into the console host via a system hook.

<https://github.com/juliekoubova/HideConsoleOnClose/>
