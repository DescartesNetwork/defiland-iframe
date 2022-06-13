"use strict";(globalThis.webpackChunkdefi_land=globalThis.webpackChunkdefi_land||[]).push([["src_os_providers_index_tsx"],{80039:(e,n,t)=>{t.r(n),t.d(n,{AccountProvider:()=>b,MintProvider:()=>A,PoolProvider:()=>f,UIProvider:()=>l,WalletProvider:()=>v,useAccount:()=>P,useMint:()=>W,usePool:()=>g,useUI:()=>u,useWallet:()=>y,withAccount:()=>M,withMint:()=>Z,withPool:()=>x,withUI:()=>h,withWallet:()=>k});var s=t(92950),i=t(32659),r=t(87358),o=t(87482),a=t(45263);const d=(0,s.createContext)({}),l=e=>{let{children:n,appId:t,style:l={},antd:c=!1}=e;const h=(0,r.u5)(),u=(0,r.Qy)((e=>e.ui)),m=(0,s.useCallback)((async function(){return await h((0,o.AY)(...arguments)).unwrap()}),[h]),f=(0,s.useMemo)((()=>({ui:u,setBackground:m})),[u,m]),p=c?{getPopupContainer:()=>document.getElementById(t),..."object"===typeof c?c:{}}:void 0;return(0,a.jsx)(d.Provider,{value:f,children:(0,a.jsx)("section",{id:t,style:{backgroundColor:"transparent",...l},children:p?(0,a.jsx)(i.ConfigProvider,{...p,children:n}):n})})},c=e=>{let{children:n}=e;return(0,a.jsx)(d.Consumer,{children:e=>s.Children.map(n,(n=>(0,s.cloneElement)(n,{...e})))})},h=e=>{class n extends s.Component{render(){const{forwardedRef:n,...t}=this.props;return(0,a.jsx)(c,{children:(0,a.jsx)(e,{ref:n,...t})})}}return(0,s.forwardRef)(((e,t)=>(0,a.jsx)(n,{...e,ref:t})))},u=()=>(0,s.useContext)(d),m=(0,s.createContext)({}),f=e=>{let{children:n}=e;const t=(0,r.Qy)((e=>e.pools)),i=(0,s.useMemo)((()=>({pools:t})),[t]);return(0,a.jsx)(m.Provider,{value:i,children:n})},p=e=>{let{children:n}=e;return(0,a.jsx)(m.Consumer,{children:e=>s.Children.map(n,(n=>(0,s.cloneElement)(n,{...e})))})},x=e=>{class n extends s.Component{render(){const{forwardedRef:n,...t}=this.props;return(0,a.jsx)(p,{children:(0,a.jsx)(e,{ref:n,...t})})}}return(0,s.forwardRef)(((e,t)=>(0,a.jsx)(n,{...e,ref:t})))},g=()=>(0,s.useContext)(m),w=(0,s.createContext)({}),v=e=>{let{children:n}=e;const t=(0,r.Qy)((e=>e.wallet)),i=(0,s.useMemo)((()=>({wallet:t})),[t]);return(0,a.jsx)(w.Provider,{value:i,children:n})},C=e=>{let{children:n}=e;return(0,a.jsx)(w.Consumer,{children:e=>s.Children.map(n,(n=>(0,s.cloneElement)(n,{...e})))})},k=e=>{class n extends s.Component{render(){const{forwardedRef:n,...t}=this.props;return(0,a.jsx)(C,{children:(0,a.jsx)(e,{ref:n,...t})})}}return(0,s.forwardRef)(((e,t)=>(0,a.jsx)(n,{...e,ref:t})))},y=()=>(0,s.useContext)(w),j=(0,s.createContext)({}),b=e=>{let{children:n}=e;const t=(0,r.Qy)((e=>e.accounts)),i=(0,s.useMemo)((()=>({accounts:t})),[t]);return(0,a.jsx)(j.Provider,{value:i,children:n})},I=e=>{let{children:n}=e;return(0,a.jsx)(j.Consumer,{children:e=>s.Children.map(n,(n=>(0,s.cloneElement)(n,{...e})))})},M=e=>{class n extends s.Component{render(){const{forwardedRef:n,...t}=this.props;return(0,a.jsx)(I,{children:(0,a.jsx)(e,{ref:n,...t})})}}return(0,s.forwardRef)(((e,t)=>(0,a.jsx)(n,{...e,ref:t})))},P=()=>(0,s.useContext)(j);var R=t(95418),E=t(33015),U=t(94757),q=t.n(U),B=t(67845),S=t(63805);const L=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),D=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),_=[L(103),D(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}];const Q=new class{constructor(){var e=this;this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size&&this.engine?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let n=await(await(new B.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(n=n.concat(_)),n="testnet"===this.cluster?n.concat([D(102),L(102)]):n.concat([L(101)]),n.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=q()((function(){this.ref("address"),this.field("symbol"),this.field("name"),n.forEach((e=>this.add(e)))})),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[n]=await this._init();return n.get(e)},this.find=async function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;const[s,i]=await e._init();let r=[];if(!n)return[];const o=n+"~1";return i.search(o).forEach((e=>{let{ref:n}=e;if(r.findIndex((e=>{let{address:t}=e;return t===n}))<0){const e=s.get(n);e&&r.push(e)}})),0===t?r:r.slice(0,t)},this.tokenMap=new Map,this.engine=void 0,this.chainId=S.Bv,this.cluster=S.ef,this.loading=!1,this.queue=[],this._init()}},T=(0,s.createContext)({}),A=e=>{let{children:n}=e;const t=(0,r.u5)(),i=(0,r.Qy)((e=>e.mints)),o=(0,r.Qy)((e=>e.pools)),d=(0,s.useCallback)((async function(){return await t((0,E.ih)(...arguments)).unwrap()}),[t]),l=(0,s.useCallback)((async e=>{var n;if(!R.account.isAddress(e))throw new Error("Invalid mint address");const t=await Q.findByAddress(e);if(void 0!==(null===t||void 0===t?void 0:t.decimals))return t.decimals;if(Object.values(o).findIndex((n=>{let{mint_lpt:t}=n;return t===e}))>=0)return 9;const s=await d({address:e});if(null!==(n=s[e])&&void 0!==n&&n.decimals)return s[e].decimals;throw new Error("Cannot find mint decimals")}),[d,o]),c=(0,s.useMemo)((()=>({mints:i,getMint:d,getDecimals:l,tokenProvider:Q})),[i,d,l]);return(0,a.jsx)(T.Provider,{value:c,children:n})},F=e=>{let{children:n}=e;return(0,a.jsx)(T.Consumer,{children:e=>s.Children.map(n,(n=>(0,s.cloneElement)(n,{...e})))})},Z=e=>{class n extends s.Component{render(){const{forwardedRef:n,...t}=this.props;return(0,a.jsx)(F,{children:(0,a.jsx)(e,{ref:n,...t})})}}return(0,s.forwardRef)(((e,t)=>(0,a.jsx)(n,{...e,ref:t})))},W=()=>(0,s.useContext)(T)}}]);
//# sourceMappingURL=src_os_providers_index_tsx.8b197a03.chunk.js.map