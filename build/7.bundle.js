webpackJsonp([7],{9:/*!*************************!*\
  !*** ./demo7/demo7.jsx ***!
  \*************************/
function(e,t,n){var r=n(/*! react */1),i=r.createClass({displayName:"CodeListing",propTypes:{filename:r.PropTypes.string},getDefaultProps:function(){return{filename:"unnamed file"}},render:function(){var e={backgroundColor:"black",color:"white",padding:5,fontFamily:"monospace"};return r.createElement("div",{style:{border:"1px solid black"}},r.createElement("div",{style:e},this.props.filename),r.createElement("pre",{style:{margin:5}},this.props.children))}}),o=r.createClass({displayName:"Application",render:function(){var e=["React.render(",'  // We pass `"Minerva"` as the `name` property, which is',"  // used in `HelloComponent`'s `render` function.",'  HelloElementFactory({name: "Minerva"}),','  document.getElementById("container")',");"].join("\n");return r.createElement("div",null,r.createElement("p",null,"Here is some code:"),r.createElement(i,{filename:"simple.jsx"},e),r.createElement("p",null,"And some more:"),r.createElement(i,null,'CodeListing with no "filename" property'))}});r.render(r.createElement(o,null),document.getElementById("container"))}});
//# sourceMappingURL=7.bundle.js.map