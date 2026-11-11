var S=[].slice.call(document.querySelectorAll('.s')),D=document.getElementById('dots'),i=0,lock=0;
S.forEach(function(_,k){var e=document.createElement('i');e.onclick=function(){go(k)};D.appendChild(e)});
function go(k){if(k<0||k>=S.length||k===i)return;S.forEach(function(s,j){s.classList.toggle('on',j===k);s.classList.toggle('prev',j<k)});
[].forEach.call(D.children,function(e,j){e.classList.toggle('on',j===k)});i=k;try{location.hash='s'+(k+1)}catch(e){}}
D.children[0].classList.add('on');
document.getElementById('p').onclick=function(){go(i-1)};document.getElementById('n').onclick=function(){go(i+1)};
addEventListener('keydown',function(e){if(/Right|Down| |PageDown/.test(e.key))go(i+1);if(/Left|Up|PageUp/.test(e.key))go(i-1)});
addEventListener('wheel',function(e){if(lock||Math.abs(e.deltaY)<20)return;lock=1;go(i+(e.deltaY>0?1:-1));setTimeout(function(){lock=0},800)},{passive:true});
var x0=null;addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
addEventListener('touchend',function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)go(i+(d<0?1:-1));x0=null});
var m=/^#s(\d)$/.exec(location.hash);if(m)go(+m[1]-1);