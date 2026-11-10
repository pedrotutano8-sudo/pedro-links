// ===== sprites em pixel art (cada caractere = 1 pixel) =====
const PAL = { o: "#FF6A2B", d: "#96381A", c: "#F3F1EC", y: "#FFD15C", k: "#111316", g: "#9AA0A9" };
const SPR = {
  shield: ["ooooooooo","occccccco","occcocccо","occooocco","occcocccо","occcccccо"," occccco ","  occco  ","   ooo   ","    o    "],
  battery:["  cc  cc  ","oooooooooo","okkkkkkkko","okckkkkkko","occckkccco","okckkkkkko","okkkkkkkko","oooooooooo"],
  bot:    ["    y    ","    c    "," ccccccc ","cckcccckc","cckcccckc","ccccccccc","cckkkkkcc"," ccccccc ","  c   c  "],
  coin:   ["  kkkk  "," kyyyyk ","kyyccyyk","kyyycyyk","kyyycyyk","kyyycyyk"," kyyyyk ","  kkkk  "],
  play:   ["oooooooooo","occccccco".padEnd(10,"o"),"occkcccco".padEnd(10,"o"),"occkkccco".padEnd(10,"o"),"occkkkcco".padEnd(10,"o"),"occkkccco".padEnd(10,"o"),"occkcccco".padEnd(10,"o"),"oooooooooo"]
};
document.querySelectorAll("[data-sprite]").forEach(svg => {
  const rows = SPR[svg.dataset.sprite].map(r => r.replace(/о/g, "o"));
  const w = Math.max(...rows.map(r => r.length)), h = rows.length, s = Math.max(w, h);
  svg.setAttribute("viewBox", `0 0 ${s} ${s}`); svg.setAttribute("shape-rendering", "crispEdges");
  const ox = (s - w) / 2, oy = (s - h) / 2; let out = "";
  rows.forEach((r, y) => [...r].forEach((ch, x) => { if (PAL[ch]) out += `<rect x="${x + ox}" y="${y + oy}" width="1" height="1" fill="${PAL[ch]}"/>`; }));
  svg.innerHTML = out;
});
