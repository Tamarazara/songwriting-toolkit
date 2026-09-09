const fields=["songTitle","theme","chords","tempo","hook","verse1","prechorus","chorus","verse2","bridge","outro","rhymeScheme","vocalNotes","wordBank","productionNotes"];
const creativePrompts=["Write the scene before you write the song.","Describe one memory using only sights, sounds, smells, and textures.","Write from the point of view of someone who cannot say what they really mean.","Turn one ordinary object into a symbol for the whole song.","Write the chorus as if it is the sentence your character has been afraid to say.","Start with the ending, then write backward."];
const hookPrompts=["What is the one sentence a listener should remember after the song ends?","Write a title line that can mean two different things.","Turn the central conflict into a short repeatable phrase.","Write the emotional truth of the song in eight words or fewer.","Use a strong image instead of naming the emotion directly."];
function data(){let d={};fields.forEach(id=>d[id]=document.getElementById(id).value);return d}
function flash(m){const s=document.getElementById("status");s.textContent=m;setTimeout(()=>s.textContent="",2200)}
function load(){const x=localStorage.getItem("songwritingToolkitDraft");if(!x)return;const d=JSON.parse(x);fields.forEach(id=>{if(d[id]!==undefined)document.getElementById(id).value=d[id]})}
document.getElementById("saveBtn").onclick=()=>{localStorage.setItem("songwritingToolkitDraft",JSON.stringify(data()));flash("Draft saved in this browser.")};
document.getElementById("clearBtn").onclick=()=>{if(confirm("Clear the current songwriting draft?")){fields.forEach(id=>document.getElementById(id).value="");localStorage.removeItem("songwritingToolkitDraft");flash("Draft cleared.")}};
document.getElementById("newPromptBtn").onclick=()=>document.getElementById("creativePrompt").textContent=creativePrompts[Math.floor(Math.random()*creativePrompts.length)];
document.getElementById("hookPromptBtn").onclick=()=>document.getElementById("hookPrompt").textContent=hookPrompts[Math.floor(Math.random()*hookPrompts.length)];
document.getElementById("exportBtn").onclick=()=>{const d=data();const t=`${d.songTitle||"Untitled Song"}

Theme / Emotion: ${d.theme}
Key / Chords: ${d.chords}
Tempo / Feel: ${d.tempo}

HOOK
${d.hook}

VERSE 1
${d.verse1}

PRE-CHORUS
${d.prechorus}

CHORUS
${d.chorus}

VERSE 2
${d.verse2}

BRIDGE
${d.bridge}

FINAL CHORUS / OUTRO
${d.outro}

Rhyme Scheme: ${d.rhymeScheme}
Vocal Notes: ${d.vocalNotes}

IMAGERY / WORD BANK
${d.wordBank}

PRODUCTION / ARRANGEMENT NOTES
${d.productionNotes}`;const b=new Blob([t],{type:"text/plain"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download=(d.songTitle||"song-draft").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-")+".txt";a.click();URL.revokeObjectURL(u)};
load();