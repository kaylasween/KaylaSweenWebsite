---
path: "/blog/table-roles"
date: "2019-09-20"
title: "What is WAI-ARIA? (Table Roles)"
---

##### In the first section of this series, I'll be talking about roles. Today's article is about ARIA's table roles. If you missed <a href="https://dev.to/kaylasween/landmark-roles-introduction-to-wai-aria-part-2-2kn7">my Landmark Roles post</a>, go check it out!

Document structure roles add context to structural page content that is not interactive. Some of these roles are redundant if you use semantic HTML to write your markup. Document structure roles differ from landmark roles in that they describe smaller areas that organize content rather than the large sections landmark roles indicate.

##Table Roles
The roles for tables all have corresponding semantic HTML elements, which are preferable to using the following roles on more generic elements. Remember, always use semantic HTML when possible! As a side note, tables are for displaying data in a tabular manner (rows and columns). Please don't use tables as a way to lay out your page. Learning to use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS grid</a> will benefit you and your users much more!

### <code>role="table"</code>
The <code>table</code> role indicates that the data is contained within a non-interactive table structure. That is to say, it organizes data into columns and rows. An element with the <code>table</code> role must contain elements with the <code>row</code> role. The <code>&lt;table&gt;</code> element has an implicit <code>role="table"</code> attribute.

### <code>role="rowgroup"</code>
A <code>rowgroup</code> role denotes a group of rows within a table. This corresponds with the <code>&lt;thead&gt;</code> (or table head), <code>&lt;tbody&gt;</code> (or table body), and <code>&lt;tfoot&gt;</code> (or table footer) elements. An element with the <code>rowgroup</code> role must be contained within an element with the <code>table</code> or <code>grid</code> role. (We'll discuss the <code>grid</code> role in the widgets section of this series.)

### <code>role="row"</code>
A <code>row</code> role denotes a row within a table. This directly corresponds with the <code>&lt;tr&gt;</code> (or table row) element. Elements with the <code>row</code> role must be contained by an element with the <code>table</code>, <code>grid</code>, <code>treegrid</code>, or <code>rowgroup</code> role.

### <code>role="columnheader"</code>
The <code>columnheader</code> role denotes the element's contents as the header for a column of data. The <code>&lt;th&gt;</code> (or table header) element has an implicit role of <code>columnheader</code>. An element with the <code>columnheader</code> role must be a descendant of an element with the <code>row</code> role.

### <code>role="rowheader"</code>
The <code>rowheader</code> role establishes the relationship between that cell and all the cells within the same row. The <code>&lt;th&gt;</code> (or table header) element also denotes an element with the implicit role of <code>rowheader</code>. An element with the <code>rowheader</code> role must be contained within an element with the <code>row</code> role.

### <code>role="cell"</code>
The <code>cell</code> role denotes the element's contents as data in a table cell. The <code>&lt;td&gt;</code> (or table data) element has an implicit role of <code>cell</code>. An element with the <code>row</code> role must belong to an element with the <code>row</code> role.




<pre><code>&lt;table&gt;                       &lt;!--role="table"--&gt;
  &lt;thead&gt;                     &lt;!--role="rowgroup"--&gt;
    &lt;tr&gt;                      &lt;!--role="row"--&gt;
      &lt;th&gt;Pet Name&lt;/th&gt;       &lt;!--role="columnheader"--&gt;
      &lt;th&gt;Type of Animal&lt;/th&gt;
      &lt;th&gt;Age&lt;/th&gt;
      &lt;th&gt;Hobbies&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;                     &lt;!--role="rowgroup"--&gt;
    &lt;tr&gt;                      &lt;!--role="row"--&gt;
      &lt;th&gt;Captain&lt;/th&gt;        &lt;!--role="rowheader"--&gt;
      &lt;td&gt;Dog&lt;/td&gt;            &lt;!--role="cell"--&gt;
      &lt;td&gt;7&lt;/td&gt;
      &lt;td&gt;Sleeping&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th&gt;Piper&lt;/th&gt;
      &lt;td&gt;Dog&lt;/td&gt;
      &lt;td&gt;2&lt;/td&gt;
      &lt;td&gt;Chasing bugs&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th&gt;Skeletor Beletor&lt;/th&gt;
      &lt;td&gt;Cat&lt;/td&gt;
      &lt;td&gt;3&lt;/td&gt;
      &lt;td&gt;Skulking around&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

### Let's wrap up this week's lesson!
As far as tables go, as long as you're using semantic HTML, you don't really need to add these ARIA roles. However, learning about them can give you an appreciation for how much work semantic HTML does for you.

**Next week, we'll continue learning about document structure roles!**