<div align="center">
    <img src="./assets/type-samurai.PNG" alt="type-samurai" width="400">
</div>

# type-samurai

## Advanced utility types for TypeScript
This package contains many useful utility types that are currently not available in TypeScript, including simple arithmetic operations, color validations, conditional statements, string manipulations, and many more.

## Install
```sh
npm install --save-dev type-samurai
```

## Usage
```ts
import type { Sum } from 'type-samurai'

// 912468
type Result = Sum<123456, 789012>
```

## API Overview

* ##### Statements
  * [And](src/and.d.ts?plain=1#L15) - Returns result of logical multiplication of two params
  * [AndArr](src/and.d.ts?plain=1#L31) - Returns the result of logical multiplication of all elements inside the passed array type
  * [Extend](src/extends.d.ts?plain=1#L16) - Returns boolean whether the first argument extends the second argument
  * [IfExtends](src/extends.d.ts?plain=1#L40) - Returns the third argument if the first argument extends the second argument (defaults to `true`), otherwise returns the fourth argument (defaults to `false`) 
  * [IfNotExtends](src/extends.d.ts?plain=1#L56) - Returns the third argument if the first argument doesn't extend the second argument (defaults to `true`), otherwise returns the fourth argument (defaults to `false`) 
  * [If](src/if.d.ts?plain=1#L10) - Returns the second argument if the first argument is `true` (defaults to `true`), otherwise returns the third argument (defaults to `false`) 
  * [IfNot](src/if-not.d.ts?plain=1#L13) - Returns the second argument if the first argument is `false` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [NotExtends](src/extends.d.ts?plain=1#L28) - Returns boolean whether the first argument doesn't extend the second argument
  * [Not](src/not.d.ts?plain=1#L11) - Accepts a boolean and returns `true` if the passed type is `false`, otherwise returns `true`
  * [ReturnItselfIfExtends](src/return-itself-if-extends.d.ts?plain=1#L11) - Returns the first argument if it extends the second argument, returns the third argument otherwise
  * [ReturnItselfIfNotExtends](src/return-itself-if-extends.d.ts?plain=1#L23) - Returns the first argument if it doesn't extend the second argument, returns the third argument otherwise
  * [Switch](src/switch.d.ts?plain=1#L14) - type implementation of `switch`. Accepts value, cases, and optional default value (defaults to `never`)
* ##### Any
  * [AnifyProperties](src/any.d.ts?plain=1#L40) - Turns all properties of an object to type `any`. If `makeOptional` option is `true`, makes all properties optional
  * [IfAny](src/any.d.ts?plain=1#L21) - Returns the second argument if the first argument is `any` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IsAny](src/any.d.ts?plain=1#L11) - Returns a boolean if the passed type is `any`
* ##### Unknown
  * [IfUnknown](src/unknown.d.ts?plain=1#L28) - Returns the second argument if the first argument is `unknown` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IsUnknown](src/unknown.d.ts?plain=1#L14) - Returns a boolean if the passed type is `unknown`
  * [UnkownifyProperties](src/unknown.d.ts?plain=1#L47) - Turns all properties of an object to type `unknown`. If `makeOptional` option is `true`, makes all properties optional
* ##### Never
  * [IfNever](src/never.d.ts?plain=1#L25) - Returns the second argument if the first argument is `never` (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IsNever](src/never.d.ts?plain=1#L13) - Returns a boolean if the passed type is `never`
  * [NeverifyProperties](src/never.d.ts?plain=1#L44) - Turns all properties of an object to type `never`. If `makeOptional` option is `true`, makes all properties optional
* ##### Number
  * [CompareNumberLength](src/number-length.d.ts?plain=1#L28) - Accepts two numbers, returns the third argument (defaults to `never`) if the first number is shorter, otherwise returns the fourth argument (defaults to `never`) if the second argument is shorter, if numbers have the same length returns the fifth argument (defaults to `never`)
  * [DigitsTuple](src/digits-tuple.d.ts?plain=1#L17) - Accepts an integer argument and returns a tuple of its digits
  * [Float](src/number.d.ts?plain=1#L13) - Accepts a number and returns it if it is a float, returns `never` otherwise
  * [IfFloat](src/number.d.ts?plain=1#L74) - Returns the second argument if the first argument is float (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfNegative](src/number.d.ts?plain=1#L98) - Returns the second argument if the first argument is negative (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfNegativeFloat](src/number.d.ts?plain=1#L122) - Returns the second argument if the first argument is a negative float (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfNegativeInteger](src/number.d.ts?plain=1#L110) - Returns the second argument if the first argument is a negative integer (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfPositive](src/number.d.ts?plain=1#L92) - Returns the second argument if the first argument is positive (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfInteger](src/number.d.ts?plain=1#L68) - Returns the second argument if the first argument is an integer (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfPositiveFloat](src/number.d.ts?plain=1#L116) - Returns the second argument if the first argument is a positive float (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfPositiveInteger](src/number.d.ts?plain=1#L104) - Returns the second argument if the first argument is a positive integer (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [Integer](src/number.d.ts?plain=1#L9) - Accepts a number and returns it if it is an integer, returns `never` otherwise
  * [IsFloat](src/number.d.ts?plain=1#L43) - Returns a boolean if the passed number is float
  * [IsInteger](src/number.d.ts?plain=1#L41) - Returns a boolean if the passed number is an integer
  * [IsLongerNumber](src/number-length.d.ts?plain=1#L25) - Accepts two numbers, returns a boolean whether the first argument is longer 
  * [IsNegative](src/number.d.ts?plain=1#L54) - Returns a boolean if the passed number is negative
  * [IsNegativeFloat](src/number.d.ts?plain=1#L66) - Returns a boolean if the passed number is a negative float
  * [IsNegativeInteger](src/number.d.ts?plain=1#L60) - Returns a boolean if the passed number is a negative integer
  * [IsPositive](src/number.d.ts?plain=1#L52) - Returns a boolean if the passed number is positive
  * [IsPositiveFloat](src/number.d.ts?plain=1#L64) - Returns a boolean if the passed number is a positive float
  * [IsPositiveInteger](src/number.d.ts?plain=1#L56) - Returns a boolean if the passed number is a positive integer
  * [IsSameLengthNumber](src/number-length.d.ts?plain=1#L30) - Accepts two numbers, returns a boolean whether numbers have the same length
  * [IsShorterNumber](src/number-length.d.ts?plain=1#L20) - Accepts two numbers, returns a boolean whether the first number is shorter
  * [Negative](src/number.d.ts?plain=1#L15) - Accepts a number and returns it if it is a negative number, returns `never` otherwise
  * [NegativeFloat](src/number.d.ts?plain=1#L27) - Accepts a number and returns it if it is a negative float, returns `never` otherwise
  * [NegativeInteger](src/number.d.ts?plain=1#L23) - Accepts a number and returns it if it is a negative integer, returns `never` otherwise
  * [NumberLength](src/number-length.d.ts?plain=1#L14) - Returns number of digits of the passed number
  * [ParseNumber](src/number.d.ts?plain=1#L128) - Accepts a `string` type and parses it to `number` and returns it, if the string isn't parsable returns `never`
  * [Positive](src/number.d.ts?plain=1#L19) - Accepts a number and returns it if it is a positive number, returns `never` otherwise
  * [PositiveFloat](src/number.d.ts?plain=1#L25) - Accepts a number and returns it if it is a positive float, returns `never` otherwise
  * [PositiveInteger](src/number.d.ts?plain=1#L21) - Accepts a number and returns it if it is a positive integer, returns `never` otherwise
* ##### String
  * [CompareStringLength](src/string-length.d.ts?plain=1#L60) - Accepts two strings, returns the third argument (defaults to `never`) if the first string is shorter, otherwise returns the fourth argument (defaults to `never`) if the second argument is shorter if strings have the same length returns the fifth argument (defaults to `never`)
  * [EmptyString](src/string.d.ts?plain=1#L5) - Accepts a string and returns it if it is an empty string, returns `never` otherwise
  * [EndsWith](src/ends-with.d.ts?plain=1#L9) - Returns a boolean whether the first string argument ends with the second one
  * [FirstCharacter](src/first-character.d.ts?plain=1#L18) - Accepts a string and returns its first character if possible, returns `never` otherwise. If `includeRest` option is `true`, returns the first character and the remaining string in the format of a tuple: `[FirstCharacter, Rest]`
  * [IfEmptyString](src/string.d.ts?plain=1#L21) - Returns the second argument if the first argument is an empty string (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfNonEmptyString](src/string.d.ts?plain=1#L27) - Returns the second argument if the first argument is a non-empty string (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IsEmptyString](src/string.d.ts?plain=1#L21) - Returns a boolean if the passed string is an empty string
  * [IsLongerString](src/string-length.d.ts?plain=1#L109) - Accepts two strings, and returns a boolean whether the first argument is longer. Range of string length `[0, 1000]` 
  * [IsNonEmptyString](src/string.d.ts?plain=1#L17) - Returns a boolean if the passed string is an empty string
  * [IsSameLengthString](src/string-length.d.ts?plain=1#L72) - Accepts two strings, returns a boolean whether strings have the same length. Range of string length `[0, 1000]`
  * [IsShorterString](src/string-length.d.ts?plain=1#L94) - Accepts two strings, and returns a boolean whether the first string is shorter. Range of string length `[0, 1000]`
  * [Join](src/join.d.ts?plain=1#L16) - Type version of `Array.prototype.join()`. Joins the first array argument by the second argument.
  * [LastCharacter](src/last-character.d.ts?plain=1#L33) - Accepts a string and returns its first character if possible, returns `never` otherwise. If `includeRest` option is `true`, returns the last character and the remaining string in the format of a tuple: `[LastCharacter, Rest]`. Range of string length `[0, 1000]`
  * [NonEmptyString](src/string.d.ts?plain=1#L11) - Accepts a string and returns it if it is a non-empty string, returns `never` otherwise
  * [RemoveLeading](src/remove-leading.d.ts?plain=1#L17) - Accepts a string and removes leading characters specified in the second argument
  * [Repeat](src/repeat.d.ts?plain=1#L22) - Repeats the first argument number of times specified in the second argument. Range `[0,999]`
  * [Replace](src/replace.d.ts?plain=1#L11) - Replaces the first occurrence of the second string argument with the third string argument in the first string argument
  * [ReplaceAll](src/replace-all.d.ts?plain=1#L11) - Replaces all occurrences of the second string argument with the third string argument in the first string argument
  * [Split](src/split.d.ts?plain=1#L11) - Type version of `String.prototype.split()`. Splits the first string argument by the second string argument
  * [StartsWith](src/starts-with.d.ts?plain=1#L11) - Returns a boolean whether the first string arguments starts with the second string argument
  * [Stringify](src/stringify.d.ts?plain=1#L11) - Transform numbers, booleans, strings, bigints to string.
  * [StringLength](src/string-length.d.ts?plain=1#L46) - Returns the length of the passed string. Range of string length `[0, 3968]`
* ##### Array
  * [Concat](src/array.d.ts?plain=1#L9) - Type version of `Array.prototype.concat()`. Concatenates two arrays into one.
  * [EmptyArray](src/array.d.ts?plain=1#L12) - Returns the first argument if it is an empty array, otherwise returns `never`
  * [IfEmptyArray](src/array.d.ts?plain=1#L67) - Returns the second argument if the first argument is an empty array (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfNonEmptyArray](src/array.d.ts?plain=1#L81) - Returns the second argument if the first argument is a non-empty array (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [Includes](src/includes.d.ts?plain=1#L15) - Returns a boolean whether the second argument is in the first array argument
  * [IsEmptyArray](src/array.d.ts?plain=1#L40) - Returns a boolean whether the first parameter is an empty array
  * [IsNonEmptyArray](src/array.d.ts?plain=1#L53) - Returns a boolean whether the first parameter is a non-empty array
  * [Pop](src/pop.d.ts?plain=1#L19) - Removes last element from the first array argument. If the `includeRemoved` option is `true` return the removed element with the new array in the format of [rest, removed]
  * [Push](src/push.d.ts?plain=1#L9) - Pushes the second argument in the first argument and returns the new array Removes the first element from the first array argument. If the `includeRemoved` option is `true` return the removed element with the new array in the format of [rest, removed]
  * [Shift](src/shift.d.ts?plain=1#L18) - Removes the first element from the first array argument. If the `includeRemoved` option is `true` return the removed element with the new array in the format of [rest, removed]
  * [Unshift](src/unshift.d.ts?plain=1#L9) - Adds the second argument to the beginning of the first array argument.
* ##### Math
  * [Abs](src/number.d.ts?plain=1#L131) - Accepts a number and returns the absolute value of it
  * [Decrement](src/decrement.d.ts?plain=1#L52) - Accepts an integer and returns the decremented value of it. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [Even](src/number.d.ts?plain=1#L29) - Accepts an integer and returns it if it is even, returns `never` otherwise
  * [Factorial](src/factorial.d.ts?plain=1#L22) - Accepts an integer argument and returns it mathematical factorial. Range: `[0, 21]`
  * [IfEven](src/number.d.ts?plain=1#L80) - Returns the second argument if the first argument is even (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfGreaterThan](src/greater-than.d.ts?plain=1#L28) - Returns the third argument if the first argument (integer) is greater than the second argument (integer) (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IfLowerThan](src/lower-than.d.ts?plain=1#L79) - Returns the third argument if the first argument (integer) is lower than the second argument (integer) (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [Increment](src/increment.d.ts?plain=1#L37) - Accepts an integer and returns the incremented value of it. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsBetween](src/is-between.d.ts?plain=1#L25) - Returns a boolean whether the first integer argument is between the second and the third integer argument. By default borders of the interval are included, which can be modified by the second argument. `minIncluded`, `maxIncluded` options show whether to include the lower and the higher borders respectively. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsDivisibleByTwo](src/is-divisible.d.ts?plain=1#L27) - Accepts an integer argument and returns a boolean whether it is divisible by two. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsDivisibleByThree](src/is-divisible.d.ts?plain=1#L55) - Accepts an integer argument and returns a boolean whether it is divisible by three. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsDivisbleByFive](src/is-divisible.d.ts?plain=1#L69) - Accepts an integer argument and returns a boolean whether it is divisible by five. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsDivisbleBySix](src/is-divisible.d.ts?plain=1#L87) - Accepts an integer argument and returns a boolean whether it is divisible by six. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsDivisibleByTen](src/is-divisible.d.ts?plain=1#L104) - Accepts an integer argument and returns a boolean whether it is divisible by ten. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsDivisibleByHundred](src/is-divisible.d.ts?plain=1#L118) - Accepts an integer argument and returns a boolean whether it is divisible by hundred. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IfOdd](src/number.d.ts?plain=1#L86) - Returns the second argument if the first argument is odd (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IsEven](src/number.d.ts?plain=1#L45) - Returns a boolean if the passed number is even
  * [IsGreaterThan](src/greater-than.d.ts?plain=1#L13) - Returns a boolean whether the first passed integer is greater than the second integer. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsLowerThan](src/lower-than.d.ts?plain=1#L44) - Returns a boolean whether the first passed integer is lower than the second integer. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [IsOdd](src/number.d.ts?plain=1#L50) - Returns a boolean if the passed number is odd
  * [Max](src/max.d.ts?plain=1#L17) - Accepts two integers and returns the maximum among them. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [MaxArr](src/max.d.ts?plain=1#L46) - Accepts an array of integers and returns the maximum among its elements. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [Min](src/min.d.ts?plain=1#L17) - Accepts two integers and returns the minimum among them. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [MinArr](src/min.d.ts?plain=1#L46) - Accepts an array of integers and returns the minimum among its elements. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [Mult](src/mult.d.ts?plain#L117) - Accepts two integers and returns their multiplication. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [Negate](src/number.d.ts?plain=1#L133) - Accepts a number and returns the absolute negative value of it
  * [Odd](src/number.d.ts?plain=1#L35) - Accepts an integer and returns it if it is even, returns `never` otherwise
  * [Pow](src/pow.d.ts?plain=1#L23) - Returns the first integer parameter raised to the factor of the second integer parameter. The range for factor: `[0, ...]`. Range for result: `[-2^54,2^54]`
  * [Sub](src/sub.d.ts?plain=1#L114) - Accepts two integers and returns their subtraction. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [Sum](src/sum.d.ts?plain=1#L112) - Accepts two integers and returns their sum. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
  * [SumArr](src/sum.d.ts?plain=1#L146) - Accepts an array of integers and returns the sum of its elements. Range: `[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]`
* ##### Color
  * [Color](src/color.d.ts?plain=1#L265) - Returns the first string argument if it is a valid RGB or HEX or HSL color, otherwise returns `never`. The second argument is an object type with `rgbOptions: RGBOptions` and `hslOptions: hslOptions` properties, which can accept the separator between color parameters (defaults to `', '`)
  * [IfColor](src/color.d.ts?plain=1#L303) - Returns the third argument if the first argument is valid RGB or HEX or HSL color (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). The second argument is an object type with `rgbOptions: RGBOptions` and `hslOptions: hslOptions` properties, which can accept the separator between color parameters (defaults to `', '`)
  * [IfHex](src/color.d.ts?plain=1#L162) - Returns the second argument if the first argument is valid HEX color (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IfHSL](src/color.d.ts?plain=1#L233) - Returns the third argument if the first argument is valid HSL color (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
  * [IfRGB](src/color.d.ts?plain=1#L82) - Returns the third argument if the first argument is valid RGB color (defaults to `true`), otherwise returns the fourth argument (defaults to `false`). The second argument is an object type with `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
  * [IsColor](src/color.d.ts?plain=1#L285) - Returns a boolean whether the first string argument is a valid RGB or HEX or HSL color. The second argument is an object type with `rgbOptions: RGBOptions` and `hslOptions: hslOptions` properties, which can accept the separator between color parameters (defaults to `', '`)
  * [IsHEX](src/color.d.ts?plain=1#L146) - Returns a boolean whether the first string argument is a valid HEX color.
  * [IsHSL](src/color.d.ts?plain=1#L215) - Returns a boolean whether the first string argument is a valid HSL color. The second argument is an object type with the `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
  * [IsRGB](src/color.d.ts?plain=1#L64) - Returns a boolean whether the first string argument is a valid RGB color. The second argument is an object type with the `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
  * [HEX](src/color.d.ts?plain=1#L126) - Returns the first string argument if it is a valid HEX color, otherwise returns `never`
  * [HSL](src/color.d.ts?plain=1#L189) - Returns the first string argument if it is a valid HSL color, otherwise returns `never`. The second argument is an object type with the `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
  * [RGB](src/color.d.ts?plain=1#L36) - Returns the first string argument if it is a valid RGB color, otherwise returns `never`. The second argument is an object type with the `separator: string` property, which shows the separator between color parameters (defaults to `', '`)
* ##### Utilities
  * [Dot](src/dot.d.ts?plain=1#L9) - Returns the result of the concatenation of two string literals with '.' if the second literal is not empty. otherwise returns the first string literal.
  * [IfEqual](src/equal.d.ts?plain=1#L42) - Accepts two types and returns the third argument if the first two are equal (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
  * [IfNotEqual](src/equal.d.ts?plain=1#L58) - Returns the third argument if the first two are not equal (defaults to `true`), otherwise returns the fourth argument (defaults to `false`)
  * [IfTuple](src/is-tuple.d.ts?plain=1#L29) - Returns the second argument if the first array argument is a fixed length tuple (defaults to `true`), otherwise returns the third argument (defaults to `false`)
  * [IsEqual](src/equal.d.ts?plain=1#L14) - Returns a boolean whether the passed two arguments are equal
  * [IsNotEqual](src/equal.d.ts?plain=1#L30) - Returns a boolean whether the passed two arguments are not equal
  * [IsTuple](src/is-tuple.d.ts?plain=1#L14) - Returns a boolean whether the first array argument is a fixed length tuple
  * [Prettify](src/prettify.d.ts?plain=1#L15) - Accepts a type and returns its simplified version for better readability. Transforms interface to type, simplifies intersections. If `recursive` option is `true` transforms the children object properties as well
  * [RemoveIndexSignature](src/remove-index-signature.d.ts?plain=1#L11) - Removes the index signature from the passed type
  * [ToPrimitive](src/to-primitive.d.ts?plain=1#L13) - Turns accepted literal type argument to its primitive
  * [TupleToObject](src/tuple-to-object.d.ts?plain=1#L12) - Accepts a tuple of string, number or symbol and returns the object type, where the key values are the elements of the tuple
  * [UnionToIntersection](src/union-to-intersection.d.ts?plain=1#L10) - Turns the passed union type to an intersection

## Contributors
* [Kamil Salimli](https://github.com/KamilHs)
