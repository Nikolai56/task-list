(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t.p+"static/media/drag.0481be8d.svg"},51:function(e,n,t){e.exports=t(96)},96:function(e,n,t){"use strict";t.r(n);var a=t(15),r=t(6),i=t(9),o=t(10),c=t(13),s=t(11),l=t(14),d=t(3),u=t(0),g=t.n(u),p=t(21),b=t.n(p),m=t(7),f=(t(56),t(4)),v={tasks:{"task-1":{id:"task-1",content:"content-1"},"task-2":{id:"task-2",content:"content-2"},"task-3":{id:"task-3",content:"content-3"},"task-4":{id:"task-4",content:"content-4"}},columns:{"column-1":{id:"column-1",title:"Todo",taskIds:["task-1","task-2","task-3","task-4"]},"column-2":{id:"column-2",title:"In Progress",taskIds:[]},"column-3":{id:"column-3",title:"Done",taskIds:[]}},columnOrder:["column-1","column-2","column-3"]},O=t(22),k=t.n(O);function j(){var e=Object(d.a)(["\n  margin: 0 0 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);return j=function(){return e},e}function x(){var e=Object(d.a)(["\n  background-color: ",";\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  user-select: none;\n"]);return x=function(){return e},e}var h=f.a.div(x(),function(e){return e.isDragging?"lightgreen":"white"}),y=f.a.span(j()),D=function(e){function n(){return Object(i.a)(this,n),Object(c.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.isDragDisabled,t=e.index,a=e.task;return g.a.createElement(m.b,{draggableId:a.id,index:t,isDragDisabled:n,type:"task"},function(e,n){return g.a.createElement(h,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,isDragging:n.isDragging}),g.a.createElement("img",{src:k.a,alt:"drag-image"}),g.a.createElement(y,null,a.content))})}}]),n}(g.a.PureComponent);function E(){var e=Object(d.a)(["\n  background-color: ",";\n  padding: 8px;\n  transition: background-color 0.2s ease;\n  flex-grow: 1;\n  min-height: 100px;\n"]);return E=function(){return e},e}function I(){var e=Object(d.a)(["\n  margin: 0 0 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);return I=function(){return e},e}function w(){var e=Object(d.a)(["\n  background-color: aliceblue;\n  display: flex;\n  align-items: center;\n  padding: 8px;\n"]);return w=function(){return e},e}function P(){var e=Object(d.a)(["\n  background-color: white;\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  width: 220px;\n  user-select: none;\n"]);return P=function(){return e},e}var A=f.a.div(P()),R=f.a.div(w()),C=f.a.h3(I()),S=f.a.div(E(),function(e){return e.isDraggingOver?"skyblue":"white"}),H=function(e){function n(){return Object(i.a)(this,n),Object(c.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.isDragDisabled,t=e.tasks,a=e.column,r=e.index;return g.a.createElement(m.b,{draggableId:a.id,index:r,isDragDisabled:n,type:"column"},function(e,n){return g.a.createElement(A,Object.assign({},e.draggableProps,{ref:e.innerRef,isDragging:n.isDragging}),g.a.createElement(R,e.dragHandleProps,g.a.createElement("img",{src:k.a,alt:"drag-image"}),g.a.createElement(C,null,a.title)),g.a.createElement(m.c,{droppableId:a.id,type:"task"},function(e,n){return g.a.createElement(S,Object.assign({},e.droppableProps,{ref:e.innerRef,isDraggingOver:n.isDraggingOver}),t.map(function(e,n){return g.a.createElement(D,{key:e.id,task:e,index:n})}),e.placeholder)}))})}}]),n}(g.a.PureComponent);function J(){var e=Object(d.a)(["\n  display: flex;\n"]);return J=function(){return e},e}var z=f.a.div(J()),B=function(e){function n(){var e,t;Object(i.a)(this,n);for(var o=arguments.length,l=new Array(o),d=0;d<o;d++)l[d]=arguments[d];return(t=Object(c.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(l)))).state=v,t.onDragEnd=function(e){var n;console.log(e);var i=e.destination,o=e.source,c=e.draggableId,s=e.type;if(i&&(i.droppableId!==o.droppableId||i.index!==o.index))if("column"!==s){var l=t.state.columns[o.droppableId],d=t.state.columns[i.droppableId];if(l!==d){var u=Array.from(l.taskIds);u.splice(o.index,1);var g=Object(r.a)({},l,{taskIds:u}),p=Array.from(d.taskIds);p.splice(i.index,0,c);var b=Object(r.a)({},d,{taskIds:p}),m=Object(r.a)({},t.state,{columns:Object(r.a)({},t.state.columns,(n={},Object(a.a)(n,g.id,g),Object(a.a)(n,b.id,b),n))});t.setState(m)}else{var f=Array.from(l.taskIds);f.splice(o.index,1),f.splice(i.index,0,c);var v=Object(r.a)({},l,{taskIds:f}),O=Object(r.a)({},t.state,{columns:Object(r.a)({},t.state.columns,Object(a.a)({},v.id,v))});t.setState(O)}}else{var k=Array.from(t.state.columnOrder);k.splice(o.index,1),k.splice(i.index,0,c);var j=Object(r.a)({},t.state,{columnOrder:k});t.setState(j)}},t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this;return g.a.createElement(m.a,{onDragEnd:this.onDragEnd},g.a.createElement(m.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},function(n,t){return g.a.createElement(z,Object.assign({},n.droppableProps,{ref:n.innerRef,isDraggingOver:t.isDraggingOver}),e.state.columnOrder.map(function(n,t){var a=e.state.columns[n];console.log("column",a);var r=a.taskIds.map(function(n){return e.state.tasks[n]});return console.log("tasks",r),g.a.createElement(H,{key:n,column:a,tasks:r,index:t})}),n.placeholder)}))}}]),n}(g.a.PureComponent);b.a.render(g.a.createElement(B,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.28d63deb.chunk.js.map