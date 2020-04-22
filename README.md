# markdown_editor
·/markdown is the directory for electron with react

# command tips
initiate command  
```bash
// init react app
create-react-app markdown_editor

// install electron
cnpm install -save electron
```  

deploy commands  
```bash
// set npm proxy
npm install -g cnpm --registry=https://registry.npm.taobao.org

// install dependency
cnpm install

// start project
cnpm start
cnpm run electron
```  

# Features(WIP)
## Base Features
1. Markdwon Parser: Parse markdown content to HTML.
2. Test Parser, see if it works as we wanted, see [gfm](https://github.github.com/gfm/) for reference.
3. UI and UX(code highlight included)
4. Export to other format(HTML, PDF, PNG...)
4. Tag support
5. Content search support
6. Image upload(maybe [PicGo](https://github.com/Molunerfinn/PicGo) or build from scratch)
7. Chart support(what about [mermaid.js](https://mermaid-js.github.io/mermaid)?)

## Further more
1. Theme
2. Video and Audio support
3. Share support(provide a simple server to host generated html file or raw markdown, maybe a docker image)
4. Edit history support
5. A better way to write tables(tables in markdown is so annoying, no ideas yet...)

# Reference 
1. [markdown-js](https://github.com/evilstreak/markdown-js/blob/master/src/render_tree.js)
high star origin js project
2. [MDE](https://github.com/vincentdchan/MDE/blob/master/src/controller/lineRenderer.ts)
ts project based on electron with international switch