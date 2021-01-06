# npm React module

## Version: Basarat Ali

### Process of creation

#### 1. typescript npm module

1. `npm init`
Create `package.json`

2. `npm i -D typescript`
Install compiler

3. `npx tsc --init`
Initialize `tsconfig.json`.
* Target **es5**
* module **commonjs**
* strict **true**
* esModuleInterop **true**
* declaration: **true**
* declarationMap: **true**
* sourceMap: **true**
* outDir: **lib**
* *add* include in **src**

4. `touch src/index.ts` and add *export* some function

5. tweak `package.json`
* Ensure unique package *name*
* *main* should point to **"lib/index.js"**
* add *types* pointing to **lib**
* add *build* script `tsc -p .` where the flag points to the project to compile

#### 2. Enhance adding React

1. `npm i react @types/react -D`
In `package.json` add react to *peerDependencies* indicating that the project using this library should use a react with version at least 16.8.0

2. Enable `jsx` to `react` in `tsconfig.json`

3. `mv src/index.ts src/index.tsx`and modify it to export a component

4. run `npm run build`

#### 3.

1. `npm i -D react-dom` and add it to *peerDependencies*

src/bcp/bcp.tsx -.sass -.types.ts
[barrel export](https://github.com/basarat/typescript-book/blob/master/docs/tips/barrel.md) in src/index.ts
ty

***

### Derived from:
* Twitter   | [@basarat](https://twitter.com/basarat)
* GitHub    | [Basarat Ali Syed](https://github.com/basarat)
* YouTube   | [Basarat Ali](https://www.youtube.com/channel/UCGD_0i6L48hucTiiyhb5QzQ)
* Website   | [basarat.com](https://basarat.com/)

* Twitter   | [@_harveydelaney](https://twitter.com/_harveydelaney)
* GitHub    | [Harvey Delaney](https://github.com/HarveyD)
* Blog      | [https://blog.harveydelaney.com/creating-your-own-react-component-library/](https://blog.harveydelaney.com/creating-your-own-react-component-library/)