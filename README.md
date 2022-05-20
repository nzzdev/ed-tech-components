## TODOS

- [x] Add project skeleton

- [ ] Create q-cli command `new-ed-tech-component` (contains everything to develop the component in your local ed-tech-components repository)

  - [ ] Add command `new-ed-tech-component`
  - [ ] Add package.json
  - [ ] Add app.svelte
  - [ ] Add reference to rollup.config.js (in root dir) integration
  - [ ] Add `build` & `dev` commands to package.json

- [ ] Create q-cli `generate-component` command

  - [ ] Add argument `name` referring to the desired component name (`name` value is the path from `ed-tech-components/components/` to the component, e.g. `maps/choropleth`)
  - [ ] Add files copy of relevant folder contents to CWD
  - [ ] Add `package.json` modification of current project to include all component dependencies
  - [ ] Add console warnings if component dependencies exist (with different version) in `package.json` of current project

- [ ] Create (automated) documentation process

  - [ ] Add npm script `update-documentation`
  - [ ] Check if this works as a basis: https://blog.stranianelli.com/how-to-document-svelte-components-part-2/

- [ ] Write down rules & gotchas

## Rules & Gotchas

- Not all 3rd party libraries are tree shakeable, think twice about adding additional libraries

## Open questions
