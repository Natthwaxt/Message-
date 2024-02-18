img {
  --s: 300px; /* image size */
  
  width: var(--s);
  padding: calc(var(--s)/2);
  box-sizing: border-box;
  background: #e5414e; /* heart color */
  aspect-ratio: 1;
  object-fit: cover;
  --_m: radial-gradient(#000 69%,#0000 70%) 84.5%/50%;
  -webkit-mask-box-image: var(--_m);
             mask-border: var(--_m);
  clip-path: polygon(-41% 0,50% 91%, 141% 0);
  transition: .6s padding-block, padding-inline 0s .6s;
  cursor: pointer;
}
img:hover {
  padding: 0;
  transition: .6s padding-inline, padding-block 0s;
}

/* fallback until better support for mask-border */
@supports not (-webkit-mask-box-image: var(--_m)) { 
  img {
   -webkit-mask: 
     radial-gradient(at 70% 31%,#000 29%,#0000 30%),
     radial-gradient(at 30% 31%,#000 29%,#0000 30%),
     linear-gradient(#000 0 0) bottom/100% 50% no-repeat;
  }
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  filter: drop-shadow(0 0 10px #cc333f)
}



var sceneTree = new Scene({
  ".tree" : {
    0: {transform:"scale(0)"},
    1.5: {transform:"scale(1)"}
  },
  ".background>.flower": function (i) {
    return {
      0: {opacity: 0, transform: "translateY(0px) rotate(0deg)"},
      1: {opacity: 1},
      4: {opacity: 1},
      5: {opacity: 0, transform: "translateY(300px) rotate(360deg)"},
      options: {
        delay: 7 + i,
        iterationCount: "infinite"
      },
    };
  },
}, {
  selector: true
});


var branchs = document.querySelectorAll(".tree .branch, .tree .leaf, .tree .flower1");
var depths = [0, 0, 0];

for (var i = 0; i < branchs.length; ++i) {
  var sceneItem = sceneTree.newItem("item" + i);
  var className = branchs[i].className;

  if (~className.indexOf("branch-inner")) {
    ++depths[1];
    depths[2] = 0;
  } else if (~className.indexOf("branch")) {
    ++depths[0];
    depths[1] = 0;
    depths[2] = 0;
  } else if (~className.indexOf("leaf") || ~className.indexOf("flower1")) {
    ++depths[2];
  }
  sceneItem.setElement(branchs[i]);
  sceneItem.setCSS(0, ["transform"]);

  var time = 1 + depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
  sceneItem.set(time, "transform", "scale", 0);
  sceneItem.set(time + 1, "transform", "scale", 1);
}

sceneTree.playCSS();
