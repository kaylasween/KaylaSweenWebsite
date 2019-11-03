---
path: "/blog/what-is-progressive-enhancement"
date: "2016-12-29"
title: "What is Progressive Enhancement?"
---

*This post was originally posted on [Software Unwound](https://softwareunwound.com), Corelogic FNC's developer blog. You can also view ["What is Progressive Enhancement?" on Software Unwound](https://softwareunwound.com/2016/12/29/what-is-progressive-enhancement-a-ux-accessibility-blog-post/).*

Progressive enhancement is a core piece of web accessibility and inclusive design. According to Wikipedia, “progressive enhancement is a strategy for web design that emphasizes core webpage content first.” It’s mostly about building your website from HTML up. This means adding all of your fancy stuff (CSS and Javascript, if you will) after ensuring that your content is understandable on its own.

By following the progressive enhancement strategy, your page will comply with the fourth principle of the WCAG 2.0 Guidelines, Robust. (For more information on the four principles of accessible web content, visit [my blog post “Breaking Down P.O.U.R.”](https://kaylasween.com/blog/POUR-v2).)  It helps your content be more robust in the face of network and Javascript errors.

Using progressive enhancement, the end result of your website will be much stronger since you’ll be planning out your project and presenting a functional system using the most basic web technologies. According to Sam Dwyer in his [article “Progressive Enhancement: What It Is and How to Use It,”](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) this allows you have a strong foundation to fall back on as you introduce more complex technologies (like CSS and Javascript) to the project.

Not only will your project be stronger, but it’ll be much easier to maintain. With your foundation done and stable, you and other developers on your team can focus more on the complex sections of the system without having to worry much about what you already have.

It’s also good for your users (of course). If they can repeatedly visit your website successfully, they’ll come to know your brand as being reliable. Any disabled users will have the benefit of knowing they can visit your website without worrying about if their specific assistive technologies will work with your content.

**Steps to Developing with Progressive Enhancement**

* Create your page with semantic markup.
    * This will only be the content of your page. If your page is a form, this will only be the markup for the form in plain, semantic HTML.
* Add any PHP, Ruby on Rails, etc. needed to make your form functional.
* Make it look a little prettier.
    * Add some CSS to make it look more appealing.
* Finally, add some pizazz with Javascript.
    * Be careful to make sure your scripts aren’t causing your content to be inaccessible. If you can do it with a mouse, you should be able to do it with a keyboard.

By simply developing your project a little differently, you’ve hopefully gained a better understanding of your project’s requirements, made your clients happy with a stronger product, and sleep a little better knowing you’ve created a better and stronger solution that helps more people.