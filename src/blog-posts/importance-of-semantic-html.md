---
path: "/blog/importance-of-semantic-html"
date: "2019-07-22"
title: "The Importance of Semantic HTML"
---

##### Semantic HTML can have a variety of different impacts both on your users and other developers.

## What is Semantic HTML?

[Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML) is markup that adds context and explains to the browser how the element should be displayed rather than only explaining the element's presentation. This further shifts the responsibility of an element's presentation onto CSS. For example, <code>&lt;strong&gt;</code>  and <code>&lt;em&gt;</code> instead of <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>. <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> provide context behind the text. <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> explain how the text should be presented. (Check out [Mozilla's HTML elements reference page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for more semantic HTML tags and how they should be used.)

## Why?

### It's usually less work.
If the element is actionable, such as a button, there are accessibility features and functionality baked into the native <code>&lt;button&gt;</code> element. Using a <code>&lt;div&gt;</code> to simulate a button action with JavaScript makes a developer's job a great deal harder by shifting the work of making the element actionable and accessible onto the developer. Using semantic HTML keeps you from having to reinvent the wheel and potentially missing key features that you get by default when using a native element.

This also means it requires less work from developers to make the element accessible or better for search engine optimization (SEO). Assistive technologies can use tags, such as <code>&lt;nav&gt;</code> and <code>&lt;main&gt;</code>, to help users more effectively navigate through a site. Search engines consider semantic HTML when ranking a page.

### It's easier to read.
Having semantic HTML in your markup means that it will be easier for other developers to read and maintain. It gives each section meaning by describing the type of information the element is expected to contain. Plus, it's easier to see if you've forgotten to close a tag than if you're having to hunt through a mass of <code>&lt;/div&gt;</code>s.

Just use semantic HTML. It's easier for you and for your users. 🎉