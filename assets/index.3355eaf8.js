(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function l(){}function L(e){return e()}function v(){return Object.create(null)}function _(e){e.forEach(L)}function N(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function P(e){return Object.keys(e).length===0}function B(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function I(e){return Array.from(e.childNodes)}let $;function a(e){$=e}const f=[],E=[],m=[],O=[],T=Promise.resolve();let g=!1;function q(){g||(g=!0,T.then(S))}function y(e){m.push(e)}const p=new Set;let h=0;function S(){const e=$;do{for(;h<f.length;){const t=f[h];h++,a(t),F(t.$$)}for(a(null),f.length=0,h=0;E.length;)E.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];p.has(n)||(p.add(n),n())}m.length=0}while(f.length);for(;O.length;)O.pop()();g=!1,p.clear(),a(e)}function F(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const H=new Set;function K(e,t){e&&e.i&&(H.delete(e),e.i(t))}function z(e,t,n,i){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),i||y(()=>{const s=e.$$.on_mount.map(L).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...s):_(s),e.$$.on_mount=[]}),c.forEach(y)}function D(e,t){const n=e.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(f.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,i,r,c,s,A=[-1]){const d=$;a(e);const o=e.$$={fragment:null,ctx:[],props:c,update:l,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:v(),dirty:A,skip_bound:!1,root:t.target||d.$$.root};s&&s(o.root);let b=!1;if(o.ctx=n?n(e,t.props||{},(u,x,...k)=>{const w=k.length?k[0]:x;return o.ctx&&r(o.ctx[u],o.ctx[u]=w)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](w),b&&G(e,u)),x}):[],o.update(),b=!0,_(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const u=I(t.target);o.fragment&&o.fragment.l(u),u.forEach(j)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),S()}a(d)}class Q{$destroy(){D(this,1),this.$destroy=l}$on(t,n){if(!N(n))return l;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let t;return{c(){t=C("main"),t.innerHTML="<h1>This is test</h1>"},m(n,i){B(n,t,i)},p:l,i:l,o:l,d(n){n&&j(t)}}}class U extends Q{constructor(t){super(),J(this,t,null,R,M,{})}}new U({target:document.getElementById("app")});
