# Brief Media PostCSS Styleguide
*Originally forked from [Airbnb's styleguide](https://github.com/airbnb/css)*

#### **Note**

Before moving on, please read [Concentric CSS Model](https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/concentric.txt) to get an idea of how to structure a components list of classes.

## Table of Contents

  1. [Functional CSS](#functional-css)
  2. [PostCSS Plugins](#postcss-plugins)
  3. [Terminology](#terminology)
    - [Rule Declaration](#rule-declaration)
    - [Selectors](#selectors)
    - [Properties](#properties)
    - [Functional Class](#functional-class)
    - [Application Class](#application-class)
  4. [CSS](#css)
    - [Formatting](#formatting)
    - [Comments](#comments)
    - [OOCSS and BEM](#oocss-and-bem)
    - [ID Selectors](#id-selectors)
    - [JavaScript hooks](#javascript-hooks)
    - [Border](#border)
  5. [PostCSS](#sass)
    - [Syntax](#syntax)
    - [Ordering](#ordering-of-property-declarations)
    - [Variables](#variables)
    - [Extend directive](#extend-directive)
    - [Nested selectors](#nested-selectors)

## Functional CSS

[Jon Gold's reasoning behind functional CSS](http://www.jon.gold/2015/07/functional-css/)
[CSS and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/)
[Rationalizing Functional CSS](https://marcelosomers.com/writing/rationalizing-functional-css/)

Those three posts do a wonderful job of explaining functional CSS and the pros/cons.

## PostCSS Plugins

  1. PostCSS-Responsify

## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.listing {
  font-size: 18px;
  line-height: 1.2;
}
```

### Selectors

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.my-element-class {
  /* ... */
}

[aria-hidden] {
  /* ... */
}
```

### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */ {
  background: #f1f1f1;
  color: #333;
}
```

### Functional Class

Functional classes are the bulk of our css. These are the classes that represent only a single property and are named in such a way as to clearly convey that property.

```css
.p2 {
  padding: var(--spacing-2);
}

.cursor-pointer {
  cursor: pointer;
}
```

### Application Class

Application classes are more "traditional" css classes. These classes will have one or more properties attached and are reserved for times when you need to define styles that are not already defined in our css. Examples of these types of styles are:

  * Specific height/width/min-height/min-width
  * Animation and keyframe styles
  * WYSIWYG styles

Example based on the Social Media Calendar
```css
.a-smc-card {
  height: 33rem;
}

.a-smc-card-alert {
  height: 10px;
}

.a-smc-card-alert--expanded {
  height: 40px;
  line-height: 40px;
}
```


### CSS Variables

## CSS

### Formatting

* Use soft tabs (2 spaces) for indentation
* Prefer dashes over camelCasing in class names. Underscores are OK if you're using BEM (see [OOCSS and BEM](#oocss-and-bem) below).
* Do not use ID selectors
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line
* Put blank lines between rule declarations

**Bad**

```css
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

**Good**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

### Comments

* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks
  - Explaining why a specific style is there.

### OOCSS and BEM

We encourage some combination of OOCSS and BEM for these reasons:

  * It helps create clear, strict relationships between CSS and HTML
  * It helps us create reusable, composable components
  * It allows for less nesting and lower specificity
  * It helps in building scalable stylesheets

**OOCSS**, or “Object Oriented CSS”, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of “objects”: reusuable, repeatable snippets that can be used independently throughout a website.

  * Nicole Sullivan's [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
  * Smashing Magazine's [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

**BEM**, or “Block-Element-Modifier”, is a _naming convention_ for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS.

  * CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
  * Harry Roberts' [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

**Example**

```html
<article class="listing-card listing-card--featured">

  <h1 class="listing-card__title">Adorable 2BR in the sunny Mission</h1>

  <div class="listing-card__content">
    <p>Vestibulum id ligula porta felis euismod semper.</p>
  </div>

</article>
```

```css
.listing-card { }
.listing-card--featured { }
.listing-card__title { }
.listing-card__content { }
```

  * `.listing-card` is the “block” and represents the higher-level component
  * `.listing-card__title` is an “element” and represents a descendant of `.listing-card` that helps compose the block as a whole.
  * `.listing-card--featured` is a “modifier” and represents a different state or variation on the `.listing-card` block.

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### JavaScript hooks

Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with `.js-`:

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

### Border

Use `0` instead of `none` to specify that a style has no border.

**Bad**

```css
.foo {
  border: none;
}
```

**Good**

```css
.foo {
  border: 0;
}
```

## PostCss

### Syntax

* Use the `.pcss` syntax.

### Ordering of property declarations

1. Property declarations

    List all standard property declarations.

    ```scss
    .selector {
      background: green;
      font-weight: bold;
      // ...
    }
    ```

2. Order of properties

  Group properties by type to keep consistent hierarchy and organization.
  * Positioning
  * Display/Box Model
  * Color
  * Text
  * Other

  #### Example
  ```scss
  .selector {
    /* Positioning */
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;

    /* Display & Box Model */
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid #333;
    margin: 10px;

    /* Color */
    background: #000;
    color: #fff

    /* Text */
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.4;
    text-align: right;

    /* Other */
    cursor: pointer;
  }
  ```

3. Nested selectors

    Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

    ```scss
    .selector {
      background: green;
      font-weight: bold;

      .selector-sub {
        margin-right: 10px;
      }
    }
    ```

### Variables

Prefer camelCased variable names (e.g. `var(--myVariable)`) over dash-cased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `var(--_myVariable)`). Begin variables with the property they are representing (e.g. `--color-primary`). `color` is the base property, and `primary` is the version of this property we are defining (e.g. `color-primary`, `color-red`, `fontSize-large`, `borderColor-primary`). If a variable has two different variations of itself, append two dashes and a descriptive word to describe the variation (e.g. `color-primary--dark`).

Variable structure: `--[property]-[version]--[variation]`

### Nested selectors

**Do not nest selectors more than three levels deep!**

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable


Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.

### Organization

Split features and components into modular files when possible. These files help organize code into relatable sections, improving maintainability. Use `@import '_partialpath.pcss'` at the top of a file to include these partials in the build file.

