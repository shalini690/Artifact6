# Artifact6

A minimal [Express.js](https://expressjs.com/) (Node.js) HTTP server that exposes two `GET` endpoints returning plain-text responses: a preserved `Hello world` baseline and a newly added `Good evening` endpoint.

## Prerequisites

- **Node.js >= 18** — the documented minimum for Express 5 (validated on Node.js 22 LTS).
- **npm** — bundled with Node.js; used to install dependencies and run the start script.

## Installation

Install the project dependencies:

```bash
npm install
```

This installs Express (`express ^5.2.1`) and its transitive dependencies into the local `node_modules/` directory. `node_modules/` is git-ignored and is regenerated from `package.json` and `package-lock.json` on each install.

## Running the Server

Start the server:

```bash
npm start
```

`npm start` runs `node server.js` (the `start` script configured in `package.json`). By default the server listens on port **3000**. The port is configurable via the `PORT` environment variable (`process.env.PORT || 3000`):

```bash
PORT=8080 npm start
```

Once the server is ready it logs `Server listening on port <PORT>`.

## Endpoints

| Method | Path            | Response Body  | Status |
|--------|-----------------|----------------|--------|
| GET    | `/`             | `Hello world`  | 200    |
| GET    | `/good-evening` | `Good evening` | 200    |

- **`GET /`** is the preserved baseline endpoint.
- **`GET /good-evening`** is the newly added endpoint (the feature).

Both responses are sent with `res.send(string)`, which replies with HTTP status `200` and `Content-Type: text/html; charset=utf-8` by default.

### Example requests

With the server running on the default port:

```bash
curl http://localhost:3000/
# → Hello world

curl http://localhost:3000/good-evening
# → Good evening
```
