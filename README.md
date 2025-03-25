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
    <table>
        <tr>
            <th>Vonatszám</th>
            <th>Indulás</th>
            <th>Érkezés</th>
            <th>Állomás</th>
        </tr>
        <tr>
            <td>1234</td>
            <td>12:30</td>
            <td>14:00</td>
            <td>Budapest</td>
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

