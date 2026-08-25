# 🍲 Kicsi Csángó Magyar Konyha - Demo Weboldal

## 📋 Projekt Leírása

Ez egy **professzionális, modern éttermi weboldal demo**, amely a **Kicsi Csángó Magyar Konyha** (Budapest, Alagút u. 1.) számára lett létrehozva.

A weboldal **teljes mértékben működőképes**, nem igényel szerver vagy háttér, és közvetlenül a böngészőben megnyitható.

### Célja
- ✅ Értékesítési bemutató a restaurant tulajdonosnak
- ✅ Posteriormente személyre szabható valódi adatokkal
- ✅ GitHub Pages-on hostolható
- ✅ Egyszerűen karbantartható és módosítható

---

## 🚀 Hogyan Kell Megnyitni

### Opció 1: Közvetlenül böngészőben (legegyszerűbb)
1. Töltsd le a fájlokat a gépedre
2. Nyisd meg az `index.html` fájlt dupla kattintással
3. Kész! Az oldal működik

### Opció 2: GitHub-ból
1. Menj a repo-ra: https://github.com/matekovHUN/codex
2. Kattints a "Code" gombra
3. Válaszd a "Download ZIP" opciót
4. Csomagold ki és nyisd meg az `index.html`-t

### Opció 3: GitHub Pages-on (hosting)
Ha GitHub Pages-en szeretnéd hosztolni:
1. Menj a repo Settings → Pages
2. Válaszd a "Deploy from a branch" opciót
3. Branch: `main`, Folder: `/ (root)`
4. Az oldal elérhető lesz pl.: `https://matekovHUN.github.io/codex/`

---

## 📁 Fájlok Szerkezete

```
codex/
├── index.html          # Főoldal (HTML struktura)
├── styles.css          # Teljes CSS styling (reszponzív)
├── script.js           # JavaScript (interaktív funkciók)
└── README.md           # Ez a fájl
```

### Fájlok Részletei

**index.html**
- Teljes HTML5 szerkezet
- Szemantikus HTML elemek
- Magyar nyelvű tartalom
- Beépített demo adatok
- Asztalt foglalási form

**styles.css**
- CSS Variables (könnyű módosítás)
- Teljes reszponzív design (mobil, tablet, desktop)
- Prémium éttermi hangulat
- Animációk és átmenetek
- Print-barát stílus

**script.js**
- Simula, sima scroll navigáció
- Asztalt foglalási form kezelése
- Telefonszám formázás
- Intersection Observer (fade-in animációk)
- Analytics placeholder
- Utility funkciók

---

## 🎨 Weboldal Szakaszai

### 1. **Header & Navigáció**
- Étterem neve és logo
- Navigációs menü az oldalak közti mozgáshoz

### 2. **Hero Szekció**
- Hangulatos háttér (gradient)
- Étterem neve és mottó
- CTA gombok: "Asztalfoglalás" és "Hívás most"

### 3. **Bemutatkozás**
- Étterem történetének és filozófiájának leírása
- Hangsúly: csángó hagyományok, minőség, vendégszeretet
- Demo jelzés (mivel ezek demo adatok)

### 4. **Étlap (Menu)**
4 kategória:
- 🍲 **Levesek** (4 étel)
- 🍖 **Főételek** (4 étel)
- 🎂 **Desszertek** (4 étel)
- 🍷 **Italok** (4 ital)

Minden tételhez:
- Étel neve
- Rövid leírás
- Demo ár forintban

**Megjegyzés**: Az étlap és árak **demo adatok** - cseréje szükséges az igazi értékekre!

### 5. **Hangulat Szekció (Gallery)**
- 4 hangulatos kártya (CSS gradient háttérrel)
- Témák: Autentikus ízek, Meleg légkör, Csángó hagyomány, Minőségi kiszolgálás

### 6. **Nyitvatartás**
- Demo nyitvatartási idők
- Jelzés, hogy pontosítás szükséges

### 7. **Kapcsolat & Foglalás**
- Telefonszám (kattintható link - hívás)
- Cím (Budapest, I. kerület)
- Email (demo)
- **Asztalt foglalási form** teljes funkciókkal

### 8. **Lábléc**
- Étterem neve
- Demo jelzés
- Copyright

---

## ⚙️ Személyre Szabás Útmutató

### Étterem Adatok Módosítása

**Telefonszám:**
- `index.html`-ben: Keress rá `+36307243676`-ra
- Cseréld le az igazi telefonszámra

**Cím:**
- `index.html`-ben: Keress rá `Alagút utca 1.`
- Cseréld le az igazi címre

**Nyitvatartás:**
- `index.html`-ben: Keress az `<section class="hours-contact">` után
- Módosítsd a napok és időpontok szerint

**Email:**
- `index.html`-ben: Keress rá `info@kicsi-csango.hu`-ra
- Cseréld le az igazi email-re

### Étlap Módosítása

Az étlap a `index.html`-ben a `<section class="menu">` alatt található.

Egy étel módosítása:
```html
<div class="menu-item">
    <div class="menu-item-name">Gulyásleves</div>
    <div class="menu-item-desc">Klasszikus magyar gulyás, hagymával, paprikával</div>
    <div class="menu-item-price">1.590 Ft</div>
</div>
```

