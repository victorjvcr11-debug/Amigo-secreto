# Copilot Instructions for AI Agents

## Project Overview
This is a simple browser-based Secret Santa (Amigo Secreto) app. The main files are:
- `index.html`: Main HTML structure, includes input for names and displays the list.
- `app.js`: Handles all core logic for adding names and managing the list.
- `style.css`: Basic styling for the app.
- `assets/`: Contains images used in the UI.

## Architecture & Data Flow
- All logic is in `app.js`, which manipulates the DOM directly.
- Names are stored in a global array `listaNombres`.
- Functions interact with HTML elements using `document.getElementById`.
- No frameworks or build tools are used; pure HTML/CSS/JS only.

## Developer Workflows
- **Run/Debug:**
  - Open `index.html` in a browser. No build step required.
  - Use browser dev tools for debugging.
- **Edit:**
  - Update logic in `app.js`.
  - Update UI in `index.html` and `style.css`.
- **Assets:**
  - Place images in `assets/` and reference them in HTML/CSS.

## Project-Specific Patterns
- All state is managed in-memory (no backend, no persistence).
- Functions are named in Spanish to match UI and code comments.
- DOM manipulation is direct; no event delegation or advanced patterns.
- Alerts are used for user feedback (e.g., empty input).

## Integration Points
- No external dependencies or APIs.
- All code runs client-side in the browser.

## Example: Adding a Name
```js
function agregarAmigo() {
    let nombres = document.getElementById('amigo').value;
    if (nombres === '') {
        alert('Por favor ingrese un nombre');
    } else {
        listaNombres.push(nombres);
        document.getElementById('amigo').value = '';
    }
}
```

## Key Files
- `app.js`: All logic and state management
- `index.html`: UI structure and element IDs
- `assets/`: Images for UI

---
For questions about unclear logic or missing features, ask the user for clarification before making major changes.
