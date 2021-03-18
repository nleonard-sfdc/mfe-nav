# Navigation as Micro Frontend 
## Example Implementation

An example of an LWC Micro Frontend (MFE) rendering the Navigation experience.

![nav screenshot](./doc/nav-screenshot.png)


### Setup

```
npm install
```

### Building the MFE

```
npx webpack 
```

Webpack will produce a file 'hgfBundle.js' under /build/.

To view the latest build copy hgfBundle.js to /app/.
```
cp build/hgfBundle.js app
```

### Viewing the MFE

```
node app/app.js
```

Node should return:

```
Example MFE Nav available at http://localhost:3005
```
