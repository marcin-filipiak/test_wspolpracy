# Dokumentacja symulatora statku:


## 1. **Opis projektu**
Aplikacja mobilna w technologii .NET MAUI, która symuluje sterowanie statkiem z uwzględnieniem losowego kierunku wiatru. Prędkość dostosowywana jest do kierunku w którym płynie łódka.

---

## 2. **Wymagania funkcjonalne**
- Wyświetlenie planszy 800x600px
- Sterowanie statkiem poprzez obracanie go w lewo i w prawo.
- Losowy kierunek wiatru oraz jego prędkość.
- Dynamiczne reakcje statku na kierunek wiatru (zmiana prędkości w zależności w jakim kierunku do wiatru płynie użytkownik.

---

## 3. **Wymagania techniczne**
- **Technologia:** .NET MAUI
- **Język programowania:** C#
- **Platformy docelowe:** Android, iOS, Windows


---

## 4. **Mechanika gry**
1. **Sterowanie:**
   - Użytkownik steruje statkiem, obracając go w lewo lub w prawo za pomocą przycisków umieszczonych na dole aplikacji.
   - Zmiana kierunku równa się również zmianie prędkości (inne ustawienie statku do wiatru).
   
2. **Mechanika wiatru:**
   - Kierunek Wiatru zostaje wylosowany podczas uruchomienia aplikacji.
   - Kierunek Wiatru wpływa na prędkość statku (dodatnio gdy płynie się "z wiatrem" i ujemnie gdy płynie się "pod wiatr").
   - Im bardziej statek jest ustawiony w stosunku do kierunku wiatru, tym bardziej spada jego prędkość.

3 **Rodzaje wiatrów**
-
 ![image](https://github.com/user-attachments/assets/6328ab4c-e64d-47b0-a121-0e1b49a5a995)

3. **Cel gry:**
   - Użytkownik płynie w wybranym przez siebie kierunku sterując przy tym obrotem łódki, by dostosować się do kierunku wiatru

---

## 5. **Specyfikacja funkcjonalna**

### **1. Start aplikacji**
   - **Opis:** Po uruchomieniu aplikacji na ekranie pojawia się statek w formie kwadratu 50x50px oraz generuje się kierunek wiatru.


### **2. Sterowanie statkiem**
   - **Opis:** Użytkownik może obracać statek w lewo i prawo za pomocą przycisków.
   - **Wejścia:**  
     - Kliknięcie przycisku „Rotate Left” – obrót statku w lewo o 15°.
     - Kliknięcie przycisku „Rotate Right” – obrót statku w prawo o 15°.
   - **Wyjścia:** Zmiana kąta obrotu statku.

### **3. Reakcja statku na wiatr**
   - **Opis:** Wiatr wpływa na prędkość statku.
   - **Wejścia:** Kierunek wiatru.
   - **Wyjścia:**  
     - Statek zmienia prędkość w zależności od ustawienia do wiatru.
---
## 6. Przypadki użycia
### Przypadek 1: Skręt statku w prawo
**Aktorzy:**
- Użytkownik systemu

**Opis:**
1. Użytkownik klika przycisk "Rotate right"
2. Statek obraca się w prawo o 15° na każde kliknięcie
3. Prędkość statku dostosowuje się do kierunku wiatru
4. Łódka przyspiesza lub traci prędkość

**Dane wejściowe:**
- Kliknięcie przycisku „Rotate Right”

**Dane wyjściowe:**
- obrót statku w prawo o 15°

### Przypadek 2: Skręt statku w lewo
**Aktorzy:**
- Użytkownik systemu

**Opis:**
1. Użytkownik klika przycisk "Rotate left"
2. Statek obraca się w lewo o 15° na każde kliknięcie
3. Prędkość statku dostosowuje się do kierunku wiatru
4. Łódka przyspiesza lub traci prędkość

**Dane wejściowe:**
- Kliknięcie przycisku „Rotate left”

**Dane wyjściowe:**
- obrót statku w left o 15°
