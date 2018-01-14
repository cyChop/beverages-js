$iconfont-path: "<%= fontPath %>";
<% _.each(glyphs, function(glyph) { %>
$icon-<%= glyph.fileName %>: "\<%= glyph.codePoint %>";<% }); %>
