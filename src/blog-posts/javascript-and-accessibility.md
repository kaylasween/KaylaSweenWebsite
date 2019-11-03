---
path: "/blog/javascript-and-a11y"
date: "2016-12-15"
title: "Javascript and Accessibility"
---

*This post was originally posted on [Software Unwound](https://softwareunwound.com), Corelogic FNC's developer blog. You can also view ["Javascript and Accessibility" on Software Unwound](https://softwareunwound.com/2016/12/15/javascript-and-accessibility-a-ux-accessibility-blog-post/).*


**Inspired by the following articles:

http://www.zeldman.com/2016/11/22/year-ever-blue-beanie-day-matters/

https://www.marcozehe.de/2016/11/23/javascript-not-enemy-accessibility/ **

Many accessibility advocates believe that new Javascript frameworks are causing developers to move away from accessibility and standards-based design and towards the newer, more exciting aspects of web design. But who says the two have to be mutually exclusive?

It’s true that most newer Javascript frameworks are not built with accessibility in mind. It’s the job of the developers who use the frameworks to ensure their products/websites are using these new frameworks in a way that is accessible.

## But most developers (especially newer developers) do not have the training that comes with developing with every user in mind.

This almost goes without saying. Can you, as a developer, honestly say you were taught anything about web accessibility when you learned about other types of web development in college or when you taught yourself? If not, you’re not alone. It didn’t occur to me to look into what I needed to do to make sure everyone can use my websites when I learned about web development in college. Unfortunately, it is extremely common for fresh-out-of-college developers to have never heard of web accessibility. Even more seasoned developers may not know how to make their work more accessible. (That’s why UX has has classes, Confluence pages, and blog posts on accessibility, to help fill in the education gap.)

## Help out Javascript Framework Developers

If you notice a framework isn’t accessible in some way, fix it! If you have the skills to fix existing problems on Github, do it. Push the fixes and make sure it’s clear what you did and why. Explain what the accessibility and usability benefits of your push are. This helps make the internet a better place for those with disabilities.

If you don’t have the skills to fix the problems yourself, open a pull request, describe the issues, and let people know you’ve opened the pull request so that they might help you fix it. It may also be helpful to add links to relevant accessibility resources, such as the WCAG 2.1 Guideline you’re trying to be compliant with.

As an example, Bootstrap has been known for not being the most accessible framework, but many people have opened issues on their Github to bring these accessibility issues into the light. In an earlier version of Bootstrap (I believe this is for Bootstrap 3), there were a few issues opened regarding the accessibility of tooltips and popovers. Some of them were fixed, but not all.

https://github.com/twbs/bootstrap/issues/3535

In Bootstrap 4, popovers are still not completely accessible. This request was opened almost a year ago and, at the time of writing this post, has still not been solved.

Still open: https://github.com/twbs/bootstrap/issues/18618

The main issue being that elements inside of the popover do not receive focus when expected (after the popover has been triggered). Instead, the elements inside of the popover are placed at the end of the focus order in the DOM.

## Push yourself and those around you to make your implementation of a framework accessible.

We’ve done a lot of this for you in Ensemble, but we’re only human. We can’t catch every potential problem with accessibility. That’s why we need your help to make all of Corelogic FNC’s products accessible. Do your best to make your projects accessible. If there’s something you notice that can be fixed in Ensemble regarding accessibility, please email me at ksween@fncinc.com.

A lot of frameworks have some useful tools to help you make your JS more accessible. AngularJS has its own way of helping you make more accessible Angular code when you require ngAria in your module. ngAria works with standard Angular directives to inject accessibility support into your Angular application at runtime. It also adds tabindex to ensure your custom elements/tags with the roles of checkbox, radio, range, or textbox are accessible via keyboard without you having to go type “tabindex=”0”” on every custom element. To see what else ngAria can do, check out AngularJS’s Developer Guide for Accessibility.

## Example of what you can do to make your own Javascript more accessible.

Of course, the best practice is using semantic markup for your pages, but sometimes that’s not always possible. For example, you’re having to make a button out of a div (just as an example, please don’t do this) and you need to make sure the user can click on it. So you decide to do this (example from Karl Groves, web accessibility consultant):

```$(‘#fakeButton’).on(‘click’, function () { //do something });```

Which is fine if the user is using a mouse, but does absolutely nothing for a keyboard user. You notice this and change it to the following:

```$(‘#fakeButton’).on(‘click keypress’, function () { //do something });```

Unfortunately, this will cause your makeshift button to trigger on any keypress… including tab, which is how some users navigate pages so it would be like a button triggering on hover for a mouse user. To fix this, we’ll make our code check for specific key presses, which are typically space and/or enter.

We’ll create a function called accessibleClick() to check to see if the keypress is either an enter or space.
```function accessibleClick(event){
    if(event.type === 'click'){
        return true;
    } else if(event.type === 'keypress'){
        var code = event.charCode || event.keyCode;
        if((code === 32)|| (code === 13)){
            return true;
        }
    } else { 
        return false;
    }
}

$('#fakeButton').on('click keypress', function(event){
    if(accessibleClick(event) === true){
        // do something
    }
});```
So accessibleClick() returns true on either click, space, or enter. Simply call the function inside of the code we had earlier, and you’re good to go!

An example of something similar to this in AngularJS is using ngClick or ngDblClick. Typically, this will cause the element to do something only on click, but when ngAria is added as a requirement, this allows ngAria to dynamically bind a keypress event by default. So all you would need to do (after adding ngAria as a requirement) is:

html-for-wordpress

ngAria will add the tabindex for you as well as bind a keypress event as previously mentioned. Easy!

## Javascript isn’t an enemy to accessibility.

Javascript and frameworks made with Javascript don’t have to be inaccessible. In fact, they can actually help web accessibility and usability. As Marco Zehe says in “Javascript is not an enemy of accessibility!”,

“Granted, it may be hard at first, and it may be tedious at times. But the number of people knowing and caring about accessibility on the web is growing every year. And each pull request, each interaction educates someone you may not even think about at that moment.”

Don’t let the fact that some Javascript frameworks are inaccessible steer you away from making the web a better place for everybody.