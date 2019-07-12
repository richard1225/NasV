module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    document: false,
    navigator: false,
    window: false
  },
  plugins: ['vue', 'import', 'node', 'promise', 'standard'],
  rules: {
    // getter setter配对
    'accessor-pairs': 'error',
    // 箭头函数的箭头前后空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 代码块内部前后留有空格
    'block-spacing': ['error', 'always'],
    // 括号样式
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 变量命名：驼峰
    camelcase: ['error', { properties: 'never' }],
    // 对象/数组最后一项后不要逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    // 逗号前后的空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 逗号风格
    'comma-style': ['error', 'last'],
    // super调用
    'constructor-super': 'error',
    // 大括号
    curly: ['error', 'multi-line'],
    // 点号属性访问位于同一行
    'dot-location': ['error', 'property'],
    // 文件尾部留个空行
    'eol-last': 'error',
    // 使用全等
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 方法调用括号前不用空格
    'func-call-spacing': ['error', 'never'],
    // generator星号前后都要空格
    'generator-star-spacing': ['error', { before: true, after: true }],
    // 回调错误处理
    'handle-callback-err': ['error', '^(err|error)$'],
    // 缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 对象key冒号k前后空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 关键字前后空格
    'keyword-spacing': ['error', { before: true, after: true }],
    // 构造函数大写
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    // 使用new时用括号
    'new-parens': 'error',
    // 不用new Array()
    'no-array-constructor': 'error',
    // 不允许使用caller和callee
    'no-caller': 'error',
    // 构造函数不能修改属性
    'no-class-assign': 'error',
    // 不允许负0
    'no-compare-neg-zero': 'error',
    // 不允许在条件判断时使用赋值
    'no-cond-assign': 'error',
    // 常量不能赋值
    'no-const-assign': 'error',
    // 条件判断不能用常量
    'no-constant-condition': ['error', { checkLoops: false }],
    // 正则不能有\x
    'no-control-regex': 'error',
    // 不能有debugger
    'no-debugger': 'error',
    // 不能delete变量，可以delete对象属性
    'no-delete-var': 'error',
    // 参数不能重复
    'no-dupe-args': 'error',
    // 类成员不能重复
    'no-dupe-class-members': 'error',
    // 对象属性不能重复
    'no-dupe-keys': 'error',
    // switch的case不能重复
    'no-duplicate-case': 'error',
    // 正则不能有空字符类
    'no-empty-character-class': 'error',
    // 结构时不能创建空模式
    'no-empty-pattern': 'error',
    // 不允许使用eval
    'no-eval': 'error',
    // 不能赋值异常
    'no-ex-assign': 'error',
    // 不允许直接修改内置对象原型
    'no-extend-native': 'error',
    // 不允许无用的bind
    'no-extra-bind': 'error',
    // 不能有不必要的布尔转换
    'no-extra-boolean-cast': 'error',
    // 不允许及函数表达式有多余的括号
    'no-extra-parens': ['error', 'functions'],
    // 不允许swtich没有break
    'no-fallthrough': 'error',
    // 不允许小数的点号前没数
    'no-floating-decimal': 'error',
    // 不允许函数重新声明
    'no-func-assign': 'error',
    // 不允许赋值只读全局变量（window、process等）
    'no-global-assign': 'error',
    // 不允许隐式的eval
    'no-implied-eval': 'error',
    // 不允许在逻辑分支中声明函数
    'no-inner-declarations': ['error', 'functions'],
    // 不允许无效正则
    'no-invalid-regexp': 'error',
    // 不允许不常见的空白字符
    'no-irregular-whitespace': 'error',
    // 不允许使用__iterator__
    'no-iterator': 'error',
    // 使用label时，不能和变量重名
    'no-label-var': 'error',
    // 不能使用label
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    // 不允许有空的代码块
    'no-lone-blocks': 'error',
    // 操作符不能混合使用
    'no-mixed-operators': [
      'error',
      {
        groups: [['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']],
        allowSamePrecedence: true
      }
    ],
    // 不能混用空格和tab
    'no-mixed-spaces-and-tabs': 'error',
    // 不能有连续的空格
    'no-multi-spaces': 'error',
    // 不能使用多行字符串
    'no-multi-str': 'error',
    // 不能有连续的空行
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    // 不能有空new
    'no-new': 'error',
    // 不允许new Function()
    'no-new-func': 'error',
    // 不允许new Object()
    'no-new-object': 'error',
    // 不允许new require()
    'no-new-require': 'error',
    // 不允许new Symbol()
    'no-new-symbol': 'error',
    // 不允许用String/Number/Boolean的包装类
    'no-new-wrappers': 'error',
    // 不能直接调Math/JSON/Reflect
    'no-obj-calls': 'error',
    // 不能用8进制
    'no-octal': 'error',
    // 不能用8进制转义
    'no-octal-escape': 'error',
    // 不能用__dirname拼接路径
    'no-path-concat': 'error',
    // 不能用__proto__属性
    'no-proto': 'error',
    // 不能重复声明
    'no-redeclare': 'error',
    // 正则中不能有多个空格
    'no-regex-spaces': 'error',
    // return语句里不能有赋值
    'no-return-assign': ['error', 'except-parens'],
    // 不能直接return await结果
    'no-return-await': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    // 不允许逗号运算符
    'no-sequences': 'error',
    // 不允许覆盖原生对象
    'no-shadow-restricted-names': 'error',
    // 不允许数组有空元素
    'no-sparse-arrays': 'error',
    // 不允许用tab缩进
    'no-tabs': 'error',
    // 模版字符串忘记使用``时警告
    'no-template-curly-in-string': 'error',
    // 访问this前使用super
    'no-this-before-super': 'error',
    // 不允许抛出字面量
    'no-throw-literal': 'error',
    // 末尾不能有多余空格
    'no-trailing-spaces': 'error',
    // 不能有未声明变量
    'no-undef': 'error',
    // 不允许初始化未undefined
    'no-undef-init': 'error',
    // 不允许有歧义的换行
    'no-unexpected-multiline': 'error',
    // 循环时，条件判断不允许不变
    'no-unmodified-loop-condition': 'error',
    // 禁止没必要的三元表达式
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // 不允许有不可到达的代码分支
    'no-unreachable': 'error',
    // finally不允许return和throw
    'no-unsafe-finally': 'error',
    // 不允许不安全的取非操作
    'no-unsafe-negation': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
    // 不允许未使用的变量
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    // 不允许声明前使用
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    // 不允许无效的call和apply
    'no-useless-call': 'error',
    // 不允许没必要的computed的对象key
    'no-useless-computed-key': 'error',
    // 不允许没必要的改造函数
    'no-useless-constructor': 'error',
    // 不允许没必要的转义
    'no-useless-escape': 'error',
    // 不允许没必要的重命名
    'no-useless-rename': 'error',
    // 不允许没必要的return
    'no-useless-return': 'error',
    // 属性访问前不允许有空格
    'no-whitespace-before-property': 'error',
    // 进制用with
    'no-with': 'error',
    // 对象一行可以多个属性
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', { initialized: 'never' }],
    // 强制操作符使用一致的换行符
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    // 强制块内空行填充的一致性
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': 'error',
    // 单引号
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    //
    'rest-spread-spacing': ['error', 'never'],
    // 不加分号
    semi: ['error', 'never'],
    // 分号前后空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 代码块前留空格
    'space-before-blocks': ['error', 'always'],
    // 函数括号前留空格
    'space-before-function-paren': ['error', 'always'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': ['error', 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 'error',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    // 注释//后空格
    'spaced-comment': [
      'error',
      'always',
      {
        line: { markers: ['*package', '!', '/', ','] },
        block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
      }
    ],
    // 要求 symbol 描述
    'symbol-description': 'error',
    // 禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': ['error', 'never'],
    // 禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': ['error', 'never'],
    // 禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': ['error', { requireStringLiterals: true }],
    // 要求 IIFE 使用括号括起来
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': ['error', 'both'],
    // 禁止 条件判断中的常量放在前面
    yoda: ['error', 'never'],
    // 避免重复export
    'import/export': 'error',
    // import放在文件头部
    'import/first': 'error',
    // 不能重复import
    'import/no-duplicates': 'error',
    // import时，禁止webpack loader语法
    'import/no-webpack-loader-syntax': 'error',
    // 禁止使用过时api
    'node/no-deprecated-api': 'error',
    // 禁止用process exit取代throw
    'node/process-exit-as-throw': 'error',
    // resolve/rejct命名
    'promise/param-names': 'error',

    // 数组中括号内部空格0或1
    'standard/array-bracket-even-spacing': ['error', 'either'],
    // 对象计算属性名内部空格
    'standard/computed-property-even-spacing': ['error', 'even'],
    // cb第一个参数需为null undefined Error
    'standard/no-callback-literal': 'error',
    // 对象大括号内部空格0或1
    'standard/object-curly-even-spacing': ['error', 'either'],

    // vue相关
    // computed里面禁止异步行为
    'vue/no-async-in-computed-properties': 'error',
    // 禁止重复属性
    'vue/no-dupe-keys': 'error',
    // 禁止重复html标签
    'vue/no-duplicate-attributes': 'error',
    // 禁止解析错误
    'vue/no-parsing-error': 'error',
    // 禁止保留字作为key
    'vue/no-reserved-keys': 'error',
    // vue的data必需时一个function
    'vue/no-shared-component-data': 'error',
    // 禁止computed产生副作用（computed内部有改写其他属性行为）
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止把key设置在template标签上
    'vue/no-template-key': 'error',
    // 禁止<textarea>{{}}</textarea>写法，用v-model
    'vue/no-textarea-mustache': 'error',
    // 禁止未使用的变量
    'vue/no-unused-vars': 'error',
    // 动态组件需要:is
    'vue/require-component-is': 'error',
    // render 函数需return
    'vue/require-render-return': 'error',
    // v-for必需有key
    'vue/require-v-for-key': 'error',
    // props的默认值要和类型匹配
    'vue/require-valid-default-prop': 'error',
    // computed属性必须有return
    'vue/return-in-computed-property': 'error',
    // template须有合法的根元素
    'vue/valid-template-root': 'error',
    // 以下：正确使用vue内置的指令
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error'
  }
}
