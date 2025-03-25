## MÁV utastájékoztató

Ez a projekt egy egyszerű webes felületet biztosít a MÁV vonatindulások és érkezések megjelenítésére. A weboldal **HTML** és **CSS** segítségével készült, és egy táblázatos formátumban jeleníti meg az aktuális menetrendet.

![mavlogo](mavlogo.png)

### 📌 Funkciók
- 🚉 Induló és érkező vonatok listázása táblázatban
- ⏰ Állomás, indulási és érkezési idők megjelenítése
- 🎨 Felhasználóbarát, letisztult dizájn

### 🚀 Használat
Csak egy katintással nyisd meg a `https://mrspaniel.github.io/2025_01_30_MAV_utastajekoztato/` weboldalt a böngészőben, és a rendszer betölti az aktuális adatokat.
#### 🌍 Élő demó

Nézd meg élőben a projektet az alábbi linken:  
[🔗 MÁV Utastájékoztató](https://mrspaniel.github.io/2025_01_30_MAV_utastajekoztato/)

### 🏗️ Alap HTML szerkezet
```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MÁV Utastájékoztató</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>MÁV Utastájékoztató</h1>
<table align="center" tr { border-bottom: 1px solid;}>
        <colgroup>
            <col span="2" style="width: 80px;">
            <col span="1" style="width: 80px;">
            <col span="2">
            <col span="1" style="width: 40px;">
        </colgroup>
        <tr id="elsosor">
            <th colspan="2" style="background-color: rgb(214, 214, 214);" id="ido">
                <div id="clock"></div>
            </th>
            <td id="ankunft" align="right">
                <strong>Ankunft</strong>
            </td>
            <td id="erkezovonatok" align="right">
                <strong>ÉRKEZŐ VONATOK</strong>
            </td>
            <td id="arrivals" align="center">
                <strong>Arrivals</strong>
            </td>
            <td id="logo">
                <img src="mavlogo.png" width="90%" alt="máv logo" align="center">
            </td>
        </tr>
        <tr style="font-size: 20px;" align="center">
            <th id="tervezett">Tervezett<br>érkezés</th>
            <th id="varhato">Várható<br>érkezés</th>
            <th>Vonat</th>
            <th>Honnan</th>
            <th></th>
            <th align="left">Vg.</th>
        </tr>
        <tr>
            <td align="center">24:00</td>
            <td align="center"></td>
            <td><img src="szemelyvonat.png" alt="SZ" width="60%" style="vertical-align: middle;margin: 6px 16px;"></td>
            <th align="left">Budapest-Nyugati</th>
            <td></td>
            <td align="right">3</td>
        </tr>
        <tr>
            <td align="center">18:27</td>
            <td id="keses">18:33</td>
            <td><img src="intercity.png" alt="IC" width="60%" style="vertical-align: middle;margin: 6px 14px"></td>
            <th align="left">Budapest-Nyugati</th>
            <td>
                <marquee direction="scroll">Ferihegy - Cegléd - Kecskemét - Kiskunfélegyháza**</marquee>
            </td>
            <td align="right">3</td>
        </tr>
</table>
</body>
</html>
```

## 🎨 CSS Stílusok
```css
table {
  position: sticky;
  /*elhelyezkedés*/
  overflow-y: auto;
  /*ez titok*/
  width: 75%;
  /*szélesség*/
  background-color: rgb(38, 176, 101);
  /*háttérszín*/
  color: rgb(255, 255, 255);
  /*betűszín*/
  font-family: 'Arial';
  /*betűtípus*/
  font-size: 30px;
  /*betűméret*/
}
body {
  background-image: url(hatter3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 90% 90%;
}

```

### 🔧 Fejlesztési lehetőségek
- [ ] 🔄 Dinamikus adatbetöltés API-n keresztül
- [ ] 🔍 Keresési és szűrési lehetőségek
- [x] 📱 Reszponzív megjelenítés mobileszközökre

