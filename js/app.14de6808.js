(function(a){function t(t){for(var r,o,u=t[0],s=t[1],h=t[2],v=0,b=[];v<u.length;v++)o=u[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r]);c&&c(t);while(b.length)b.shift()();return i.push.apply(i,h||[]),e()}function e(){for(var a,t=0;t<i.length;t++){for(var e=i[t],r=!0,u=1;u<e.length;u++){var s=e[u];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),a=o(o.s=e[0]))}return a}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=a,o.c=r,o.d=function(a,t,e){o.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,t){if(1&t&&(a=o(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)o.d(e,r,function(t){return a[t]}.bind(null,r));return e},o.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(t,"a",t),t},o.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},o.p="/first-bit/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var c=s;i.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var r=e("85ec"),n=e.n(r);n.a},"0ab0":function(a,t,e){"use strict";var r=e("c432"),n=e.n(r);n.a},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"sketch"}}),e("div",{staticClass:"title"},[a._v(" <First Bit/> ")]),a._m(0),e("Grid")],1)},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"about"},[a._v(" It's hard. It's always hard the first time you do something. Especially when you are collaborating, making mistakes isn't a comfortable thing. We at "),e("a",{staticClass:"link",attrs:{href:"https://github.com/BitByte-TPC"}},[a._v("BitByte - The Programming Club")]),a._v(" wanted to simplify the way new open-source contributors learn & contribute for the first time. "),e("br"),e("br"),a._v(" If you are a beginner and wants to get your hands dirty with Open Source contributions, you've hopped on to the right place. This project is made just for you. Visit "),e("a",{staticClass:"link",attrs:{href:"https://github.com/BitByte-TPC/first-bit#readme"}},[a._v("README.md")]),a._v(" to get started. ")])}],o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},a._l(a.nameDB,(function(a,t){return e("Card",{key:t,attrs:{name:a.name,bio:a.bio,githubId:a.githubId,avatar_url:a.avatar_url}})})),1)},u=[],s=(e("4de4"),e("4e82"),e("b0c0"),e("f81b")),h=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"item"},[e("img",{staticClass:"avatar",attrs:{src:a.avatar_url}}),e("div",{staticClass:"des"},[e("div",{staticClass:"name"},[a._v(a._s(a.name))]),e("div",{staticClass:"github-profile"},[e("a",{attrs:{href:"https://github.com/"+a.githubId}},[a._v("github.com/"+a._s(a.githubId))])]),e("div",{staticClass:"bio"},[a._v(a._s(a.bio))])])])},c=[],v={name:"Card",props:{avatar_url:String,name:String,githubId:String,bio:String}},b=v,l=(e("0ab0"),e("2877")),m=Object(l["a"])(b,h,c,!1,null,null,null),g=m.exports,d={name:"Grid",components:{Card:g},props:{},data:function(){return{nameDB:s}},mounted:function(){this.nameDB=this.nameDB.filter((function(a){return a.name&&a.bio&&a.githubId})).sort((function(a,t){var e=a.name.toLowerCase(),r=t.name.toLowerCase();return e<r?-1:e>r?1:0}))}},p=d,f=(e("9f4b"),Object(l["a"])(p,o,u,!1,null,null,null)),I=f.exports,y=e("3425"),_=e.n(y),k=(e("cd7c"),{name:"App",components:{Grid:I},created:function(){new _.a}}),w=k,S=(e("034f"),Object(l["a"])(w,n,i,!1,null,null,null)),M=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(a){return a(M)}}).$mount("#app")},"85ec":function(a,t,e){},"9f4b":function(a,t,e){"use strict";var r=e("c48a"),n=e.n(r);n.a},c432:function(a,t,e){},c48a:function(a,t,e){},cd7c:function(a,t,e){e("970b"),e("5bc3");console.log("loaded")},f81b:function(a){a.exports=JSON.parse('[{"githubId":"Anjali041","name":"Anjali Kumari","bio":"Glitch in the Matrix","avatar_url":"https://avatars0.githubusercontent.com/u/71588916?v=4"},{"githubId":"ChiragSharma1","name":"Chirag Shamra","bio":"Music lover","avatar_url":"https://avatars2.githubusercontent.com/u/63919014?v=4"},{"githubId":"DevRenwick","name":"Renwick Leggett","bio":"Hey, I\'m Ren and I love exploring every aspect of this great big cyber world. I\'m mostly interested in ethical hacking.","avatar_url":"https://avatars0.githubusercontent.com/u/71755653?v=4"},{"githubId":"FaMoSi","name":"Simone Faggi","bio":"MSc Intelligent Systems :)","avatar_url":"https://avatars1.githubusercontent.com/u/26636556?v=4"},{"githubId":"Fonta22","name":"Fonta","bio":"I love programming! :D","avatar_url":"https://avatars1.githubusercontent.com/u/61181201?v=4"},{"githubId":"geetu-sharma","name":"Geetu","bio":"Hi. I\'m a Developer. About me: I love Security and Hacking","avatar_url":"https://avatars1.githubusercontent.com/u/35969449?v=4"},{"githubId":"HarshitKumarOjha","name":"Harshit","bio":"Self learning computer science beginner :D","avatar_url":"https://avatars2.githubusercontent.com/u/59761032?v=4"},{"githubId":"Harshita248","name":"Harshita Raj","bio":"Diving into development with implementation !","avatar_url":"https://avatars0.githubusercontent.com/u/46245859?v=4"},{"githubId":"Hassnain21","name":"Luke","bio":"Hi. I\'m a Computer Science student. About me: I am currently learnig things and exploring Open Source","avatar_url":"https://avatars0.githubusercontent.com/u/56715753?v=4"},{"githubId":"Ishaan28malik","name":"Ishaan","bio":"I am a fullstack developer and Open Source Maintainer","avatar_url":"https://avatars3.githubusercontent.com/u/27343592?v=4"},{"githubId":"MananJethwani","name":"manan jethwani","bio":"Something about yourself using not more than 64 characters.","avatar_url":"https://avatars0.githubusercontent.com/u/50267986?v=4"},{"githubId":"Mohitmadhav","name":"D.V.Mohit Madhav Rao","bio":"Exploring the world of technology","avatar_url":"https://avatars2.githubusercontent.com/u/59333817?v=4"},{"githubId":"MrLucyfer","name":"Nil Folquer","bio":"I love open source projects and how people mantain them. I would like to start contributing","avatar_url":"https://avatars2.githubusercontent.com/u/36053268?v=4"},{"githubId":"NavtikaKumar","name":"Navtika","bio":"This is my first attempt at Open Source contribution!","avatar_url":"https://avatars0.githubusercontent.com/u/64063763?v=4"},{"githubId":"Nunia","name":"Sunil Kumar Nunia","bio":"Currently working as a Digital Marketing Expert and Web Developer. He has two years of industry experiance in the field of Digital Marketing and Software Development.","avatar_url":"https://avatars3.githubusercontent.com/u/51073115?v=4"},{"githubId":"Priyanshu2802","name":"Priyanshu Ranjan","bio":"BE THE REASON FOR OTHERS SMILE","avatar_url":"https://avatars0.githubusercontent.com/u/63105488?v=4"},{"githubId":"RishabhDevbanshi","name":"Rishabh Devbanshi","bio":"Competitive Coder and Web Developer","avatar_url":"https://avatars0.githubusercontent.com/u/64083218?v=4"},{"githubId":"RutvikJ77","name":"Rutvik J","bio":"A self-taught student developer and a generalist Designer.","avatar_url":"https://avatars1.githubusercontent.com/u/45565999?v=4"},{"githubId":"TrashPandit","name":"Abraham Guernsey","bio":"I am new to programming and this is helpful.","avatar_url":"https://avatars0.githubusercontent.com/u/52073894?v=4"},{"githubId":"YASH3166","name":"Yash","bio":"I am computer engineering student","avatar_url":"https://avatars0.githubusercontent.com/u/70128865?v=4"},{"githubId":"Yash10299","name":"Yash Mehta","bio":"Mobile and Web developer","avatar_url":"https://avatars0.githubusercontent.com/u/29833170?v=4"},{"githubId":"YasiOnFire","name":"Yasio","bio":"Hi. I\'m a fullstack developer. About me: yasio.pl","avatar_url":"https://avatars3.githubusercontent.com/u/3300701?v=4"},{"githubId":"ZUbair-12","name":"Zubair-Ahmed","bio":"Hi I am Software Engineering Student.Thanks","avatar_url":"https://avatars2.githubusercontent.com/u/70325002?v=4"},{"githubId":"ajwad-shaikh","name":"Ajwad Shaikh","bio":"I\'m a software development engineer, based in Mumbai, exploring opportunities to build and democratize technology for the next billion internet users with a keen focus on mobile.","avatar_url":"https://avatars1.githubusercontent.com/u/37571185?v=4"},{"githubId":"akshatgondane","name":"Akshat Gondane","bio":"Learning about myself","avatar_url":"https://avatars2.githubusercontent.com/u/59738771?v=4"},{"githubId":"ashiaecs","name":"Ashi","bio":"I am student at IIITDM Jabalpur in Mechanical Department.","avatar_url":"https://avatars3.githubusercontent.com/u/58971804?v=4"},{"githubId":"augilar","name":"Varshith Kancharla","bio":"Electronics enthusiast who loves to code and has a bad sense of humour","avatar_url":"https://avatars1.githubusercontent.com/u/58568049?v=4"},{"githubId":"cmeyrueix4","name":"Cyrielle Meyrueix","bio":"CS student wanting to learn more about open-source","avatar_url":"https://avatars0.githubusercontent.com/u/43075993?v=4"},{"githubId":"code-bmk","name":"Beni","bio":"Hi, I am a developer who is new to open-source. I am looking forward to learn on how to be part of the journey of open-source.","avatar_url":"https://avatars1.githubusercontent.com/u/6471922?v=4"},{"githubId":"dakshayahuja","name":"Dakshay Ahuja","bio":"Hi, I am a first year student of B.Tech CSE in Chitkara University. I like listening to music while learning programming.","avatar_url":"https://avatars2.githubusercontent.com/u/63056801?v=4"},{"githubId":"diisophiia","name":"Andreia Silva","bio":"I love coding!","avatar_url":"https://avatars1.githubusercontent.com/u/21161922?v=4"},{"githubId":"erikhlp","name":"Erikh Domingues","bio":"Computer Science student in Brazil","avatar_url":"https://avatars3.githubusercontent.com/u/49249342?v=4"},{"githubId":"extraalek","name":"Александра Обрадовић","bio":"First time open source contributor!","avatar_url":"https://avatars0.githubusercontent.com/u/34386605?v=4"},{"githubId":"femakin","name":"Femi Akinyemi","bio":"I\'m a front-end developer who is also intrested in JavaScript.","avatar_url":"https://avatars3.githubusercontent.com/u/46872764?v=4"},{"githubId":"fikimaul","name":"Fiki Maulana","bio":"Web Developer from Indonesia","avatar_url":"https://avatars1.githubusercontent.com/u/18456011?v=4"},{"githubId":"garg3133","name":"Priyansh Garg","bio":"Just another guy with a knack for programming :P","avatar_url":"https://avatars1.githubusercontent.com/u/39924567?v=4"},{"githubId":"garvitgupta13","name":"Garvit Gupta","bio":"Learning never ends","avatar_url":"https://avatars1.githubusercontent.com/u/70805691?v=4"},{"githubId":"get-thepacket","name":"Lakshya Baghel","bio":"To be or to be not","avatar_url":"https://avatars0.githubusercontent.com/u/38386292?v=4"},{"githubId":"guptadhaval18","name":"Dhaval Gupta","bio":"A human surrounded by 0\'s and 1\'s","avatar_url":"https://avatars3.githubusercontent.com/u/47078156?v=4"},{"githubId":"haidarrifki","name":"Haidar Rifki","bio":"Responsible for building out the server side.","avatar_url":"https://avatars3.githubusercontent.com/u/19185336?v=4"},{"githubId":"hritikpnd24","name":"Hritik Pandey","bio":"I am Hritik Pandey from India, currently in the second year in college trying to complete my 4 year Bachelors in Technology in course Information Technology.That is why i am really into latest technology and coding.I hope i\'ll be good at those things in future.","avatar_url":"https://avatars2.githubusercontent.com/u/57009672?v=4"},{"githubId":"isaxito","name":"Eguaras Marcelo Isaac","bio":"I like what I do","avatar_url":"https://avatars0.githubusercontent.com/u/63028133?v=4"},{"githubId":"janglee123","name":"Meru Patel","bio":"Finding 0\'s between 1\'s inside cpu.","avatar_url":"https://avatars3.githubusercontent.com/u/29702428?v=4"},{"githubId":"kanishka8276","name":"Kanishka Vijayvargiya","bio":"Learning","avatar_url":"https://avatars2.githubusercontent.com/u/66053534?v=4"},{"githubId":"kofosu2289","name":"Kenneth Ofosu","bio":"I am an aspiring full stack engineer living in Brooklyn, NY.","avatar_url":"https://avatars3.githubusercontent.com/u/18624999?v=4"},{"githubId":"lazav94","name":"Lazar Vasic","bio":"Hello I\'m software engineer from Serbia 👨‍💻","avatar_url":"https://avatars1.githubusercontent.com/u/9640850?v=4"},{"githubId":"manRexx","name":"Manik","bio":"Mobile and Web developer with good taste in humour and tea :)","avatar_url":"https://avatars3.githubusercontent.com/u/46069912?v=4"},{"githubId":"maryanamorato","name":"Maryana Morato","bio":"Software developer! <3","avatar_url":"https://avatars1.githubusercontent.com/u/49340939?v=4"},{"githubId":"muhamadhafidz","name":"Muhamad Nur Hafidz","bio":"Hello, iam a beginner programmer from indonesia","avatar_url":"https://avatars3.githubusercontent.com/u/17488628?v=4"},{"githubId":"patagu","name":"Pata Gu","bio":"On your marks..., set..., hack!","avatar_url":"https://avatars1.githubusercontent.com/u/4786695?v=4"},{"githubId":"pranjalg131","name":"Pranjal Gupta","bio":"Passionate about Web and Android Development","avatar_url":"https://avatars2.githubusercontent.com/u/58547882?v=4"},{"githubId":"priyanshnama","name":"Priyansh Nama","bio":"Android Developer and Open Source Contributor","avatar_url":"https://avatars3.githubusercontent.com/u/54625644?v=4"},{"githubId":"Ralphive","name":"Ralph Oliveira","bio":"I am a Solution Architect by trade and a dev at heard. I enjoy creatinig prototypes and am always eager to learn something new.","avatar_url":"https://avatars3.githubusercontent.com/u/9930965?v=4"},{"githubId":"rejvban","name":"Lazar Karic","bio":"Searching new horizons...","avatar_url":"https://avatars0.githubusercontent.com/u/16634314?v=4"},{"githubId":"rishitha-pericherla95","name":"rishitha pericherla","bio":"here to learn contribution to open source suing git and github","avatar_url":"https://avatars0.githubusercontent.com/u/55206644?v=4"},{"githubId":"rizaradiarivaldo","name":"Riza Radia Rivaldo","bio":"Im Fullstack Developer","avatar_url":"https://avatars3.githubusercontent.com/u/58997508?v=4"},{"githubId":"sakshi-s","name":"Sakshi Sharma","bio":"Dreamer","avatar_url":"https://avatars2.githubusercontent.com/u/39264146?v=4"},{"githubId":"sankshitpandoh","name":"Sankshit Pandoh","bio":"A 21 years old  Industrial Engineer who loves to code :)","avatar_url":"https://avatars2.githubusercontent.com/u/51407842?v=4"},{"githubId":"sdhiman99","name":"Shivansh Dhiman","bio":"404","avatar_url":"https://avatars2.githubusercontent.com/u/38396362?v=4"},{"githubId":"sebastianroming","name":"Sebastian Roming","bio":"Frontend developer from Germany, in love with TypeScript. Software craftsman, open source enthusiast.","avatar_url":"https://avatars3.githubusercontent.com/u/200112?v=4"},{"githubId":"shivamrai2001","name":"Shivam Rai","bio":"To be updated soon..","avatar_url":"https://avatars3.githubusercontent.com/u/71363966?v=4"},{"githubId":"shivamsouravjha","name":"Shivam Sourav Jha","bio":"A learner learning with earpods on.","avatar_url":"https://avatars0.githubusercontent.com/u/60891544?v=4"},{"githubId":"sofyanmoch","name":"Mochamad Sofyan","bio":"Im noob developer","avatar_url":"https://avatars3.githubusercontent.com/u/58968418?v=4"},{"githubId":"Sourav-Patel","name":"Sourav Patel","bio":"i\'m 3rd year student","avatar_url":"https://avatars3.githubusercontent.com/u/68344470?v=4"},{"githubId":"swetasahoo29","name":"Sweta Snigdha Sahoo","bio":"I am a web developer.My hoppy is dancing","avatar_url":"https://avatars3.githubusercontent.com/u/46675936?v=4"},{"githubId":"tmo66","name":"Tushar Maheshwari","bio":"A Random guy with Random Dreams...","avatar_url":"https://avatars0.githubusercontent.com/u/63875632?v=4"},{"githubId":"vaibhavaaditya","name":"S Vaibhava Aditya","bio":" ","avatar_url":"https://avatars0.githubusercontent.com/u/60606630?v=4"},{"githubId":"viragz158","name":"Virag Zaveri","bio":"Hey there! I am quality engineer, passionate about learning new things","avatar_url":"https://avatars2.githubusercontent.com/u/35028969?v=4"},{"githubId":"wisetok12680","name":"Aarush Srivastava","bio":"I am a student and a enthusiast.","avatar_url":"https://avatars2.githubusercontent.com/u/53168325?v=4"}]')}});
//# sourceMappingURL=app.14de6808.js.map