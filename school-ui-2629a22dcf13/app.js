import data from './fixture.js';
const $=id=>document.getElementById(id), names=new Map(data.souls.map(s=>[s.id,s]));
const base=data.options[0];let selected=data.options[1],tested=null;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const soul=id=>names.get(id);
const img=id=>`<img src="assets/${esc(id)}.png" alt="">`;
function render(){
 $('lineup').innerHTML=['ash_rat','moth','stone_scab'].map((id,i)=>`<div class="soul ${i===2?'active':''}">${i===2?'<span class="slot-label">교체할 자리</span>':''}${img(id)}<strong>${esc(soul(id).name)}</strong><small>${esc(soul(id).grade)}</small></div>`).join('');
 $('candidates').innerHTML=data.options.map(o=>`<button class="candidate" data-id="${o.id}" aria-pressed="${selected.id===o.id}">${img(o.id)}<span class="candidate-name">${esc(soul(o.id).name)}<small>${o.id===base.id?'현재 영혼 유지':esc(soul(o.id).grade)+' · 대기 중'}</small></span><span class="mark">${selected.id===o.id?'선택됨':'선택'}</span></button>`).join('');
 $('selected-grade').textContent=soul(selected.id).grade;
 $('swap').innerHTML=`<span>현재 ${esc(soul(base.id).name)}</span><strong>${selected.id===base.id?'현재 조합을 유지합니다':esc(soul(selected.id).name)+'로 바꾸면'}</strong>`;
 const d=selected.diff;
 const stats=d.stats.map(x=>`<div class="stat-row"><span>${esc(x.stat)}</span><b>${x.from} → ${x.to}</b><span class="delta ${x.delta>0?'up':'down'}">${x.delta>0?'+':''}${x.delta}</span></div>`).join('');
 const effects=[['열리는 공명',d.resoOpens,false],['닫히는 공명',d.resoShuts,true],['생기는 조합 기술',d.fusionOpens,false],['사라지는 조합 기술',d.fusionShuts,true]].filter(x=>x[1].length).map(([label,items,loss])=>`<div class="effect ${loss?'loss':''}"><small>${label}</small><p>${items.map(esc).join(' · ')}</p></div>`).join('');
 $('changes').innerHTML=(stats||'<p class="hint">스탯 변화가 없습니다.</p>')+(effects||'<p class="hint">보이는 공명과 조합 기술은 그대로입니다.</p>');
 $('price').textContent=selected.id===base.id?'현재 조합 그대로입니다.':`실제 적용 시 영혼 가루 ${selected.cost} · 예시 보유량 1,000`;
 $('apply').disabled=selected.id===base.id;
 $('practice').textContent=tested===selected.id?'같은 조건으로 다시 보기':'두 조합 연습하기';
 $('results').hidden=tested!==selected.id;
}
$('candidates').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;selected=data.options.find(x=>x.id===b.dataset.id);tested=null;render();$('candidates').querySelector(`[data-id="${selected.id}"]`).focus();});
function results(){
 tested=selected.id;render();
 $('result-name').textContent=soul(selected.id).name;
 $('summary').innerHTML=[['최소','min'],['중앙값','mid'],['최대','max']].map(([name,key])=>`<tr><th scope="row">${name}</th><td>${base.spread?.[key]??'피해 없음'}</td><td>${selected.spread?.[key]??'피해 없음'}</td></tr>`).join('');
 const turn=t=>`${t.none?'피해 없음':t.hit}<small>${esc(t.used?.name??'일반 공격')}</small>`;
 $('turns').innerHTML=base.turns.map((t,i)=>`<tr><th scope="row">${i+1}</th><td>${turn(t)}</td><td>${turn(selected.turns[i])}</td></tr>`).join('');
 $('result-note').textContent='이 과녁에서 나온 피해입니다. 수치가 같아도 기술의 역할과 실제 싸움에서의 쓰임은 다를 수 있습니다.';
 $('results').focus({preventScroll:true});$('results').scrollIntoView({block:'start',behavior:'instant'});
}
$('practice').addEventListener('click',results);
$('apply').addEventListener('click',()=>{$('confirm-text').textContent=`${soul(base.id).name} 대신 ${soul(selected.id).name}. 실제 게임에서는 영혼 가루 ${selected.cost}가 들고, 뺀 영혼은 바깥 장착 규칙을 따릅니다.`;$('confirm').showModal();});
$('record').addEventListener('click',()=>{$('record-text').textContent=`굶주린 쥐 · 등불 나방 · ${soul(selected.id).name}. 피해 최소 ${selected.spread?.min??'없음'}, 중앙값 ${selected.spread?.mid??'없음'}, 최대 ${selected.spread?.max??'없음'}.`;$('record-dialog').showModal();});
$('reset').addEventListener('click',()=>{selected=data.options[1];tested=null;render();window.scrollTo(0,0);});
$('source').textContent=`계산 기준: ${data.source.slice(0,12)} · 고정 예시 3개, 각 10턴. 자유로운 영혼 편집과 실제 장착은 이번 시안의 범위 밖입니다.`;
render();
