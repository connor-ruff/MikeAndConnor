(this.webpackJsonpmikeandconnor=this.webpackJsonpmikeandconnor||[]).push([[0],{31:function(e,i,r){},36:function(e,i,r){},47:function(e,i,r){},56:function(e,i,r){"use strict";r.r(i);var t=r(1),n=r(0),c=r.n(n),a=r(21),s=r.n(a),d=(r(47),r(9)),o=r(10),h=r(12),l=r(11),b=(r(31),r(58)),j=r(59),u=r(60),g=r(63),m=r(61),O=function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){return Object(d.a)(this,r),i.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(t.jsx)(g.a,{bg:"dark",variant:"dark",id:"bioNavBar",style:{minWidth:700,borderRadius:10},children:Object(t.jsxs)(m.a,{className:"mr-auto",children:[Object(t.jsx)(m.a.Link,{onClick:function(){return e.props.meetUs(0)},children:"Home"}),Object(t.jsx)(m.a.Link,{onClick:function(){return e.props.meetUs(1)},children:"Meet Mike"}),Object(t.jsx)(m.a.Link,{onClick:function(){return e.props.meetUs(2)},children:"Meet Connor"}),Object(t.jsx)(m.a.Link,{href:"bird",children:"Birding"}),Object(t.jsx)(m.a.Link,{href:"hockey",children:"Hockey"})]})})}}]),r}(n.Component),p=r.p+"static/media/MnCpic.36b3e030.jpg",C=r.p+"static/media/flappybird.50de6c54.gif",x=r.p+"static/media/hockeyplayer.b1cfb2bc.gif",f=function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){var e;return Object(d.a)(this,r),(e=i.call(this)).meetUs=function(i){var r={};r.tab=i,e.setState(r)},e.state={tab:0,mikeInfo:{name:"Michael Peter Beebe",email:"mpb9@live.unc.edu",image:"",sign:"scorpio",uni:"University of North Carolina at Chapel Hill",major:"Computer Science",linkedIn:"https://www.linkedin.com/in/michael-beebe-302664196/",descr:"Mikinos"},connorInfo:{name:"Connor Blaise Ruff",email:"cruff@nd.edu",image:"https://ace.nd.edu/media/zoo/images/Connor_Ruff_5704571696f0947b46902f5ff16ddf67.jpg",sign:"libra",uni:"University of Notre Dame",major:"Computer Science",linkedIn:"https://www.linkedin.com/in/connor-ruff-37b56616b/",descr:"Hello There!"}},e}return Object(o.a)(r,[{key:"render",value:function(){var e;return 1==this.state.tab?e=this.state.mikeInfo:2==this.state.tab&&(e=this.state.connorInfo),this.state.tab>0?Object(t.jsxs)("div",{id:"biosDiv",children:[Object(t.jsx)(O,{meetUs:this.meetUs}),Object(t.jsx)(b.a,{fluid:!0,children:Object(t.jsxs)(j.a,{children:[Object(t.jsxs)(u.a,{xs:3,id:"bioSideCol",children:[Object(t.jsx)("img",{src:e.image,style:{padding:"5px",borderRadius:20}}),Object(t.jsxs)("h5",{children:["Name: ",e.name]}),Object(t.jsxs)("h6",{children:["Email: ",e.email]}),Object(t.jsxs)("h6",{children:["Education: ",e.uni]}),Object(t.jsxs)("h6",{children:["Major: ",e.major]}),Object(t.jsxs)("h6",{children:["Professional: ",Object(t.jsx)("a",{href:e.linkedIn,children:"linkedIn"})]}),Object(t.jsxs)("h6",{children:["Sign: ",e.sign]})]}),Object(t.jsx)(u.a,{id:"bioMainCol",children:Object(t.jsx)("h1",{children:e.descr})})]})})]}):Object(t.jsxs)("div",{id:"biosDiv",children:[Object(t.jsx)(O,{meetUs:this.meetUs}),Object(t.jsxs)(b.a,{fluid:!0,children:[Object(t.jsx)(j.a,{children:Object(t.jsxs)(u.a,{children:[Object(t.jsx)("br",{}),Object(t.jsx)("p",{children:" Mike and Connor's Web App!!! "})]})}),Object(t.jsxs)(j.a,{children:[Object(t.jsx)(u.a,{className:"BPCol",children:Object(t.jsx)("img",{src:x,alt:"MnC",className:"HockeyGif"})}),Object(t.jsx)(u.a,{className:"BPCol",children:Object(t.jsx)("img",{src:p,alt:"MnC",className:"BroPicture"})}),Object(t.jsx)(u.a,{className:"BPCol",children:Object(t.jsx)("img",{src:C,alt:"MnC",className:"BirdGif"})})]})]})]})}}]),r}(n.Component),k=function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){return Object(d.a)(this,r),i.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(f,{})})}}]),r}(n.Component),y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,64)).then((function(i){var r=i.getCLS,t=i.getFID,n=i.getFCP,c=i.getLCP,a=i.getTTFB;r(e),t(e),n(e),c(e),a(e)}))},P=r(33),B=r(7),J=r(62),N={images:[{src:"/BirdingPics/12.2.RedShoulder.JPG",height:563,bird:"Red Shouldered Hawk (Juvenile)",desc:"2 December 2020. Charlotte, NC"},{src:"/BirdingPics/12.5.Mockingbird.JPG",height:563,bird:"Norther Mockingbird",desc:"5 December 2020. Charlotte, NC"},{src:"/BirdingPics/12.2.RedShoulder3.JPG",height:563,bird:"Red Shouldered Hawk (Juvenile)",desc:"2 December 2020. Charlotte, NC"},{src:"./BirdingPics/1.19.Creeper.JPG",height:563,bird:"Brown Creeper",desc:"19 January 2021. Charlotte, NC"},{src:"/BirdingPics/1.19.Chickadee.JPG",height:563,bird:"Carolina Chickadee",desc:"19 January 2021. Charlotte, NC"},{src:"./BirdingPics/1.19.Titmouse.JPG",height:563,bird:"Tufted Titmouse",desc:"19 January 2021. Charlotte, NC"},{src:"/BirdingPics/12.17.FoxSparrow.JPG",height:563,bird:"Fox Sparrow",desc:"17 December 2020. Charlotte, NC"},{src:"/BirdingPics/12.2.Goldfinch2.JPG",height:563,bird:"American Goldfinch (Female)",desc:"2 December 2020. Charlotte, NC"},{src:"/BirdingPics/12.2.RedBellied2.JPG",height:563,bird:"Red-Bellied Woodpecker",desc:"2 December 2020. Charlotte, NC"},{src:"/BirdingPics/12.11.Wren.JPG",height:563,bird:"Carolina Wren",desc:"11 December 2020. Charlotte, NC"},{src:"/BirdingPics/12.5.Downy2.JPG",height:563,bird:"Downy Woodpecker",desc:"5 December 2020. Charlotte, NC"},{src:"./BirdingPics/12.17.Cardinal.JPG",height:563,bird:"Northern Cardinal",desc:"17 December 2020. Charlotte, NC"},{src:"./BirdingPics/1.19.SongSparrow.JPG",height:563,bird:"Song Sparrow",desc:"19 January 2021. Charlotte, NC"},{src:"/BirdingPics/12.5.Robin.JPG",height:563,bird:"American Robin",desc:"5 December 2020. Charlotte, NC"}],birdList:["Northern Mockingbird","Northern Cardinal","Carolina Wren","Tufted Titmouse","Red-Shouldered Hawk","Downy Woodpecker","Red-Bellied Woodpecker","Mourning Dove","Dark-Eyed Junco","Carolina Chickadee","Fox Sparrow","American Goldfinch","American Robin","American Crow","Brown Creeper","Ruby-Crowned Kinglet","Song Sparrow"]},v=(r(36),function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){return Object(d.a)(this,r),i.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(t.jsx)(J.a,{id:"carO",children:this.props.pics.map((function(e){return Object(t.jsxs)(J.a.Item,{className:"carousel-item",children:[Object(t.jsx)("img",{src:e.src,height:e.height}),Object(t.jsxs)(J.a.Caption,{style:{textAlign:"left"},children:[Object(t.jsx)("h3",{style:{backgroundColor:"gray"},children:e.bird}),Object(t.jsx)("p",{style:{backgroundColor:"gray"},children:e.desc})]})]})}))})}}]),r}(n.Component)),w=function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){return Object(d.a)(this,r),i.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(t.jsxs)("div",{className:"birdList",children:[Object(t.jsx)("h5",{children:"Sight List:"}),Object(t.jsx)("ul",{children:this.props.birds.map((function(e){return Object(t.jsx)("li",{children:e})}))})]})}}]),r}(n.Component),G={images:[{src:"/BirdingPics/1.9.RedHead.JPG",height:563,bird:"Red-Headed Woodpecker",desc:"9 January 2021"},{src:"/BirdingPics/1.9.RedBreastNut.JPG",height:563,bird:"Red Breasted Nuthatch",desc:"(Verified By Guide) 9 January 2021"},{src:"/BirdingPics/1.9.Bluebird.JPG",height:563,bird:"Eastern Bluebird",desc:"9 January 2021"},{src:"/BirdingPics/1.9.Goldfinch.JPG",height:563,bird:"American Goldfinch",desc:"9 January 2021"},{src:"/BirdingPics/1.9.Cormor.JPG",height:563,bird:"Double-Crested Cormorant",desc:"9 January 2021"},{src:"/BirdingPics/1.9.PineSis.JPG",height:563,bird:"Pine Siskin",desc:"(Verified by Guide) 9 January 2021"},{src:"/BirdingPics/1.9.Mocking.JPG",height:563,bird:"Northern Mockingbird",desc:"9 January 2021"},{src:"/BirdingPics/1.9.BlueJay.JPG",height:563,bird:"Blue Jay",desc:"9 January 2021"},{src:"/BirdingPics/1.9.RedBelly.JPG",height:563,bird:"Red-Bellied Woodpecker",desc:"9 January 2021"},{src:"/BirdingPics/1.9.Coot.JPG",height:563,bird:"American Coot",desc:"9 January 2021"},{src:"/BirdingPics/1.9.Hawky.JPG",height:563,bird:"Unidentified Hawk",desc:"(Liklihood: Coopers, Sharp-Shinned) 9 January 2021"}],birdList:["Red Breasted Nuthatch","Red Headed Woodpecker","Golden Crowned Kinglet","Ruby Crowned Kinglet","Coopers Hawk","Pine Siskin","Belted Kingfisher","American Coot","Double Crested Cormorant","Field Sparrow","Eastern Towhee","Eastern Bluebird","Eastern Phoebe","House Finch","White Throated Sparrow","Fox Sparrow","Blue Jay","American Goldfinch","Red Bellied Woodpecker","Tufted Titmouse","Northern Mockingbird","Carolina Chickadee","Northern Cardinal"]},S=function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){return Object(d.a)(this,r),i.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(t.jsxs)(b.a,{style:{backgroundColor:"#B1A296",padding:"10px",fontFamily:""},fluid:!0,children:[Object(t.jsx)(j.a,{id:"headerRow",children:Object(t.jsx)(u.a,{children:Object(t.jsx)("h1",{children:"McDowell Nature Preserve Bird Trip January 9 2021 - Lake Wylie "})})}),Object(t.jsxs)(j.a,{children:[Object(t.jsx)(u.a,{xs:3,children:Object(t.jsx)(w,{birds:G.birdList})}),Object(t.jsx)(u.a,{xs:9,children:Object(t.jsx)(v,{pics:G.images})})]}),Object(t.jsx)("br",{}),Object(t.jsx)(j.a,{id:"headerRow",children:Object(t.jsx)(u.a,{children:Object(t.jsx)("h1",{children:"Backyard Birds Winter 2020-2021 - Charlotte NC"})})}),Object(t.jsxs)(j.a,{children:[Object(t.jsx)(u.a,{xs:3,children:Object(t.jsx)(w,{birds:N.birdList})}),Object(t.jsx)(u.a,{xs:9,children:Object(t.jsx)(v,{pics:N.images})})]})]})}}]),r}(n.Component),R=function(e){Object(h.a)(r,e);var i=Object(l.a)(r);function r(){return Object(d.a)(this,r),i.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(t.jsx)("div",{children:"Hello There (hockey)"})}}]),r}(n.Component);s.a.render(Object(t.jsx)(P.a,{children:Object(t.jsxs)(c.a.StrictMode,{children:[Object(t.jsx)(B.a,{path:"/",exact:!0,component:k}),Object(t.jsx)(B.a,{path:"/bird",exact:!0,component:S}),Object(t.jsx)(B.a,{path:"/hockey",exact:!0,component:R})]})}),document.getElementById("root")),y()}},[[56,1,2]]]);
//# sourceMappingURL=main.855026b8.chunk.js.map