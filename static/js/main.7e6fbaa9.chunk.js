(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),n=(c(12),c(7)),a=c(2),l=c(1),r=(c(13),c(14),c(15),c(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbID)}))})},j=(c(17),function(e){var t=e.addToApp,c=Object(l.useState)(""),i=Object(a.a)(c,2),s=i[0],n=i[1],d=Object(l.useState)(!1),j=Object(a.a)(d,2),m=j[0],b=j[1],u=Object(l.useState)({Poster:"",Title:"",Plot:"",imdbID:""}),h=Object(a.a)(u,2),O=h[0],v=h[1],x=function(e){fetch("https://www.omdbapi.com/?apikey=e45c8c40&t=".concat(e)).then((function(e){return e.json()})).then((function(e){e.Error?b(!0):v({Poster:e.Poster,Title:e.Title,Plot:e.Plot,imdbID:e.imdbID})}))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),x(s),e.target.reset()},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input".concat(m?" is-danger":""),onChange:function(e){return t=e.target.value.toString().trim(),v({Poster:"",Title:"",Plot:"",imdbID:""}),b(!1),void n(t);var t}})})]}),m&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){return x(s)},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:"button is-primary",onClick:function(){return t(O)},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),O.imdbID?Object(r.jsx)(o,{movie:O}):""]})]})}),m=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(j,{addToApp:function(e){c.find((function(t){return t.imdbID===e.imdbID}))||""!==e.Title&&i([].concat(Object(n.a)(c),[e]))}})})]})};s.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7e6fbaa9.chunk.js.map