**Stepsek:**
1. Szerkeszd az `index.html`-t szövegszerkesztővel (pl. VS Code, Notepad++)
2. Keress rá az étel nevére
3. Módosítsd a `menu-item-name`, `menu-item-desc`, `menu-item-price` elemeket
4. Mentsd el a fájlt
5. Frissítsd a böngészőt (F5)

### Szín Módosítása

A fő színek a `styles.css` fájl tetején vannak definiálva:
```css
:root {
    --primary-color: #8B0000;      /* Sötétpiros */
    --accent-color: #DC143C;       /* Élénk piros */
    --text-dark: #2C2C2C;          /* Sötét szöveg */
    --bg-light: #F5F5F5;           /* Világos háttér */
}
```

Módosítás:
1. Nyisd meg a `styles.css` fájlt
2. Cseréld le a hex kódokat az igazi színekre
3. Mentsd el

**Szín finder:** https://www.color-hex.com/

### Szöveg Módosítása

Bármely szöveg módosítható:
1. Nyisd meg az `index.html`-t szövegszerkesztővel
2. Keress rá a módosítandó szövegre
3. Módosítsd
4. Mentsd el

---

## 🔧 Technikai Részletek

### Frontend Stack
- **HTML5**: Szemantikus, akadálymentes szerkezet
- **CSS3**: Modern, reszponzív, animációkkal
- **Vanilla JavaScript**: Nincs library függőség

### Böngésző Kompatibilitás
- ✅ Chrome / Chromium (100+)
- ✅ Firefox (90+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobil böngészők

### Reszponzív Breakpointok
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: <480px

---

## 📱 Mobilbarát Funkciók

✅ Teljes reszponzív design
✅ Touch-barát gombok és formok
✅ Könnyű navigáció mobilon
✅ Gyors betöltés
✅ Hívás gomb (telefonszám kattintható)
✅ Email link (kattintható)

---

## 🎯 Értékesítési Bemutatás

Ez az oldal **tökéletes demó** az étterem tulajdonosnak:

### Mit mutat meg?
1. **Professzionális megjelenés** - Modern, elegáns design
2. **Funkcionális étlap** - Könnyű böngészés és keresés
3. **Foglalási rendszer** - Közvetlen asztal foglalás
4. **Mobilbarát** - Jól működik telefonon is
5. **Könnyen szerkeszthető** - Nem szükséges technikai tudás

### Bemutatás Lépésében
1. Nyisd meg az `index.html`-t böngészőben
2. Mutasd meg a hero szekcióját
3. Guríts az étlapra - mutasd meg a kategóriákat
4. Görgess a foglalási formra
5. Mutat egy foglalást (demo)
6. Magyarázd el, hogy milyen könnyű módosítani

---

## 📝 Demo Adatok Jelzése

Minden demo adat **világosan jelölve** van:

- ⚠️ Bemutatkozás szekció - "Ez egy demo bemutató"
- ⚠️ Étlap - "Az étlap és az árak demo adatok"
- ⚠️ Nyitvatartás - "Demo nyitvatartás. Pontosítás szükséges!"
- ⚠️ Lábléc - "Demo weboldal értékesítési bemutatóhoz"

---

## 🔐 Adatkezelés

**Személyes adatok:** Az asztalt foglalási form **csak demó**. Az adatok:
- Nem kerülnek sehova
- Nem kerülnek továbbításra
- Nem kerülnek tárolásra

A valós üzemeltetéshez szükséges:
- Email backend setup
- Foglalási rendszer integrálása (pl. Calendly, Bookly, stb.)
- Adatvédelmi nyilatkozat (GDPR)

---

## 🚨 Fontos Megjegyzések az Értékesítés Előtt

**Személyre szabás szükséges:**

1. ✅ **Valódi telefonszám** - Lecserélni a demo számra
2. ✅ **Valódi cím** - Lecserélni a valódi helyre
3. ✅ **Valódi email** - Lecserélni az étterem emailjére
4. ✅ **Valódi nyitvatartás** - Lecserélni az igazi időpontokra
5. ✅ **Valódi étlap** - Lecserélni az igazi ételekre és árakra
6. ✅ **Valódi képek** - Ha lehetséges, az étterem fotói
7. ✅ **Foglalási rendszer** - Backend kezelő csatolása (opcionális)

---

## 📞 Ügyfélszolgálat & Támogatás

Ha módosításra van szükséged:
1. Szerkeszd az `index.html`, `styles.css`, `script.js` fájlokat
2. Vagy írj üzenetet az étteremnek az igazi adatokról
3. Vagy szólj egy fejlesztőnek a személyre szabáshoz

---

## 📄 Licenc

Ez a demo projekt **szabadon használható** és **módosítható** az étterem számára.

---

## 🎉 Kész vagy!

Az oldal most működik. Tesztelj, szerkessz, módosíts, és mutatd meg az étteremnek!

### Gyors ellenőrzés:
- [ ] Megnyitható az `index.html`?
- [ ] Működik a navigáció?
- [ ] Reszponzív a mobil nézet?
- [ ] Működik a foglalási form?
- [ ] Működik a telefonszám gomb?

**Sikeres értékesítést! 🍲**

---

**Készítette:** Copilot Demo System
**Verziója:** 1.0
**Dátuma:** 2024
