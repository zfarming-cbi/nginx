if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const a=e=>n(e,o),s={module:{uri:o},exports:c,require:a};i[o]=Promise.all(d.map((e=>s[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"128.png",revision:"3fab4cbc66697bf958f0b60bb8309990"},{url:"144.png",revision:"f2a3fd855b55f6abd6d94e41048b913f"},{url:"512.png",revision:"6a556a0ccf005f31b406d2851a6cda9e"},{url:"android/android-launchericon-144-144.png",revision:"f2a3fd855b55f6abd6d94e41048b913f"},{url:"android/android-launchericon-192-192.png",revision:"f770fe1b4f695fdbd4e57d7d4a2990d4"},{url:"android/android-launchericon-48-48.png",revision:"b5629be26259d3cdf641e6a294945b86"},{url:"android/android-launchericon-512-512.png",revision:"6a556a0ccf005f31b406d2851a6cda9e"},{url:"android/android-launchericon-72-72.png",revision:"4e5e9a161f4cfdc3217eb25ac181ace6"},{url:"android/android-launchericon-96-96.png",revision:"24bccadcb2c5f8f21a087588749214b5"},{url:"apple-touch-icon.png",revision:"1efcd017a8729ddfa989209a471e8d1b"},{url:"assets/index-9563aeea.css",revision:null},{url:"assets/placeholder-74c8033a.png",revision:null},{url:"favicon.png",revision:"dc27b47076ccbf66bfc6994a284177ca"},{url:"index.html",revision:"a67c43f742114fd7e329434980fe0bb5"},{url:"ios/100.png",revision:"b1a44c0baebed9bda8d349eb08b582fd"},{url:"ios/1024.png",revision:"6beb2205c42c4789769c3d9fece04d1c"},{url:"ios/114.png",revision:"fd5f1c5604539b6d5d62e24de0a1b07e"},{url:"ios/120.png",revision:"115726ad4592e3efa1fc530ca59f5f0c"},{url:"ios/128.png",revision:"3fab4cbc66697bf958f0b60bb8309990"},{url:"ios/144.png",revision:"f2a3fd855b55f6abd6d94e41048b913f"},{url:"ios/152.png",revision:"c08ed8f10bf9e2a54d5007fe71c8a4b0"},{url:"ios/16.png",revision:"43e6811888ea4dfc11c7772421cccfa1"},{url:"ios/167.png",revision:"3982658771d85e81ab9253c79832b12c"},{url:"ios/180.png",revision:"1efcd017a8729ddfa989209a471e8d1b"},{url:"ios/192.png",revision:"f770fe1b4f695fdbd4e57d7d4a2990d4"},{url:"ios/20.png",revision:"de591733ffa440b1feb4c4632b28743e"},{url:"ios/256.png",revision:"b051e8c3e4fbcdc27d4695e86480d53f"},{url:"ios/29.png",revision:"2a976e728db4b9c15729dcf0bd80c144"},{url:"ios/32.png",revision:"72b1c973c970b79fd938d8f4064c947f"},{url:"ios/40.png",revision:"1a07ede1b554420e1220246053b2facb"},{url:"ios/50.png",revision:"d29ab4b1688bf377a8b35af112674813"},{url:"ios/512.png",revision:"6a556a0ccf005f31b406d2851a6cda9e"},{url:"ios/57.png",revision:"8afe9a4e15dc89e22602ab2ab1785361"},{url:"ios/58.png",revision:"784a1cd0234783e0e7754b26ef670455"},{url:"ios/60.png",revision:"0bbf5500063d347997018a2a2b7370c2"},{url:"ios/64.png",revision:"e68a399e9f9b74292dbce3b30db66123"},{url:"ios/72.png",revision:"4e5e9a161f4cfdc3217eb25ac181ace6"},{url:"ios/76.png",revision:"d25897120b58ea64e70be1a889e7b21b"},{url:"ios/80.png",revision:"edf1ec25dac9f638d6975a8006c6e66f"},{url:"ios/87.png",revision:"84095f526fb2c2140c2b9f6167228aa0"},{url:"mask-icon.png",revision:"1efcd017a8729ddfa989209a471e8d1b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"apple-touch-icon.png",revision:"1efcd017a8729ddfa989209a471e8d1b"},{url:"mask-icon.png",revision:"1efcd017a8729ddfa989209a471e8d1b"},{url:"manifest.json",revision:"d619d662783b6dd550d9b1d3d6ba832c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
