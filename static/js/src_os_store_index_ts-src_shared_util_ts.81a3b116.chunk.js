(globalThis.webpackChunkdefi_land=globalThis.webpackChunkdefi_land||[]).push([["src_os_store_index_ts-src_shared_util_ts"],{65090:(e,t,a)=>{"use strict";a.d(t,{E5:()=>c,T8:()=>l,ZP:()=>o});var s=a(19289),n=a(95418);const r="accounts",l=(0,s.createAsyncThunk)(`${r}/getAccounts`,(async e=>{let{owner:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid owner/wallet address");const{splt:a}=window.sentre,s=n.account.fromAddress(t),{value:r}=await a.connection.getTokenAccountsByOwner(s,{programId:a.spltProgramId});let l={};return r.forEach((e=>{let{pubkey:t,account:{data:s}}=e;const n=t.toBase58(),r=a.parseAccountData(s);return l[n]=r})),l})),i=(0,s.createAsyncThunk)(`${r}/getAccount`,(async(e,t)=>{let{address:a}=e,{getState:s}=t;if(!n.account.isAddress(a))throw new Error("Invalid account address");const{accounts:{[a]:r}}=s();if(r)return{[a]:r};const{splt:l}=window.sentre;return{[a]:await l.getAccountData(a)}})),c=(0,s.createAsyncThunk)(`${r}/upsetAccount`,(async e=>{let{address:t,data:a}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!a)throw new Error("Data is empty");return{[t]:a}})),d=(0,s.createAsyncThunk)(`${r}/deleteAccount`,(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),o=(0,s.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:a}=t;return a})).addCase(i.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(c.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(d.fulfilled,((e,t)=>{let{payload:a}=t;delete e[a.address]}))}}).reducer},5105:(e,t,a)=>{"use strict";a.d(t,{Xt:()=>d,Z9:()=>c,ZP:()=>o,fL:()=>i});var s=a(19289),n=a(95418),r=a(3007);const l="flags",i=(0,s.createAsyncThunk)("flags/loadVisited",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet");const l=new r.Z(s).createInstance("sentre");return{visited:await l.getItem("visited")||!1}})),c=(0,s.createAsyncThunk)("flags/updateVisited",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet");const l=new r.Z(s).createInstance("sentre");return await l.setItem("visited",e),{visited:e}})),d=(0,s.createAsyncThunk)("flags/updateLoading",(async e=>({loading:e}))),o=(0,s.createSlice)({name:l,initialState:{visited:!0,loading:!0},reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(c.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(d.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},87358:(e,t,a)=>{"use strict";a.d(t,{Qy:()=>y,ZP:()=>v,u5:()=>w});var s=a(55754),n=a(19289),r=a(48128),l=a(22027),i=a(87482),c=a(5105),d=a(58851),o=a(21028),u=a(65090),p=a(33015),h=a(92871),f=a(33361),g=a(51865);(0,s.createStoreHook)(r.RootContext);const w=(0,s.createDispatchHook)(r.RootContext),y=(0,s.createSelectorHook)(r.RootContext),m=(0,n.configureStore)({middleware:e=>e(l.h),devTools:(0,l.$)("sentre"),reducer:{ui:i.ZP,flags:c.ZP,page:d.ZP,wallet:o.ZP,accounts:u.ZP,mints:p.ZP,pools:h.ZP,search:f.ZP,walkthrough:g.ZP}}),v="main"==a.j?m:null},58851:(e,t,a)=>{"use strict";a.d(t,{T$:()=>y,Xg:()=>f,ZP:()=>A,eI:()=>m,ij:()=>w,mw:()=>g,qS:()=>v});var s=a(19289),n=a(95418),r=a(3007),l=a(55852),i=a(63805);const{register:{senreg:c,extra:d,devAppId:o}}=l.Z,u=(e,t)=>t&&Array.isArray(t)?("development"!==i.OB||t.includes(o)||t.unshift(o),t.filter((t=>e[t]))):[],p="page",h={register:{},appIds:[]},f=(0,s.createAsyncThunk)("page/loadRegister",(async()=>({register:{...await(async()=>{try{const e=await fetch(c);return await e.json()}catch(e){return{}}})(),...d}}))),g=(0,s.createAsyncThunk)("page/installManifest",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s},page:{appIds:r,register:l}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet.");if(r.includes(e.appId))throw new Error("Cannot run sandbox for an installed application.");const i=[...r];i.push(e.appId);const c={...l};return c[e.appId]=e,{appIds:i,register:c}})),w=(0,s.createAsyncThunk)("page/loadPage",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s},page:{register:l}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet.");const i=new r.Z(s).createInstance("sentre");return{appIds:u(l,await i.getItem("appIds")||h.appIds)}})),y=(0,s.createAsyncThunk)("page/updatePage",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s},page:{register:l}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet.");e=u(l,e);const i=new r.Z(s).createInstance("sentre");return await i.setItem("appIds",e),{appIds:e}})),m=(0,s.createAsyncThunk)("page/installApp",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s},page:{appIds:l}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet.");if(l.includes(e))return{};const i=[...l];i.push(e);const c=new r.Z(s).createInstance("sentre");return await c.setItem("appIds",i),{appIds:i}})),v=(0,s.createAsyncThunk)("page/uninstallApp",(async(e,t)=>{let{getState:a}=t;const{wallet:{address:s},page:{appIds:l}}=a();if(!n.account.isAddress(s))throw new Error("Wallet is not connected yet.");if(!l.includes(e))return{};const i=l.filter((t=>t!==e)),c=new r.Z(s),d=c.createInstance("sentre");return await d.setItem("appIds",i),await c.dropInstance(e),{appIds:i}})),A=(0,s.createSlice)({name:p,initialState:h,reducers:{},extraReducers:e=>{e.addCase(f.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(g.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(w.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(y.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(m.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(v.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},92871:(e,t,a)=>{"use strict";a.d(t,{E6:()=>o,ZP:()=>u,d2:()=>c});var s=a(19289),n=a(95418),r=a(55852);const{sol:{taxmanAddress:l}}=r.Z,i="pools",c=(0,s.createAsyncThunk)("pools/getPools",(async()=>{const{swap:e}=window.sentre,t=await e.connection.getProgramAccounts(e.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:l,offset:65}}]});let a={};return t.forEach((t=>{let{pubkey:s,account:{data:n}}=t;const r=s.toBase58(),l=e.parsePoolData(n);a[r]=l})),a})),d=(0,s.createAsyncThunk)("pools/getPool",(async(e,t)=>{let{address:a}=e,{getState:s}=t;if(!n.account.isAddress(a))throw new Error("Invalid pool address");const{pools:{[a]:r}}=s();if(r)return{[a]:r};const{swap:l}=window.sentre;return{[a]:await l.getPoolData(a)}})),o=(0,s.createAsyncThunk)("pools/upsetPool",(async e=>{let{address:t,data:a}=e;if(!n.account.isAddress(t))throw new Error("Invalid pool address");if(!a)throw new Error("Data is empty");return{[t]:a}})),u=(0,s.createSlice)({name:i,initialState:{},reducers:{},extraReducers:e=>{e.addCase(c.fulfilled,((e,t)=>{let{payload:a}=t;return a})).addCase(d.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(o.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},33361:(e,t,a)=>{"use strict";a.d(t,{K4:()=>i,ZP:()=>d,sO:()=>l,yx:()=>r});var s=a(19289);const n="search",r=(0,s.createAsyncThunk)("search/setVisible",(async e=>({visible:e}))),l=(0,s.createAsyncThunk)("search/setValue",(async e=>({value:e}))),i=(0,s.createAsyncThunk)("search/setLoading",(async e=>({loading:e}))),c=(0,s.createAsyncThunk)("search/setDisabled",(async e=>({disabled:e}))),d=(0,s.createSlice)({name:n,initialState:{visible:!1,value:"",loading:!1,disabled:!1},reducers:{},extraReducers:e=>{e.addCase(r.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(l.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(i.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(c.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},87482:(e,t,a)=>{"use strict";a.d(t,{AY:()=>u,Dc:()=>i,SI:()=>c,TK:()=>o,ZP:()=>p,zi:()=>d});var s=a(19289);const n=()=>{const e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},r="ui",l={theme:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",width:window.innerWidth,infix:n(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0,visibleActionCenter:!1,visibleInstaller:!1,background:{light:"",dark:""}},i=(0,s.createAsyncThunk)("ui/setTheme",(async e=>({theme:e}))),c=(0,s.createAsyncThunk)("ui/resize",(async()=>({width:window.innerWidth,infix:n()}))),d=(0,s.createAsyncThunk)("ui/setVisibleActionCenter",(async e=>({visibleActionCenter:e}))),o=(0,s.createAsyncThunk)("ui/setVisibleInstaller",(async e=>({visibleInstaller:e}))),u=(0,s.createAsyncThunk)("ui/setBackground",(async e=>({background:e}))),p=(0,s.createSlice)({name:r,initialState:l,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(c.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(d.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(o.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(u.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},51865:(e,t,a)=>{"use strict";a.d(t,{Gm:()=>n,Rw:()=>i,ZP:()=>c});var s=a(19289);let n;!function(e){e[e.Default=0]="Default",e[e.NewComer=1]="NewComer"}(n||(n={}));const r="walkthrough",l={type:n.Default,run:!1,step:0},i=(0,s.createAsyncThunk)(`${r}/setWalkthrough`,(async e=>({...e}))),c=(0,s.createSlice)({name:r,initialState:l,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},21028:(e,t,a)=>{"use strict";a.d(t,{Dx:()=>u,K8:()=>h,UP:()=>p,Wh:()=>o,ZP:()=>g,co:()=>f});var s=a(19289),n=a(95418),r=a(55852),l=a(90951);const i=async e=>{const{sol:{node:t,spltAddress:a,splataAddress:s,swapAddress:i}}=r.Z;window.sentre={wallet:e||new l.kI,lamports:new n.Lamports(t),splt:new n.SPLT(a,s,t),swap:new n.Swap(i,a,s,t)}},c="wallet",d={visible:!1,address:"",lamports:BigInt(0)},o=(0,s.createAsyncThunk)("wallet/openWallet",(async()=>({visible:!0}))),u=(0,s.createAsyncThunk)("wallet/closeWallet",(async()=>({visible:!1}))),p=(0,s.createAsyncThunk)("wallet/connectWallet",(async e=>{if(!e)throw new Error("Invalid wallet instance");await i(e);const t=await e.getAddress(),a=await window.sentre.lamports.getLamports(t);return{address:t,lamports:BigInt(a),visible:!1}})),h=(0,s.createAsyncThunk)("wallet/updateWallet",(async e=>{let{lamports:t}=e;return{lamports:t}})),f=(0,s.createAsyncThunk)("wallet/disconnectWallet",(async()=>{await(async()=>{var e;null!==(e=window.sentre)&&void 0!==e&&e.wallet&&window.sentre.wallet.disconnect(),await i()})(),window.location.reload()})),g=(0,s.createSlice)({name:c,initialState:d,reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(u.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(p.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(h.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)})).addCase(f.fulfilled,((e,t)=>{let{payload:a}=t;Object.assign(e,a)}))}}).reducer},90951:(e,t,a)=>{"use strict";a.d(t,{fp:()=>g.Z,IW:()=>d.Z,kI:()=>s.Z,X5:()=>c,j1:()=>o.Z,j7:()=>n.Z,nq:()=>p.Z,Lc:()=>f.Z,i_:()=>h.Z,KE:()=>u.Z});var s=a(58181),n=a(99715),r=a(95418),l=a(97429).Buffer;class i extends n.Z{constructor(e,t){super(i.extractSecretKey(e,t),t)}}i.extractSecretKey=(e,t)=>{const a=r.account.fromKeystore(e,t);if(!a)throw new Error("Invalid ketstore or password");return l.from(a.secretKey).toString("hex")};const c=i;var d=a(6051),o=a(37344),u=a(2491),p=a(13974),h=a(31669),f=a(60766),g=a(80781)},63805:(e,t,a)=>{"use strict";a.d(t,{Bv:()=>i,Eu:()=>l,OB:()=>n,ef:()=>r,f4:()=>c});var s=a(53933);const n="production",r=(()=>{switch(s.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})(),l=e=>(s.Z.set("network",e),window.location.reload()),i=(()=>{switch(r){case"devnet":return 103;case"testnet":return 102;default:return 101}})(),c={devnet:"https://api.devnet.solana.com",testnet:"https://api.testnet.solana.com",mainnet:"development"===n?"https://api.mainnet-beta.solana.com":"https://solitary-autumn-water.solana-mainnet.quiknode.pro/dcbac9d444818a20ac583541dec35b44c6840888/"}[r]},53933:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const s="sentre",n=window.localStorage,r=e=>{try{return e?JSON.parse(e):null}catch(t){return null}},l={set:(e,t)=>{let a=r(n.getItem(s));a&&"object"===typeof a||(a={}),a[e]=t,n.setItem(s,JSON.stringify(a))},get:e=>{let t=r(n.getItem(s));return t&&"object"===typeof t?t[e]:null},clear:e=>{l.set(e,null)}},i=l},12677:(e,t,a)=>{"use strict";a.d(t,{sA:()=>p,kU:()=>f,l$:()=>y,uR:()=>g,PG:()=>m,p:()=>w,Xn:()=>h});var s=a(95418),n=a(16200),r=a.n(n),l=a(63805),i=a(15822),c=a(85964),d=a(67751);class o{static getSingleFlight(e){const t=JSON.stringify(e);if(this.mapInstance.has(t)){const e=this.mapInstance.get(t);if(e)return e}let a=new u(e);return this.mapInstance.set(t,a),a}static async load(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===typeof e&&(e=JSON.stringify(e));let s=o.getSingleFlight(a);o.mapInstance.set(e,s);const n=new c.g(e);return s.load(n,t)}}o.mapInstance=new Map;class u{constructor(e){this.config=void 0,this.intervalRequest=void 0,this.timeLogs=[],this.mapRequestCalling=new Map,this.requestQueue=[],this.config=Object.assign(i.Dt,e)}async load(e,t){const a=d.U.get(e.key);if(a)return Promise.resolve(a);let s=!1,n=this.mapRequestCalling.get(e.key);return n||(n=e,s=!0,this.mapRequestCalling.set(n.key,n)),new Promise(((e,a)=>{if(!n)return a("Not found request!");n.add(e,a),s&&this.fetch(n,t)}))}fetch(e,t){if(!this.validateLimit())return this.addRequestQueue(e,t);this.createTimeLogs(),t().then((t=>{d.U.set(e.key,t,this.config.cache),e.resolves(t)})).catch((t=>{e.rejects(t)})).finally((()=>{this.mapRequestCalling.delete(e.key),this.fetchRequestQueue(t)}))}fetchRequestQueue(e){if(!this.validateLimit())return;const t=this.requestQueue.shift();t&&this.load(t,e),0===this.requestQueue.length&&this.intervalRequest&&clearInterval(this.intervalRequest)}addRequestQueue(e,t){var a;this.requestQueue.push(e),this.intervalRequest=setInterval((()=>{this.fetchRequestQueue(t)}),null===(a=this.config.limit)||void 0===a?void 0:a.time)}validateLimit(){return!0}createTimeLogs(){var e;if(!this.config.limit)return;const t=(new Date).getTime();this.timeLogs.push(t),this.timeLogs.length>(null===(e=this.config.limit)||void 0===e?void 0:e.calls)&&this.timeLogs.shift()}}const p=e=>new Promise((t=>setTimeout(t,e))),h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e.substring(0,t)+a+e.substring(e.length-t,e.length)},f=e=>s.account.isAddress(e)?`https://solscan.io/account/${e}?cluster=${l.ef}`:`https://solscan.io/tx/${e}?cluster=${l.ef}`,g=e=>e?r()(e):r()("0"),w=(e,t)=>{let a=Math.floor(16777215*Math.random());if(e){a=0;for(let t=0;t<e.length;t++)a=e.charCodeAt(t)+((a<<5)-a)}var s=[0,0,0];for(let r=0;r<3;r++){var n=a>>8*r&255;s[r]=n}return`rgba(${s[0]}, 100, ${s[1]},${t||1})`},y=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o.load("fetchCGK"+e,(()=>s.utils.parseCGK(e)))},m=e=>e[Math.floor(Math.random()*e.length)]},46601:()=>{},89214:()=>{},85568:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_os_store_index_ts-src_shared_util_ts.81a3b116.chunk.js.map