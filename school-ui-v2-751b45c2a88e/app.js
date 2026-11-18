import data from './fixture.js';
const $=id=>document.getElementById(id),base=data.options[0],soul=id=>data.souls.find(s=>s.id===id);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let choice=data.options[1],result=false,running=false,timer=null,turn=0;
const intro='「지닌 것끼리만 돼요.」';
function stop(){if(timer!==null)clearTimeout(timer);timer=null;running=false;turn=0;$('hit').textContent='';}
function render(){
 $('slots').innerHTML=['ash_rat','moth',choice.id].map((id,i)=>`<${i===2?'button':'div'} ${i===2?'id="choose" aria-haspopup="dialog"':''} class="slot"><img src="assets/${id}.png" alt=""><span>${esc(soul(id).name)}</span><small>${i===2?'바꿔 끼우기':'그대로'}</small></${i===2?'button':'div'}>`).join('');
 $('choose').addEventListener('click',()=>{$('picker').showModal();});
 $('candidates').innerHTML=data.options.map(o=>`<button class="candidate" data-id="${o.id}" aria-pressed="${choice.id===o.id}"><img src="assets/${o.id}.png" alt=""><span>${esc(soul(o.id).name)}<small>${o.id===base.id?'현재 영혼':esc(soul(o.id).grade)+' · 지닌 영혼'}</small></span><b class="pick-mark">${choice.id===o.id?'선택됨':'선택'}</b></button>`).join('');
 const d=choice.diff;
 const summary=[['공명',d.resoOpens,'열림'],['공명',d.resoShuts,'닫힘'],['기술',d.fusionOpens,'생김'],['기술',d.fusionShuts,'사라짐']].filter(x=>x[1].length).map(([label,items,verb])=>`${label} ${items.length}개 ${verb}`);
 $('difference').textContent=summary.join(' · ')||d.stats.map(x=>`${x.stat} ${x.delta>0?'+':''}${x.delta}`).join(' · ')||'현재 짜임 그대로입니다.';
 $('score').dataset.result=String(result);
 $('result-line').textContent=!result?'과녁에 쳐 보면 기록이 남습니다.':base.spread?.mid===choice.spread?.mid?`중앙 피해는 두 짜임 모두 ${base.spread?.mid??'없음'}.`:`중앙 피해 ${base.spread?.mid??'없음'} → ${choice.spread?.mid??'없음'}.`;
 $('practice').textContent=running?'결과 바로 보기':result?'다시 쳐 보기':'과녁에 열 번 쳐 보기';
 $('apply').disabled=choice.id===base.id||running;
 $('cost').textContent=choice.id===base.id?'현재 짜임 그대로 · 교체 비용 없음':`끼워 보기는 무료 · 실제 교체 시 가루 ${choice.cost}`;
}
function finish(){stop();result=true;$('voice').textContent='「열 번이면 줄 하나는 세워요.」';render();}
function tick(){
 const t=choice.turns[turn];$('hit').textContent=t.none?'피해 없음':String(t.hit);$('hit').className='hit pulse';
 $('voice').textContent=`${turn+1}/10 · ${t.used?.name??'일반 공격'}${t.none?' · 피해 없는 기술 차례':''}`;
 turn++;timer=setTimeout(()=>{if(turn===choice.turns.length)finish();else tick();},330);
}
$('practice').addEventListener('click',()=>{if(running){finish();return;}stop();result=false;running=true;render();if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return;}tick();});
$('candidates').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;stop();choice=data.options.find(o=>o.id===b.dataset.id);result=false;$('voice').textContent=intro;$('picker').close();render();$('choose').focus();});
$('details').addEventListener('click',()=>{
 const d=choice.diff;const parts=[['열리는 공명',d.resoOpens],['닫히는 공명',d.resoShuts],['생기는 조합 기술',d.fusionOpens],['사라지는 조합 기술',d.fusionShuts]];
 let h=`<p>돌 딱지에서 ${esc(soul(choice.id).name)}${choice.id===base.id?' 유지':'로 교체'}.</p><h3>스탯 변화</h3>`;
 h+=d.stats.length?d.stats.map(s=>`<div class="effect">${esc(s.stat)} <strong>${s.from} → ${s.to} (${s.delta>0?'+':''}${s.delta})</strong></div>`).join(''):'<p>변화 없음</p>';
 h+=parts.filter(x=>x[1].length).map(([title,items])=>`<p class="effect">${title}<strong>${items.map(esc).join(' · ')}</strong></p>`).join('');
 if(result){h+='<h3>열 턴의 기록</h3><p class="note">피해 있는 차례만 집계합니다. 중앙값은 평균이 아닙니다.</p><table><thead><tr><th>피해</th><th>현재</th><th>바꾼</th></tr></thead><tbody>';
 for(const [label,key] of [['최소','min'],['중앙값','mid'],['최대','max']])h+=`<tr><th>${label}</th><td>${base.spread?.[key]??'없음'}</td><td>${choice.spread?.[key]??'없음'}</td></tr>`;
 h+='</tbody></table><details><summary>사용 기술과 턴별 피해</summary><div class="table-wrap"><table><thead><tr><th>턴</th><th>현재</th><th>바꾼</th></tr></thead><tbody>';
 const cell=t=>`${t.none?'피해 없음':t.hit}<small>${esc(t.used?.name??'일반 공격')}</small>`;
 h+=base.turns.map((t,i)=>`<tr><th>${i+1}</th><td>${cell(t)}</td><td>${cell(choice.turns[i])}</td></tr>`).join('')+'</tbody></table></div></details>';
 }else h+='<p>아직 이 짜임으로 연습하지 않았습니다.</p>';
 $('ledger-body').innerHTML=h;$('ledger').showModal();
});
$('apply').addEventListener('click',()=>{$('confirmation').textContent=`돌 딱지 대신 ${soul(choice.id).name}. 실제로 바꾸려면 영혼 가루 ${choice.cost}가 듭니다. 뺀 영혼의 처리는 기존 게임의 장착 규칙을 따릅니다.`;$('confirm').showModal();});
$('scope').addEventListener('click',()=>$('about').showModal());
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
$('reset').addEventListener('click',()=>{stop();choice=data.options[1];result=false;$('voice').textContent=intro;render();});
window.addEventListener('pagehide',stop);
$('voice').textContent=intro;render();
