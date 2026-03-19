## 1. Analiza wymagań [1h]
- Ustalenie funkcjonalności: pobieranie danych z wttr.in, obsługa CLI i GUI.
- Sprawdzenie formatu JSON i potrzebnych pól (`temp_C`, `windspeedKmph`).
- Określenie obsługi błędów (brak miasta, brak internetu, błędny kod kraju).

## 2. Projekt struktury programu [1,5h]
- Podział na moduły: logika pobierania, konwersje jednostek, CLI, GUI.
- Zaplanowanie funkcji: `get_weather()`, `show_gui()`, `main()`.
- Ustalenie przepływu danych między modułami.

## 3. Implementacja funkcji pobierania pogody [0,5h]
- Wysyłanie zapytania HTTP do `wttr.in`.
- Parsowanie JSON i wyciąganie danych.
- Konwersje jednostek: °C ↔ °F, km/h ↔ mph ↔ m/s.
- Obsługa wyjątków i zwracanie czytelnych komunikatów.

## 4. Implementacja interfejsu CLI [1h]
- Dodanie argumentów: `--city`, `--country`, `--units`, `--gui`.
- Formatowanie wyników w terminalu.
- Testy działania dla różnych kombinacji argumentów.

## 5. Implementacja GUI (Tkinter) [1h]
- Stworzenie okna, pól tekstowych, przycisków i etykiet.
- Obsługa zdarzeń i wyświetlanie wyników.
- Komunikaty błędów w `messagebox`.
- Testy ergonomii i poprawności.

## 6. Testy całościowe [2h]
- Sprawdzenie działania dla różnych miast i krajów.
- Testy offline (brak internetu).
- Testy błędnych danych wejściowych.

## 7. Dokumentacja projektu [1h]
- Opis działania programu.
- Instrukcja uruchamiania CLI i GUI.
- Krótki opis architektury i użytych technologii.

## 8. Finalne poprawki i optymalizacja [1,5h]
- Czyszczenie kodu.
- Uspójnienie komunikatów.
- Ostateczne testy przed oddaniem.

