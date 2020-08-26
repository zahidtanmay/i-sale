/*! For license information please see ../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{574:function(e,t,n){var content=n(796);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("456db3ae",content,!0,{sourceMap:!1})},794:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(1),a=n(7),s=a.get,l=(a.deepValue,a.isArray),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,a=void 0===i?100:i,l=n.threshold,c=void 0===l?.6:l,m=n.maxPatternLength,u=void 0===m?32:m,h=n.caseSensitive,d=void 0!==h&&h,p=n.tokenSeparator,f=void 0===p?/ +/g:p,g=n.findAllMatches,v=void 0!==g&&g,y=n.minMatchCharLength,k=void 0===y?1:y,b=n.id,x=void 0===b?null:b,M=n.keys,S=void 0===M?[]:M,_=n.shouldSort,w=void 0===_||_,C=n.getFn,P=void 0===C?s:C,L=n.sortFn,O=void 0===L?function(e,t){return e.score-t.score}:L,D=n.tokenize,j=void 0!==D&&D,A=n.matchAllTokens,I=void 0!==A&&A,E=n.includeMatches,T=void 0!==E&&E,z=n.includeScore,K=void 0!==z&&z,B=n.verbose,N=void 0!==B&&B;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:c,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:f,findAllMatches:v,minMatchCharLength:k,id:x,keys:S,includeMatches:T,includeScore:K,shouldSort:w,getFn:P,sortFn:O,verbose:N,tokenize:j,matchAllTokens:I},this.setCollection(t),this._processKeys(S)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var r=e[t];this._keyWeights[r]=1,this._keyNames.push(r)}else{for(var o=null,i=null,a=0,s=0,l=e.length;s<l;s+=1){var c=e[s];if(!c.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var m=c.name;if(this._keyNames.push(m),!c.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=c.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');i=null==i?u:Math.max(i,u),o=null==o?u:Math.min(o,u),this._keyWeights[m]=u,a+=u}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o);return this._computeScore(i),this.options.shouldSort&&this._sort(i),t.limit&&"number"==typeof t.limit&&(i=i.slice(0,t.limit)),this._format(i)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,l=n.length;s<l;s+=1)for(var c=n[s],m=0,u=this._keyNames.length;m<u;m+=1){var h=this._keyNames[m];this._analyze({key:h,value:this.options.getFn(c,h),record:c,index:s},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var n=this,r=e.key,o=e.arrayIndex,i=void 0===o?-1:o,a=e.value,s=e.record,c=e.index,m=t.tokenSearchers,u=void 0===m?[]:m,h=t.fullSearcher,d=t.resultMap,p=void 0===d?{}:d,f=t.results,g=void 0===f?[]:f;!function e(t,o,i,a){if(null!=o)if("string"==typeof o){var s=!1,c=-1,m=0;n._log("\nKey: ".concat(""===r?"--":r));var d=h.search(o);if(n._log('Full text: "'.concat(o,'", score: ').concat(d.score)),n.options.tokenize){for(var f=o.split(n.options.tokenSeparator),v=f.length,y=[],k=0,b=u.length;k<b;k+=1){var x=u[k];n._log('\nPattern: "'.concat(x.pattern,'"'));for(var M=!1,S=0;S<v;S+=1){var _=f[S],w=x.search(_),C={};w.isMatch?(C[_]=w.score,s=!0,M=!0,y.push(w.score)):(C[_]=1,n.options.matchAllTokens||y.push(1)),n._log('Token: "'.concat(_,'", score: ').concat(C[_]))}M&&(m+=1)}c=y[0];for(var P=y.length,L=1;L<P;L+=1)c+=y[L];c/=P,n._log("Token score average:",c)}var O=d.score;c>-1&&(O=(O+c)/2),n._log("Score average:",O);var D=!n.options.tokenize||!n.options.matchAllTokens||m>=u.length;if(n._log("\nCheck Matches: ".concat(D)),(s||d.isMatch)&&D){var j={key:r,arrayIndex:t,value:o,score:O};n.options.includeMatches&&(j.matchedIndices=d.matchedIndices);var A=p[a];A?A.output.push(j):(p[a]={item:i,output:[j]},g.push(p[a]))}}else if(l(o))for(var I=0,E=o.length;I<E;I+=1)e(I,o[I],i,a)}(i,a,s,c)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,r=0,o=e.length;r<o;r+=1){for(var i=e[r],a=i.output,s=a.length,l=1,c=0;c<s;c+=1){var m=a[c],u=m.key,h=n?t[u]:1,d=0===m.score&&t&&t[u]>0?Number.EPSILON:m.score;l*=Math.pow(d,h)}i.score=l,this._log(i)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var l={item:s.item},c=0,m=o.length;c<m;c+=1)o[c](s,l);t.push(l)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(2),i=n(3),a=n(6),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,l=n.threshold,c=void 0===l?.6:l,m=n.maxPatternLength,u=void 0===m?32:m,h=n.isCaseSensitive,d=void 0!==h&&h,p=n.tokenSeparator,f=void 0===p?/ +/g:p,g=n.findAllMatches,v=void 0!==g&&g,y=n.minMatchCharLength,k=void 0===y?1:y,b=n.includeMatches,x=void 0!==b&&b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:c,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:f,findAllMatches:v,includeMatches:x,minMatchCharLength:k},this.pattern=d?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return r&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,l=s.maxPatternLength,c=s.tokenSeparator;if(this.pattern.length>l)return o(e,this.pattern,c);var m=this.options,u=m.location,h=m.distance,d=m.threshold,p=m.findAllMatches,f=m.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:u,distance:h,threshold:d,findAllMatches:p,minMatchCharLength:f,includeMatches:r})}}])&&r(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var l=0,c=i.length;l<c;l+=1){var m=i[l];s.push([e.indexOf(m),m.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(4),o=n(5);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,l=i.distance,c=void 0===l?100:l,m=i.threshold,u=void 0===m?.6:m,h=i.findAllMatches,d=void 0!==h&&h,p=i.minMatchCharLength,f=void 0===p?1:p,g=i.includeMatches,v=void 0!==g&&g,y=s,k=e.length,b=u,x=e.indexOf(t,y),M=t.length,S=[],_=0;_<k;_+=1)S[_]=0;if(-1!==x){var w=r(t,{errors:0,currentLocation:x,expectedLocation:y,distance:c});if(b=Math.min(w,b),-1!==(x=e.lastIndexOf(t,y+M))){var C=r(t,{errors:0,currentLocation:x,expectedLocation:y,distance:c});b=Math.min(C,b)}}x=-1;for(var P=[],L=1,O=M+k,D=1<<(M<=31?M-1:30),j=0;j<M;j+=1){for(var A=0,I=O;A<I;)r(t,{errors:j,currentLocation:y+I,expectedLocation:y,distance:c})<=b?A=I:O=I,I=Math.floor((O-A)/2+A);O=I;var E=Math.max(1,y-I+1),T=d?k:Math.min(y+I,k)+M,z=Array(T+2);z[T+1]=(1<<j)-1;for(var K=T;K>=E;K-=1){var B=K-1,N=n[e.charAt(B)];if(N&&(S[B]=1),z[K]=(z[K+1]<<1|1)&N,0!==j&&(z[K]|=(P[K+1]|P[K])<<1|1|P[K+1]),z[K]&D&&(L=r(t,{errors:j,currentLocation:B,expectedLocation:y,distance:c}))<=b){if(b=L,(x=B)<=y)break;E=Math.max(1,2*y-x)}}if(r(t,{errors:j+1,currentLocation:y,expectedLocation:y,distance:c})>b)break;P=z}var W={isMatch:x>=0,score:0===L?.001:L};return v&&(W.matchedIndices=o(S,f)),W}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,l=t.distance,c=void 0===l?100:l,m=r/e.length,u=Math.abs(s-i);return c?m+u/c:u?1:m}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},r=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},i=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var l=s.indexOf("."),c=s,m=null;-1!==l&&(c=s.slice(0,l),m=s.slice(l+1));var u=t[c];if(null!=u)if(m||!o(u)&&!i(u))if(n(u))for(var h=0,d=u.length;h<d;h+=1)e(u[h],m);else m&&e(u,m);else a.push(r(u))}else a.push(t)}(e,t),a},isArray:n,isString:o,isNum:i,toString:r}}])},795:function(e,t,n){"use strict";var r=n(574);n.n(r).a},796:function(e,t,n){(t=n(8)(!1)).push([e.i,".pagination-select,.search-input{width:200px}",""]),e.exports=t},830:function(e,t,n){"use strict";n.r(t);n(302),n(99);var r,o=n(3),l=(n(543),n(84),n(544)),c=n.n(l),m=(n(545),n(546)),h=n.n(m),d=(n(537),n(538)),f=n.n(d),v=(n(22),n(539),n(540)),y=n.n(v),k=n(59),x=[{id:1,name:"Noelia O'Kon",nickname:"asperiores",email:"otho.smitham@example.com",salary:"€ 13098.00",age:39},{id:2,name:"Mr. Enid Von PhD",nickname:"alias",email:"pollich.cecilia@example.com",salary:"€ 35978.00",age:26},{id:3,name:"Colton Koch",nickname:"id",email:"little.myrna@example.net",salary:"€ 26278.00",age:48},{id:4,name:"Gregory Vandervort",nickname:"vel",email:"dock47@example.org",salary:"€ 25537.00",age:27},{id:5,name:"Miss Rahsaan Heaney IV",nickname:"qui",email:"ugrady@example.org",salary:"€ 49003.00",age:21},{id:6,name:"Ms. Crystel Zemlak IV",nickname:"reiciendis",email:"amari.rau@example.com",salary:"€ 12383.00",age:48},{id:7,name:"Nona McDermott",nickname:"quaerat",email:"adrien.baumbach@example.org",salary:"€ 18512.00",age:31},{id:8,name:"Miss Genoveva Murazik V",nickname:"rerum",email:"ohettinger@example.net",salary:"€ 31209.00",age:28},{id:9,name:"Beulah Huels",nickname:"non",email:"stefan99@example.com",salary:"€ 36920.00",age:53},{id:10,name:"Zoe Klein",nickname:"ex",email:"ejacobson@example.org",salary:"€ 35616.00",age:27},{id:11,name:"Vickie Kiehn",nickname:"assumenda",email:"ayost@example.com",salary:"€ 30790.00",age:29},{id:12,name:"Elwyn Herzog",nickname:"praesentium",email:"ckassulke@example.net",salary:"€ 35785.00",age:27},{id:13,name:"Selena Hettinger",nickname:"et",email:"bashirian.hyman@example.net",salary:"€ 31836.00",age:35},{id:14,name:"Edwin Beier",nickname:"eos",email:"janis71@example.org",salary:"€ 11902.00",age:38},{id:15,name:"Lexi Braun MD",nickname:"autem",email:"dusty74@example.net",salary:"€ 11927.00",age:45},{id:16,name:"Jovany Spencer",nickname:"fugit",email:"gbogisich@example.org",salary:"€ 44686.00",age:43},{id:17,name:"Prof. Maci Anderson DVM",nickname:"dolorem",email:"btorp@example.com",salary:"€ 25055.00",age:29},{id:18,name:"Joel Kulas MD",nickname:"sed",email:"phoebe.sauer@example.org",salary:"€ 11650.00",age:24},{id:19,name:"Mr. Dawson Greenholt",nickname:"nostrum",email:"asawayn@example.org",salary:"€ 46962.00",age:53},{id:20,name:"Prof. Lloyd Green",nickname:"velit",email:"laila.hintz@example.org",salary:"€ 12928.00",age:46},{id:21,name:"Shayna Morar",nickname:"rerum",email:"wfay@example.org",salary:"€ 22638.00",age:26},{id:22,name:"Krista Schulist",nickname:"qui",email:"gregoria.jakubowski@example.com",salary:"€ 49345.00",age:42},{id:23,name:"Leone Lemke",nickname:"repellat",email:"ltorphy@example.com",salary:"€ 17560.00",age:42},{id:24,name:"Dr. Willie Kemmer II",nickname:"quasi",email:"ivy51@example.net",salary:"€ 35370.00",age:30},{id:25,name:"Deonte Lebsack",nickname:"nesciunt",email:"alisa83@example.net",salary:"€ 32725.00",age:24},{id:26,name:"Prof. Shayne Nader",nickname:"voluptas",email:"bosco.shaina@example.net",salary:"€ 9844.00",age:23},{id:27,name:"Prof. Kennith Kertzmann",nickname:"alias",email:"satterfield.jonathan@example.com",salary:"€ 41950.00",age:25},{id:28,name:"Miss Meagan O'Keefe",nickname:"corporis",email:"tracy.barrows@example.com",salary:"€ 41803.00",age:50},{id:29,name:"Prof. Edward Pagac MD",nickname:"quia",email:"gerhard65@example.org",salary:"€ 22896.00",age:43},{id:30,name:"Samantha Weissnat",nickname:"est",email:"crystel66@example.net",salary:"€ 18805.00",age:43},{id:31,name:"Dr. Gilbert Ward",nickname:"dolorum",email:"sandrine06@example.net",salary:"€ 16644.00",age:32},{id:32,name:"Mike West",nickname:"laudantium",email:"jborer@example.net",salary:"€ 35728.00",age:42},{id:33,name:"Prof. Isabell Cruickshank I",nickname:"recusandae",email:"ondricka.lurline@example.org",salary:"€ 44574.00",age:35},{id:34,name:"Prof. Lonny Rath",nickname:"nihil",email:"rfeest@example.net",salary:"€ 19949.00",age:48},{id:35,name:"Santina Medhurst MD",nickname:"suscipit",email:"ila24@example.net",salary:"€ 36323.00",age:51},{id:36,name:"Jeff Lehner",nickname:"quo",email:"jarred77@example.com",salary:"€ 48462.00",age:42},{id:37,name:"Samanta Pfeffer",nickname:"officia",email:"fgoyette@example.net",salary:"€ 19601.00",age:42},{id:38,name:"Ofelia Torp",nickname:"a",email:"ericka44@example.net",salary:"€ 33149.00",age:35},{id:39,name:"Mrs. Margarete Raynor",nickname:"quia",email:"jlegros@example.net",salary:"€ 21951.00",age:40},{id:40,name:"Mr. Brant Howell V",nickname:"perspiciatis",email:"franecki.gerald@example.org",salary:"€ 41552.00",age:53},{id:41,name:"Reilly Ruecker DVM",nickname:"ad",email:"ldeckow@example.net",salary:"€ 22709.00",age:42},{id:42,name:"Zachery McDermott",nickname:"molestiae",email:"gladyce84@example.com",salary:"€ 32354.00",age:25},{id:43,name:"Heloise Kulas",nickname:"aut",email:"kessler.helen@example.net",salary:"€ 45086.00",age:54},{id:44,name:"Norma Dibbert",nickname:"amet",email:"eudora36@example.net",salary:"€ 15661.00",age:46},{id:45,name:"Immanuel Auer",nickname:"quia",email:"halvorson.theodora@example.org",salary:"€ 15862.00",age:39},{id:46,name:"Lamont Borer",nickname:"expedita",email:"trantow.neoma@example.com",salary:"€ 12544.00",age:25},{id:47,name:"Brooke Purdy",nickname:"cupiditate",email:"bhermiston@example.net",salary:"€ 14457.00",age:50},{id:48,name:"Dr. Leo Dach",nickname:"et",email:"camila.ward@example.com",salary:"€ 40278.00",age:49},{id:49,name:"Krystal Langosh",nickname:"voluptatum",email:"pacocha.yesenia@example.org",salary:"€ 9305.00",age:34},{id:50,name:"Florence Greenfelder",nickname:"odit",email:"kenyatta.oconnell@example.com",salary:"€ 36980.00",age:38}],M=n(794),S=n.n(M),_=n(228),w=n.n(_),C={name:"paginated",components:(r={BasePagination:k.d},Object(o.a)(r,y.a.name,y.a),Object(o.a)(r,f.a.name,f.a),Object(o.a)(r,h.a.name,h.a),Object(o.a)(r,c.a.name,c.a),r),computed:{queriedData:function(){var e=this.tableData;return this.searchedData.length>0&&(e=this.searchedData),e.slice(this.from,this.to)},to:function(){var e=this.from+this.pagination.perPage;return this.total<e&&(e=this.total),e},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.searchedData.length>0?this.searchedData.length:this.tableData.length}},data:function(){return{pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50],total:0},searchQuery:"",propsToSearch:["name","email","age"],tableColumns:[{prop:"name",label:"Name",minWidth:200},{prop:"email",label:"Email",minWidth:250},{prop:"age",label:"Age",minWidth:100},{prop:"salary",label:"Salary",minWidth:120}],tableData:x,searchedData:[],fuseSearch:null}},methods:{handleLike:function(e,t){w()({title:"You liked ".concat(t.name),buttonsStyling:!1,type:"success",confirmButtonClass:"btn btn-success btn-fill"})},handleEdit:function(e,t){w()({title:"You want to edit ".concat(t.name),buttonsStyling:!1,confirmButtonClass:"btn btn-info btn-fill"})},handleDelete:function(e,t){var n=this;w()({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonClass:"btn btn-success btn-fill",cancelButtonClass:"btn btn-danger btn-fill",confirmButtonText:"Yes, delete it!",buttonsStyling:!1}).then((function(e){e.value&&(n.deleteRow(t),w()({title:"Deleted!",text:"You deleted ".concat(t.name),type:"success",confirmButtonClass:"btn btn-success btn-fill",buttonsStyling:!1}))}))},deleteRow:function(e){var t=this.tableData.findIndex((function(t){return t.id===e.id}));t>=0&&this.tableData.splice(t,1)}},mounted:function(){this.fuseSearch=new S.a(this.tableData,{keys:["name","email"],threshold:.3})},watch:{searchQuery:function(e){var t=this.tableData;""!==e&&(t=this.fuseSearch.search(this.searchQuery)),this.searchedData=t}}},P=(n(795),n(4)),component=Object(P.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-12"},[n("card",{attrs:{"card-body-classes":"table-full-width"}},[n("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v("Paginated Tables")]),e._v(" "),n("div",[n("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"},[n("el-select",{staticClass:"select-primary mb-3 pagination-select",attrs:{placeholder:"Per page"},model:{value:e.pagination.perPage,callback:function(t){e.$set(e.pagination,"perPage",t)},expression:"pagination.perPage"}},e._l(e.pagination.perPageOptions,(function(e){return n("el-option",{key:e,staticClass:"select-primary",attrs:{label:e,value:e}})})),1),e._v(" "),n("base-input",[n("el-input",{staticClass:"mb-3 search-input",attrs:{type:"search",clearable:"","prefix-icon":"el-icon-search",placeholder:"Search records","aria-controls":"datatables"},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1)],1),e._v(" "),n("el-table",{attrs:{data:e.queriedData}},[e._l(e.tableColumns,(function(e){return n("el-table-column",{key:e.label,attrs:{"min-width":e.minWidth,prop:e.prop,label:e.label}})})),e._v(" "),n("el-table-column",{attrs:{"min-width":135,align:"right",label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){return n("div",{},[n("base-button",{staticClass:"like btn-link",attrs:{type:"info",size:"sm",icon:""},nativeOn:{click:function(n){return e.handleLike(t.$index,t.row)}}},[n("i",{staticClass:"tim-icons icon-heart-2"})]),e._v(" "),n("base-button",{staticClass:"edit btn-link",attrs:{type:"warning",size:"sm",icon:""},nativeOn:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[n("i",{staticClass:"tim-icons icon-pencil"})]),e._v(" "),n("base-button",{staticClass:"remove btn-link",attrs:{type:"danger",size:"sm",icon:""},nativeOn:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[n("i",{staticClass:"tim-icons icon-simple-remove"})])],1)}}])})],2)],1),e._v(" "),n("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[n("div",{},[n("p",{staticClass:"card-category"},[e._v("\n                Showing "+e._s(e.from+1)+" to "+e._s(e.to)+" of "+e._s(e.total)+" entries\n              ")])]),e._v(" "),n("base-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":e.pagination.perPage,total:e.total},model:{value:e.pagination.currentPage,callback:function(t){e.$set(e.pagination,"currentPage",t)},expression:"pagination.currentPage"}})],1)])],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-md-8 ml-auto mr-auto"},[t("h2",{staticClass:"text-center"},[this._v("Paginated Tables")]),this._v(" "),t("p",{staticClass:"text-center"},[this._v("\n        With a selection of custom components & and Element UI components, you\n        can built beautiful data tables. For more info check\n        "),t("a",{attrs:{href:"http://element.eleme.io/#/en-US/component/table",target:"_blank"}},[this._v("Element UI Table")])])])}],!1,null,null,null);t.default=component.exports}}]);