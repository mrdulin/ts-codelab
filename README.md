# TypeScript Playground

## `TypeScript`简介

- 静态代码分析。为了消除潜在的运行时问题，`ts`被设计成强类型语言，在编译阶段可以进行静态类型检查。`ts`还有一个语言服务层，用来给开发者提供一些工具。例如，生成一些信息给 IDE 或者编辑器提供更好的特性支持，`IntelliSense`或者自动化重构。语言服务支持一系列典型的编辑器操作比如语句自动补全，函数签名提示，代码格式化和突出高亮，着色等。基本的重构功能比如重命名，调试接口辅助功能比如验证断点，还有 TypeScript 特有的功能比如支持增量编译（在命令行上使用--watch）。语言服务是被设计用来有效的处理在一个长期存在的编译上下文中文件随着时间改变的情况；在这样的情况下，语言服务提供了与其它编译器接口不同的角度来处理程序和源文件。

- 与`js`高度兼容，`ts`是`js`的超集，任何有效的`js`代码对`ts`同样有效。

- `ts`可以更好的组织代码结构。`ts`加入了了类(`class`)，接口(`interface`)和模块系统(`module`)，这些特性可以帮助我们更好的组织代码。在团队开发中，可以减少潜在的代码集成问题，并且，还可以增强代码的可维护性，可伸缩性。

- `ts`明确了代码设计阶段和运行阶段，我们在代码设计阶段用`ts`编写代码，在运行阶段，用`ts`编译而成的`js`的代码。`ts`增加的一些新特性，只是用在代码设计阶段。例如，我们可以在`ts`代码中声明（`declare`）接口(`interface`)，但是`js`是不支持接口(`interface`)的，`ts`编译器(`compiler`)在将`ts`代码编译成`js`的过程中，也不会在`js`代码中加入模拟这些特性的代码。

- `ts`编译器(`compiler`)提供代码转换（转换`ts`特性代码为`js`实现），类型擦除（移除静态类型注解），类型擦除不仅仅移除类型注解，还有`ts`独有的特性，例如接口（`interface`）。经过`ts`编译出来的`js`代码，在浏览器环境中有很好的兼容性，通过编译器配置设定，可以设定生成的目标`js`代码为`ecmascript 3`, `ecmascript 5`或者`ecmascript 6`。

- 遵循`ecmascript`标准规范，最新版的`ts`中加入的特性都是基于`ecmascript`标准规范。这表示，将来，很多`ts`文件的代码将自动变为有效的`js`代码。

- 成为跨平台开发工具，可以运行在很多主流系统中。

- TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用 TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。

## 说明

- `npm run test:w`，监视文件变动（变动是指`git`没有 commit 的文件）并重新运行单元测试
- `tsc`使用`tsconfig.json`作为编译器配置，`tsconfig.json`还可以提供项目的全局配置。例如，我们可以在项目根目录下运行`tsc`，编译器将会递归的查找项目的根目录和子目录，并编译所有`ts`文件。
- 使用`tsc --init`快速生成`tsconfig.json`文件。
- `tsc`允许项目中有多个`tsconfig.json`文件，这样就可以实现不同目录下使用该目录下的`tsconfig.json`编译器配置文件进行编译。

## 关于`TypeScript`的第三方库的描述文件`@types/xxx`

`TypeScript`最早使用`tsd`作为管理`TypeScript`应用中描述文件的工具，见[repo](https://github.com/DefinitelyTyped/tsd), 但是由于本身有缺陷和性能问题，被废弃。
见[link](https://stackoverflow.com/questions/35598876/why-is-tsd-deprecated)。
逐渐被`typings`取代。`typescript 2.0`之前（不包括 2.0），使用[Typings](https://github.com/typings/typings)工具来对`TypeScript`应用中的描述文件进行管理。

`TypeScript 2.0`开始，可以使用`npm`, `yarn`这些包管理工具直接安装第三方描述文件，详见[link](https://tslang.cn/docs/handbook/declaration-files/consumption.html)

## FAQ

- 使用`git clean -f -n`查看可以被删除的`untracked files`。
- 使用`git clean -f`， 删除`untracked files`。
