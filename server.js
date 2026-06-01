'use strict';

/**
 * server.js — Express application entry point for the Artifact6 service.
 *
 * This file is the feature core of the project. It integrates the Express.js
 * web framework (FR-1) and serves two plain-text HTTP endpoints:
 *
 *   - GET /              → "Hello world"   (FR-3, baseline — preserved)
 *   - GET /good-evening  → "Good evening"  (FR-4, the new feature)
 *
 * The server listens on a configurable TCP port (FR-2), defaulting to 3000 and
 * overridable via the PORT environment variable.
 *
 * Design notes:
 *   - CommonJS modules (`require`) are used per the project convention; this
 *     file is referenced by `package.json` as both `main` and the target of
 *     the `npm start` script ("node server.js").
 *   - Route handlers are intentionally kept INLINE in this single file. The
 *     scope is deliberately tutorial-sized; refactoring into routers /
 *     controllers / services is explicitly out of scope.
 *   - The only runtime dependency is Express (`express ^5.2.1`), resolved from
 *     `node_modules/`. Express 5 requires Node.js >= 18.
 *
 * Response fidelity:
 *   The response bodies must be exactly "Hello world" and "Good evening" — no
 *   changes to wording, casing, punctuation, or surrounding whitespace. They
 *   are sent via `res.send(string)`, which responds with HTTP 200 and
 *   `Content-Type: text/html; charset=utf-8` by default.
 */

// --- Framework integration (FR-1) ---------------------------------------
// Import the Express framework. `express` is a factory function that creates
// and returns a new application instance.
const express = require('express');

// Create the single Express application instance that owns the route table.
const app = express();

// --- Server runtime configuration (FR-2) --------------------------------
// Resolve the listening port from the environment, defaulting to 3000 when
// PORT is unset. This keeps the default developer experience zero-config while
// allowing deployment environments to inject their own port.
const PORT = process.env.PORT || 3000;

// --- Route registration --------------------------------------------------
// FR-3: Baseline endpoint (preserved). Responds to `GET /` with "Hello world".
app.get('/', (req, res) => res.send('Hello world'));

// FR-4: New feature endpoint. Responds to `GET /good-evening` with
// "Good evening". This addition is purely additive and does not alter the
// baseline `GET /` behavior above.
app.get('/good-evening', (req, res) => res.send('Good evening'));

// --- Start the HTTP listener (FR-2) -------------------------------------
// Bind the application to the configured port and begin accepting requests.
// The startup log provides a clear signal that the server is ready.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
