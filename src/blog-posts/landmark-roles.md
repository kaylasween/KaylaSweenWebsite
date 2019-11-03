---
path: "/blog/landmark-roles"
date: "2019-09-20"
title: "What is WAI-ARIA? (Landmark Roles)"
---

##### In the first section of this series, I'll be talking about roles. Today's article is about ARIA's landmark roles.

Landmark roles describe large areas of content to make it easier for assistive technologies (ATs) to skip over or navigate between areas of the page. 

Browsers are pretty smart. Sometimes they know what you mean when you use semantic markup. I'll point out which of these roles are implicitly assigned to which semantic HTML elements. When using these elements, it's typically considered redundant to also use the corresponding ARIA roles. However, it won't hurt to use them.

## <code>role="application"</code>
The <code>application</code> role declares the section of the page as an application...seems obvious enough. Typically, pages are declared as a web document by default. This role disables typical navigation controls for ATs because the application may need some of those navigational controls for different functions. For example, if the application is a game, the application area may need the up and down arrow keys to move an in-game object. For this reason, its use is strongly discouraged.

## <code>role="banner"</code>
The <code>banner</code> role denotes site-wide information. This is typically where the company name and logo would go. It may also contain a search bar for the site. The <code>&lt;header&gt;</code> element has an implicit role of <code>banner</code>. The <code>&lt;header&gt;</code> tag or less semantic tags with the <code>role="banner"</code> attribute  (such as <code>&lt;div role="banner"&gt;</code>, which is **not recommended**) should be a direct child of the <code>&lt;body&gt;</code> element.

## <code>role="complementary"</code>
The <code>complementary</code> role denotes secondary information. This information should complement the main focus of the page, but be able to be understood on its own. The <code>&lt;aside&gt;</code> element has an implicit role of <code>complementary</code>. (Screen readers <a href="https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html#testing-nvda-with-ie11-edge-firefox-and-chrome">mostly support <code>aside</code> without explicit roles</a>.) If this blog post were its own page, the suggested reading links at the bottom would be a good candidate for the <code>&lt;aside&gt;</code> element or other element with the <code>complementary</code> role. 

## <code>role="contentinfo"</code>
The <code>contentinfo</code> role primarily applies to the footer of the website. It contains information about the document such as privacy and copyright information. It originally was intended to denote page specific information but seems to have shifted to covering all information in the footer of the page. The <code>&lt;footer&gt;</code> element has an implicit role of <code>contentinfo</code>. It is important to note that some screenreader/browser combinations do not expose footers as a landmark. I recommend checking out <a href="https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html">Scott O'Hara's article, "HTML5 Landmarks Exposed."</a>

## <code>role="form"</code>
The <code>&lt;form&gt;</code> element has an implicit role of <code>form</code> when also using the <code>aria-label</code> or <code>aria-labelledby</code> attributes to label the form, as shown in the code sample below. It is important to note that some screenreader/browser combinations do not expose forms as a landmark even with <code>aria-label</code> or <code>aria-labelledby</code>. To combat this, you can add a <code>role="form"</code> attribute to your <code>&lt;form&gt;</code> element. Again, I recommend <a href="https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html">Scott O'Hara's article, "HTML5 Landmarks Exposed."</a>

<pre><code>&lt;h1 id="heading"&gt;Name Collection Form&lt;/h1&gt;
&lt;form role="form" aria-labelledby="#heading"&gt;
  &lt;label for="name"&gt;Name&lt;/label&gt;
  &lt;input type="text" id="name" /&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>

## <code>role="main"</code>
The main content of the page. There should only be one main section per page, which can be denoted by the <code>&lt;main&gt;</code> element. The <code>&lt;main&gt;</code> element has an implicit role of <code>main</code>. 

Denoting the main section of your page, paired with a skip link, can help sighted keyboard users navigate to the content of the page faster. 

<pre><code>&lt;a href="#main"&gt;Skip to Main Content&lt;/a&gt;
&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;Home&lt;/li&gt;
    &lt;li&gt;About&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
&lt;main id="main"&gt;
  ...Content!...
&lt;/main&gt;</code></pre>

## <code>role="navigation"</code>
The <code>&lt;nav&gt;</code> element has an implicit role of <code>navigation</code>. If using more than one navigation per page, it is important to differentiate them with an <code>aria-label</code> attribute on the <code>&lt;nav&gt;</code> element. This includes any type of secondary navigation, breadcrumbs, and pagination.

<pre><code>&lt;nav aria-label="Site Navigation"&gt;
  &lt;ul&gt;
    &lt;li&gt;Home&lt;/li&gt;
    &lt;li&gt;About&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
&lt;nav aria-label="Page Navigation"&gt;
  &lt;ul&gt;
    &lt;li&gt;First Section&lt;/li&gt;
    &lt;li&gt;Second Section&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

## <code>role="region"</code>
The <code>region</code> role is typically used when there's not another landmark role the content will fit in. The <code>&lt;section&gt;</code> element has an implicit role of <code>region</code>. Use this one sparingly because you wouldn't want your AT user wading through a sea of meaningless <code>&lt;section&gt;</code>s or <code>region</code>s!

## <code>role="search"</code>
The <code>search</code> role denotes the section that contains the search for the website or for the web document. This can be contained within the <code>&lt;header&gt;</code> element. There's no specific search element, so this role needs to be on a <code>&lt;form&gt;</code> element that surrounds the search.

<pre><code>&lt;h1 id="searchHeading"&gt;Search&lt;/h1&gt;
&lt;form role="search" aria-labelledby="#searchHeading"&gt;
  &lt;label for="search"&gt;Search&lt;/label&gt;
  &lt;input type="search" id="search" /&gt;
  &lt;button type="submit"&gt;Search&lt;/button&gt;
&lt;/form&gt;</code></pre>


Here's a CodePen example of some of these landmark roles in action.

https://codepen.io/kaylasween/pen/yLBxmMg

## Suggested reading about landmark roles
* <a href="https://a11yproject.com/posts/aria-landmark-roles/">Quick tip: ARIA Landmark Roles and HTML5 Implicit Mapping</a>
* <a href="https://www.nomensa.com/blog/2010/what-are-wai-aria-document-landmark-roles">What Are WAI-ARIA Document Landmark Roles?</a>
* <a href="https://www.scottohara.me/blog/2018/03/03/landmarks.html">Accessible Landmarks</a>
* <a href="https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html">HTML5 Landmarks Exposed</a>

##### Next week, we'll talk about document structure roles! Please feel free to leave any questions you may have about landmark roles in the comments!