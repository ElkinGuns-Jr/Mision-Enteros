const BANK = [
/* NIVEL 1: 20 operaciones con enteros */
[
["(+8) + (−13)",-5,"Los signos son diferentes: 13 − 8 = 5 y queda el signo del número con mayor valor absoluto, el negativo."],
["(−7) + (−9)",-16,"Al sumar dos negativos, sumamos 7 + 9 y conservamos el signo negativo."],
["(+12) − (+19)",-7,"Restar 19 equivale a sumar −19: 12 + (−19) = −7."],
["(−6) × (+7)",-42,"Signos diferentes en la multiplicación: resultado negativo. 6 × 7 = 42."],
["(−72) ÷ (−8)",9,"Signos iguales en la división: resultado positivo. 72 ÷ 8 = 9."],
["(+5) × (−4) × (−2)",40,"5 × (−4) = −20; después, (−20) × (−2) = 40."],
["−8 + 3 × (−4)",-20,"Primero la multiplicación: 3 × (−4) = −12. Luego −8 + (−12) = −20."],
["(−18 + 6) ÷ (−3) − 2",2,"Paréntesis: −12. División: 4. Finalmente, 4 − 2 = 2."],
["(−15) + 23",8,"Los signos son diferentes: 23 − 15 = 8 y queda el signo positivo."],
["34 + (−46)",-12,"Restamos 46 − 34 = 12 y conservamos el signo negativo."],
["(−9) − (−14)",5,"Restar un negativo equivale a sumar: −9 + 14 = 5."],
["17 − (−8)",25,"Restar un negativo se convierte en suma: 17 + 8 = 25."],
["(−11) × (−6)",66,"Negativo por negativo es positivo: 11 × 6 = 66."],
["(+96) ÷ (−12)",-8,"Signos diferentes en la división: −8."],
["−4 × [6 + (−9)]",12,"Primero el corchete: 6 − 9 = −3. Luego −4 × −3 = 12."],
["(−3)² − 14",-5,"(−3)² = 9. Luego 9 − 14 = −5."],
["−28 ÷ 7 + 6",2,"Primero −28 ÷ 7 = −4. Después −4 + 6 = 2."],
["5 − 3 × 4",-7,"Primero 3 × 4 = 12. Luego 5 − 12 = −7."],
["(−2) × 8 + 19",3,"Primero −2 × 8 = −16. Luego −16 + 19 = 3."],
["48 ÷ (−6) − (−5)",-3,"48 ÷ −6 = −8. Restar −5 equivale a sumar 5: −8 + 5 = −3."]
],
/* NIVEL 2: 20 situaciones problema */
[
["La temperatura era de −3 °C y bajó 8 °C más. ¿Cuál es la temperatura final?",-11,"Bajar 8 grados significa restar 8: −3 − 8 = −11 °C."],
["Un buzo está a −12 m y asciende 7 m. ¿A qué profundidad queda?",-5,"Asciende: −12 + 7 = −5 m."],
["Camila debe $35 y paga $20. Si la deuda se representa con negativos, ¿cuál es su saldo?",-15,"La deuda inicial es −35 y el pago suma 20: −35 + 20 = −15."],
["Un ascensor está en el piso 4 y baja 9 pisos. ¿En qué piso termina?",-5,"4 − 9 = −5."],
["Un equipo pierde 6 puntos en cada una de 4 rondas. ¿Cuál es el cambio total?",-24,"Cuatro pérdidas de 6 puntos: 4 × (−6) = −24."],
["La temperatura pasa de −7 °C a 5 °C. ¿Cuántos grados aumentó?",12,"La variación es 5 − (−7) = 5 + 7 = 12 °C."],
["Un submarino está a −45 m y desciende 18 m. ¿Cuál es su nueva posición?",-63,"Desciende 18 m: −45 − 18 = −63 m."],
["Un banco descuenta $8 cada día durante 5 días. ¿Cuál es el cambio acumulado?",-40,"Cinco descuentos de 8: 5 × (−8) = −40."],
["En un concurso, ganar suma 12 puntos y perder resta 15. Si el equipo gana 3 veces y pierde 2, ¿cuál es el puntaje neto?",6,"3 × 12 + 2 × (−15) = 36 − 30 = 6."],
["Un jugador tenía 10 puntos, perdió 18 y luego ganó 7. ¿Con cuántos queda?",-1,"10 − 18 + 7 = −1."],
["Un estacionamiento tiene 2 sótanos debajo del nivel 0. El ascensor baja 3 pisos desde el sótano 2. ¿Dónde queda?",-5,"−2 − 3 = −5."],
["Una cuenta está en −$120. Se consignan $75 y después se retiran $20. ¿Cuál es el saldo?",-65,"−120 + 75 − 20 = −65."],
["Un montañista está a 350 m y desciende 480 m respecto al nivel de referencia. ¿Cuál es su posición?",-130,"350 − 480 = −130 m."],
["Un videojuego resta 9 vidas por cada error. Si se cometen 3 errores, ¿qué variación representa?",-27,"3 × (−9) = −27 vidas."],
["La temperatura era de 6 °C. Durante la noche baja 11 °C y en la mañana sube 4 °C. ¿Temperatura final?",-1,"6 − 11 + 4 = −1 °C."],
["Un buzo sube 6 m desde −20 m, y luego baja 9 m. ¿En qué posición queda?",-23,"−20 + 6 − 9 = −23 m."],
["Una empresa pierde $250 cada día durante 4 días. ¿Qué variación total registra?",-1000,"4 × (−250) = −1000."],
["Un equipo comienza con −14 puntos y recibe una bonificación de 25. ¿Cuál es su puntaje?",11,"−14 + 25 = 11."],
["Un ascensor sube 8 pisos desde el piso −6 y después baja 5. ¿Dónde termina?",-3,"−6 + 8 − 5 = −3."],
["La temperatura de −4 °C se triplica como variación durante tres descensos iguales de 4 °C. ¿Cuál es el cambio total?",-12,"Tres descensos de 4 °C se representan con 3 × (−4) = −12 °C."]
],
/* NIVEL 3: 20 expresiones algebraicas y términos semejantes */
[
["Reduce: 3x + 5x", "8x","Sumamos coeficientes de términos semejantes: 3 + 5 = 8."],
["Reduce: 9a − 4a", "5a","9a − 4a = 5a."],
["Reduce: 7m + 2 − 3m + 5", "4m + 7","Agrupamos semejantes: 7m − 3m = 4m y 2 + 5 = 7."],
["Reduce: 6x + 3y − 2x + 5y", "4x + 8y","6x − 2x = 4x y 3y + 5y = 8y."],
["Reduce: 4p − 7 + 2p + 10", "6p + 3","4p + 2p = 6p y −7 + 10 = 3."],
["Reduce: 8a − 3b − 2a + b", "6a − 2b","8a − 2a = 6a y −3b + b = −2b."],
["Reduce: 5x + 2 − 3x − 9", "2x − 7","5x − 3x = 2x y 2 − 9 = −7."],
["Reduce: 12y − 5y + 3y", "10y","12 − 5 + 3 = 10; se conserva la variable y."],
["Reduce: 2a + 3b + 4a − b", "6a + 2b","2a + 4a = 6a y 3b − b = 2b."],
["Reduce: 10x − 4 + x + 9", "11x + 5","10x + x = 11x y −4 + 9 = 5."],
["Reduce: 3m − 2n + 5m + 7n", "8m + 5n","3m + 5m = 8m y −2n + 7n = 5n."],
["Reduce: 9p + 4 − 6p − 11", "3p − 7","9p − 6p = 3p y 4 − 11 = −7."],
["Reduce: 2x + 3x − 4 + 6", "5x + 2","2x + 3x = 5x y −4 + 6 = 2."],
["Reduce: 7a − 2b − 3a − 5b", "4a − 7b","7a − 3a = 4a y −2b − 5b = −7b."],
["Reduce: 4x + 2y + 3 − x + 5y − 8", "3x + 7y − 5","4x − x = 3x; 2y + 5y = 7y; 3 − 8 = −5."],
["Reduce: 6r − 2s + r + 9s", "7r + 7s","6r + r = 7r y −2s + 9s = 7s."],
["Reduce: 11m − 8m + 2m − m", "4m","11 − 8 + 2 − 1 = 4."],
["Reduce: 5x − 3y + 2x + y − 4", "7x − 2y − 4","5x + 2x = 7x; −3y + y = −2y."],
["Reduce: 8a + 6 − 3a − 2 + a", "6a + 4","8a − 3a + a = 6a y 6 − 2 = 4."],
["Reduce: 2p + 4q − 7p − q + 3q", "−5p + 6q","2p − 7p = −5p; 4q − q + 3q = 6q."]
],
/* NIVEL 4: 20 casos de factor común */
[
["Factoriza: 6x + 12","6(x + 2)","El máximo factor común es 6: 6x + 12 = 6(x + 2)."],
["Factoriza: 8a − 20","4(2a − 5)","El factor común es 4."],
["Factoriza: 15x² + 10x","5x(3x + 2)","El factor común es 5x."],
["Factoriza: 12y² − 18y","6y(2y − 3)","El factor común es 6y."],
["Factoriza: 14m + 21","7(2m + 3)","El factor común es 7."],
["Factoriza: 9a² − 3a","3a(3a − 1)","El factor común es 3a."],
["Factoriza: 16x³ + 24x²","8x²(2x + 3)","El factor común es 8x²."],
["Factoriza: 25p² − 10p","5p(5p − 2)","El factor común es 5p."],
["Factoriza: 18m² + 27m","9m(2m + 3)","El factor común es 9m."],
["Factoriza: 4x² − 28x","4x(x − 7)","El factor común es 4x."],
["Factoriza: 21a³ + 14a²","7a²(3a + 2)","El factor común es 7a²."],
["Factoriza: 30y² − 45y","15y(2y − 3)","El factor común es 15y."],
["Factoriza: 12p³ + 8p²","4p²(3p + 2)","El factor común es 4p²."],
["Factoriza: 35x − 14","7(5x − 2)","El factor común es 7."],
["Factoriza: 10a² + 15a","5a(2a + 3)","El factor común es 5a."],
["Factoriza: 24r² − 36r","12r(2r − 3)","El factor común es 12r."],
["Factoriza: 7x² + 28x","7x(x + 4)","El factor común es 7x."],
["Factoriza: 32m³ − 16m²","16m²(2m − 1)","El factor común es 16m²."],
["Factoriza: 27a² + 9a","9a(3a + 1)","El factor común es 9a."],
["Factoriza: 18x² − 24x","6x(3x − 4)","El factor común es 6x."]
],
/* NIVEL 5: 20 casos de factor común por agrupación */
[
["Factoriza por agrupación: ax + ay + bx + by","(a + b)(x + y)","Agrupa: a(x + y) + b(x + y). El factor común es (x + y)."],
["Factoriza por agrupación: 3x + 3y + ax + ay","(x + y)(3 + a)","Agrupa: 3(x + y) + a(x + y) = (x + y)(3 + a)."],
["Factoriza por agrupación: mx − my + nx − ny","(m + n)(x − y)","Agrupa: m(x − y) + n(x − y)."],
["Factoriza por agrupación: 2a + 2b + xa + xb","(a + b)(2 + x)","Agrupa: 2(a + b) + x(a + b)."],
["Factoriza por agrupación: x² + 3x + 2x + 6","(x + 2)(x + 3)","Agrupa: x(x + 3) + 2(x + 3) = (x + 2)(x + 3)."],
["Factoriza por agrupación: ab + ac + 5b + 5c","(a + 5)(b + c)","Agrupa: a(b + c) + 5(b + c)."],
["Factoriza por agrupación: 4x + 4y + ax + ay","(x + y)(4 + a)","Agrupa: 4(x + y) + a(x + y)."],
["Factoriza por agrupación: pq − pr + 2q − 2r","(p + 2)(q − r)","Agrupa: p(q − r) + 2(q − r)."],
["Factoriza por agrupación: 6x − 6y + mx − my","(x − y)(6 + m)","Agrupa: 6(x − y) + m(x − y)."],
["Factoriza por agrupación: a² + ab + 3a + 3b","(a + 3)(a + b)","Agrupa: a(a + b) + 3(a + b)."],
["Factoriza por agrupación: 2x² + 2xy + 5x + 5y","(x + y)(2x + 5)","Agrupa: 2x(x + y) + 5(x + y)."],
["Factoriza por agrupación: 7a − 7b + xa − xb","(a − b)(7 + x)","Agrupa: 7(a − b) + x(a − b)."],
["Factoriza por agrupación: 3m² − 3mn + 4m − 4n","(m − n)(3m + 4)","Agrupa: 3m(m − n) + 4(m − n)."],
["Factoriza por agrupación: xy + xz + 6y + 6z","(x + 6)(y + z)","Agrupa: x(y + z) + 6(y + z)."],
["Factoriza por agrupación: 5p + 5q + ap + aq","(p + q)(5 + a)","Agrupa: 5(p + q) + a(p + q)."],
["Factoriza por agrupación: 2a² + 2ab + ca + cb","(a + b)(2a + c)","Agrupa: 2a(a + b) + c(a + b)."],
["Factoriza por agrupación: 9x + 9y + mx + my","(x + y)(9 + m)","Agrupa: 9(x + y) + m(x + y)."],
["Factoriza por agrupación: r² − rs + 4r − 4s","(r − s)(r + 4)","Agrupa: r(r − s) + 4(r − s)."],
["Factoriza por agrupación: 3ab + 3ac + xb + xc","(b + c)(3a + x)","Agrupa: 3a(b + c) + x(b + c)."],
["Factoriza por agrupación: 8m − 8n + pm − pn","(m − n)(8 + p)","Agrupa: 8(m − n) + p(m − n)."]
]
];
const LEVEL_NAMES=["Operaciones entre enteros","Situaciones problema","Expresiones algebraicas y reducción","Factor común","Factor común por agrupación"];
const LEVEL_ICONS=["🌍","🌑","🛰","🪐️","🌌"];
let mission=[],index=0,score=0,streak=0,bestStreak=0,correct=0,wrong=0,locked=false,chosen=null;
const $=id=>document.getElementById(id);
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function esc(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}
function numericOptions(answer){
 const a=Number(answer);let vals=new Set([a]);
 const candidates=[a+2,a-2,a+5,a-5,-a,a===0?1:0,a*2,a/2];
 for(const n of shuffle(candidates))if(Number.isFinite(n)&&n!==a)vals.add(n);
 return shuffle([...vals].slice(0,4)).map(String);
}
function stringOptions(answer,level){
 const raw=String(answer);
 let candidates=[];
 if(level===2){
   candidates=[
    raw.replace(/^\s*−/,"").replace(/^\s*\+/,"−"),
    raw.replace(/\+/,"−"),
    raw.replace(/−/,"+"),
    raw+" + x"
   ];
 } else if(level===3){
   candidates=[
    raw.replace(/^(\d+)/,m=>String(Number(m)+1)),
    raw.replace(/^(\d+)/,m=>String(Math.max(1,Number(m)-1))),
    raw.replace(/\+/,"−"),
    raw.replace(/−/,"+"),
    raw.replace(/\(/,"(")+" "
   ];
 } else {
   candidates=[
    raw.replace(/\(a \+ b\)/,"(a − b)"),
    raw.replace(/\(x \+ y\)/,"(x − y)"),
    raw.replace(/\(m \+ n\)/,"(m − n)"),
    raw.replace(/\+/,"−"),
    raw.replace(/−/,"+"),
    raw.replace(/\(/,"(")+" "
   ];
 }
 const unique=[];
 for(const item of shuffle(candidates)){
   const v=String(item).trim();
   if(v!==raw&&!unique.includes(v))unique.push(v);
 }
 let n=1;
 while(unique.length<3){const v=raw+" ("+n+")";if(!unique.includes(v)&&v!==raw)unique.push(v);n++}
 return shuffle([raw,...unique.slice(0,3)]);
}
function makeOptions(q,level){
 if(level===0||level===1)return numericOptions(q[1]);
 return stringOptions(q[1],level);
}
function startMission(){
 const prior=JSON.parse(localStorage.getItem("misionEnterosRecent")||"[]");
 mission=[];
 for(let level=0;level<5;level++){
   let pool=BANK[level].map((q,i)=>({id:`${level}-${i}`,level,q}));
   let fresh=pool.filter(x=>!prior.includes(x.id));
   if(fresh.length<4)fresh=pool;
   mission.push(...shuffle(fresh).slice(0,4));
 }
 mission=shuffleWithinLevels(mission);
 const ids=mission.map(x=>x.id);
 localStorage.setItem("misionEnterosRecent",JSON.stringify([...ids,...prior].filter((x,i,a)=>a.indexOf(x)===i).slice(0,65)));
 index=0;score=0;streak=0;bestStreak=0;correct=0;wrong=0;locked=false;chosen=null;
 render();
}
function shuffleWithinLevels(items){
 const out=[];
 for(let l=0;l<5;l++)out.push(...shuffle(items.filter(x=>x.level===l)));
 return out;
}
function updateStats(){
 $("score").textContent=score;$("progressCount").textContent=`${index}/${mission.length}`;
 $("streak").textContent=streak;$("progressBar").style.width=`${index/mission.length*100}%`;
 document.querySelectorAll(".level").forEach(el=>{const l=Number(el.dataset.level);el.classList.toggle("active",index<mission.length&&mission[index].level===l);el.classList.toggle("done",mission.filter(x=>x.level===l).every(x=>x._done));});
 const currentLevel=index<mission.length?mission[index].level:4;
 document.querySelectorAll(".map-planet").forEach(el=>{const l=Number(el.dataset.map);el.classList.toggle("active",index<mission.length&&l===currentLevel);el.classList.toggle("complete",mission.filter(x=>x.level===l).every(x=>x._done));});
 $("mapProgress").textContent=`${Array.from({length:5},(_,l)=>mission.filter(x=>x.level===l).every(x=>x._done)).filter(Boolean).length}/5 Destinos`;
}
function render(){
 updateStats();
 if(index>=mission.length){finish();return}
 const item=mission[index],q=item.q,level=item.level;
 const options=makeOptions(q,level);
 item.options=options;item._done=false;
 $("game").innerHTML=`
 <div class="qtop"><span class="tag">${LEVEL_ICONS[level]} NIVEL ${level+1} · ${esc(LEVEL_NAMES[level])}</span><span class="qcount">Reto ${index+1} de 20</span></div>
 <div class="prompt-label">${level===0?"☄️ ¡DESTRUYE EL ASTEROIDE CORRECTO!":level===1?"🌀 ¡ELIGE EL PORTAL QUE TE LLEVA A LA RESPUESTA!":level===2?"🧲 ¡ACTIVA EL ESCÁNER DE TÉRMINOS!":level===3?"🛠️ ¡CARGA EL RAYO DE FACTORIZACIÓN!":"🧩 ¡ALINEA LOS BLOQUES CÓSMICOS!"}</div>
 <div class="question">${esc(q[0])}</div>
 <p class="sub">${level<2?"Elige el resultado correcto.": "Selecciona la factorización o reducción correcta."}</p>
 ${level>=2?`<div class="target-zone" id="dropTarget">🎯 ${level===2?"Suelta aquí la expresión simplificada":level===3?"Suelta aquí la factorización correcta":"Suelta aquí los factores agrupados"}</div><p class="drag-note">Arrastra una pieza al reactor o tócala para colocarla.</p>`:""}
 <div class="options">${options.map((o,i)=>`<button draggable="${level>=2?"true":"false"}" class="option draggable-option ${level===0?"asteroid-option":level===1?"portal-option":level===2?"algebra-option":"factor-option"}" data-option="${i}">${level===0?"☄️ ":level===1?"🌀 ":level===2?"🧲 ":level===3?"🔧 ":"🧩 "}${esc(o)}</button>`).join("")}</div>
 <div id="feedbackSlot"></div>
 <div class="hint" id="hint"><button id="hintBtn" type="button">💡 Pista de la profe Lina</button><div id="hintText" hidden style="margin-top:8px;color:#c7d2fe">Recuerda identificar la regla, agrupar términos semejantes o buscar el factor que se repite.</div></div>
 <div class="actions"><button class="btn secondary" id="restartBtn">↻ Nueva misión</button><button class="btn primary" id="nextBtn" disabled>${index===19?"Ver resultados":"Siguiente reto"} →</button></div>`;
 document.querySelectorAll("[data-option]").forEach(btn=>{
  btn.addEventListener("click",()=>answer(Number(btn.dataset.option)));
  btn.addEventListener("dragstart",ev=>{ev.dataTransfer.setData("text/plain",btn.dataset.option);});
 });
 const dropTarget=$("dropTarget");
 if(dropTarget){
  dropTarget.addEventListener("dragover",ev=>{ev.preventDefault();dropTarget.classList.add("over")});
  dropTarget.addEventListener("dragleave",()=>dropTarget.classList.remove("over"));
  dropTarget.addEventListener("drop",ev=>{ev.preventDefault();dropTarget.classList.remove("over");const n=Number(ev.dataTransfer.getData("text/plain"));answer(n);dropTarget.textContent="🛸 Pieza recibida en el reactor";});
 }
 $("hintBtn").addEventListener("click",()=>{$("hintText").hidden=!$("hintText").hidden});
 $("restartBtn").addEventListener("click",()=>{if(confirm("¿Quieres comenzar una nueva misión de 20 retos? Se elegirá una nueva combinación de ejercicios."))startMission()});
 $("nextBtn").addEventListener("click",()=>{index++;locked=false;chosen=null;render()});
}
function answer(choice){
 if(locked)return;locked=true;chosen=choice;
 const item=mission[index],q=item.q,correctAnswer=String(q[1]);
 const buttons=[...document.querySelectorAll("[data-option]")];
 const chosenText=item.options[choice];
 const isCorrect=chosenText===correctAnswer;
 buttons.forEach((b,i)=>{b.disabled=true;const val=item.options[i];if(val===correctAnswer)b.classList.add("correct");if(i===choice&&!isCorrect)b.classList.add("wrong")});
 item._done=true;
 if(isCorrect){score+=100;correct++;streak++;bestStreak=Math.max(bestStreak,streak);document.querySelector(".space-scene").style.boxShadow="0 0 28px #4ade8055";setTimeout(()=>{const s=document.querySelector(".space-scene");if(s)s.style.boxShadow="none"},700)}
 else{wrong++;streak=0}
 const explanation=q[2];
 $("feedbackSlot").innerHTML=`<div class="feedback ${isCorrect?"":"bad"}"><strong>${isCorrect?"✅ ¡Correcto! +100 puntos":"🧠 ¡Vamos a aprender del error!"}</strong>${esc(explanation)}${isCorrect?"":`<br><b>Respuesta correcta:</b> ${esc(correctAnswer)}`}</div>`;
 $("nextBtn").disabled=false;$("nextBtn").textContent=index===19?"Ver resultados →":"Siguiente reto →";
 updateStats();
}
function finish(){
 $("progressCount").textContent="20/20";$("progressBar").style.width="100%";
 document.querySelectorAll(".level").forEach(el=>{el.classList.remove("active");el.classList.add("done")});
 const pct=Math.round(correct/20*100);
 const msg=pct===100?"¡Dominio total! El reactor está en máxima potencia.":pct>=80?"¡Excelente trabajo! Tienes una gran base matemática.":pct>=60?"¡Vas muy bien! Revisa la retroalimentación y sigue practicando.":"Cada error es una pista para aprender. ¡Inténtalo de nuevo!";
 $("game").innerHTML=`<div class="result"><div class="medal">${pct===100?"🏆":pct>=80?"🚀":pct>=60?"🧠":"💪"}</div><h2>¡Misión completada!</h2><p>Terminaste los 20 retos de los cinco niveles.</p><div class="big">${score} puntos</div><div class="resultbox"><div class="resultline"><span>Respuestas correctas</span><b style="color:var(--green)">${correct}/20</b></div><div class="resultline"><span>Respuestas por revisar</span><b style="color:var(--pink)">${wrong}</b></div><div class="resultline"><span>Porcentaje de aciertos</span><b>${pct}%</b></div><div class="resultline"><span>Mejor racha</span><b style="color:var(--cyan)">${bestStreak}</b></div></div><p>${msg}</p><button class="btn primary" id="playAgain">🎮 Jugar otra misión con nuevos ejercicios</button></div>`;
 $("playAgain").addEventListener("click",startMission);
}
document.querySelectorAll("[data-map]").forEach(btn=>btn.addEventListener("click",()=>{
 const target=Number(btn.dataset.map);
 const found=mission.findIndex((it,i)=>i>=index&&it.level===target);
 if(found>=0){index=found;locked=false;chosen=null;render();window.scrollTo({top:document.querySelector("#game").offsetTop-15,behavior:"smooth"});}
 else if(mission.slice(0,index).some(it=>it.level===target)){const first=mission.findIndex(it=>it.level===target);if(first>=0){index=first;locked=false;chosen=null;render();window.scrollTo({top:document.querySelector("#game").offsetTop-15,behavior:"smooth"});}}
}));

const shootingRounds=[
 {q:"(+7) + (−12) = ?",a:"−5",opts:["−5","19","−19","5"]},
 {q:"(−6) × (+4) = ?",a:"−24",opts:["24","−24","−10","10"]},
 {q:"(−36) ÷ (−6) = ?",a:"6",opts:["−6","30","6","−30"]},
 {q:"−8 + 2 × (−3) = ?",a:"−14",opts:["−30","−2","14","−14"]},
 {q:"Reduce: 4x + 3x = ?",a:"7x",opts:["12x","x","7x","−7x"]},
 {q:"Factoriza: 6x + 12",a:"6(x + 2)",opts:["6(x + 12)","3(2x + 12)","6(x + 2)","2(3x + 12)"]}
];
let shootRound=0,shootHits=0,shipX=50,fireHeld=false,fireTimer=null,shotCooldown=false,shotCount=0,shipDestroyed=false;
function placeShip(){const ship=$("shooterShip");if(ship)ship.style.left=shipX+"%";}
function moveShooter(delta){if(shipDestroyed)return;shipX=Math.max(7,Math.min(93,shipX+delta));placeShip();}
function renderShootRound(){
 const r=shootingRounds[shootRound%shootingRounds.length];
 $("shootQuestion").textContent=r.q;
 const opts=shuffle(r.opts);
 document.querySelectorAll(".target").forEach((b,i)=>{
   b.textContent=opts[i];b.dataset.value=opts[i];b.classList.remove("hit","missed","correct-target");b.disabled=false;
   b.style.left=([8,39,69,26][i])+"%";b.style.top=([88,105,83,166][i])+"px";b.style.outline="none";
 });
 placeShip();
 $("shootStatus").textContent="Pilotea la nave y dispara al asteroide que tenga la respuesta correcta.";
}
function shootLaser(){
 if(shotCooldown||shipDestroyed)return;
 shotCooldown=true;shotCount++;
 const field=$("shootingField"),ship=$("shooterShip");
 const beam=document.createElement("div");beam.className="laser fire";beam.style.left=shipX+"%";beam.style.bottom="43px";field.appendChild(beam);
 // The beam hits an asteroid in the same horizontal lane as the ship.
 const targets=[...document.querySelectorAll(".target")].filter(t=>!t.disabled&&!t.classList.contains("hit"));
 const hit=targets.find(t=>{
   const x=t.offsetLeft+t.offsetWidth/2;
   const shipCenter=field.clientWidth*shipX/100;
   return Math.abs(x-shipCenter)<Math.max(35,field.clientWidth*.09);
 });
 if(hit){
   const r=shootingRounds[shootRound%shootingRounds.length];
   const isCorrect=hit.dataset.value===r.a;
   hit.classList.add("hit");hit.disabled=true;
   if(isCorrect){
     shootHits++;$("shootScore").textContent="✅ Aciertos: "+shootHits;
     $("shootStatus").textContent="✨ ¡Impacto correcto! "+r.q+" "+r.a+" ¡Buen disparo!";
     shootRound++;setTimeout(renderShootRound,650);
   } else {
     shipDestroyed=true;stopFiring();
     const ship=$("shooterShip"),field=$("shootingField");
     ship.classList.add("exploding");field.classList.add("ship-destroyed");
     const boom=document.createElement("div");boom.className="explosion-burst";boom.textContent="💥";field.appendChild(boom);
     $("shootStatus").textContent="💥 ¡BOOM! Elegiste una respuesta incorrecta y la nave explotó. Repara la nave para volver a intentarlo.";
     $("fireBtn").disabled=true;$("moveLeft").disabled=true;$("moveRight").disabled=true;
     $("repairShip").hidden=false;
   }
 } else {
   $("shootStatus").textContent="⚡ ¡Disparo al espacio! Muévete hasta alinear la nave con un asteroide.";
 }
 setTimeout(()=>{beam.remove();shotCooldown=false;},260);
}
function startFiring(){if(fireHeld)return;fireHeld=true;shootLaser();fireTimer=setInterval(shootLaser,360);}
function stopFiring(){fireHeld=false;if(fireTimer){clearInterval(fireTimer);fireTimer=null;}}
$("repairShip").addEventListener("click",()=>{
 shipDestroyed=false;shipX=50;placeShip();
 const ship=$("shooterShip");ship.classList.remove("exploding");
 const field=$("shootingField");field.classList.remove("ship-destroyed");
 field.querySelectorAll(".explosion-burst").forEach(el=>el.remove());
 $("fireBtn").disabled=false;$("moveLeft").disabled=false;$("moveRight").disabled=false;$("repairShip").hidden=true;
 renderShootRound();
});
$("moveLeft").addEventListener("pointerdown",ev=>{ev.preventDefault();moveShooter(-6);});
$("moveRight").addEventListener("pointerdown",ev=>{ev.preventDefault();moveShooter(6);});
$("fireBtn").addEventListener("pointerdown",ev=>{ev.preventDefault();startFiring();});
["pointerup","pointerleave","pointercancel"].forEach(evt=>$("fireBtn").addEventListener(evt,stopFiring));
document.addEventListener("pointerup",stopFiring);
document.addEventListener("keydown",ev=>{
 if(ev.key==="ArrowLeft"){ev.preventDefault();moveShooter(-3);}
 if(ev.key==="ArrowRight"){ev.preventDefault();moveShooter(3);}
 if(ev.code==="Space"&&!ev.repeat){ev.preventDefault();startFiring();}
});
document.addEventListener("keyup",ev=>{if(ev.code==="Space")stopFiring();});
renderShootRound();
startMission();

/* BLOQUEO CLIC DERECHO */
document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });