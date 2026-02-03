# ⌨️ Silent Builder: Terminal Command Center
> **User:** Adrian Rittner | **System:** PowerShell | **Theme:** White Alpha

---

## 🟢 I. Setup & Initialisierung
| Befehl | Aktion |
| :--- | :--- |
| `mkdir <name>` | **Ordner:** Erstellt ein neues Projekt-Verzeichnis. |
| `cd <name>` | **Navigieren:** Geht in den Ordner hinein. |
| `code .` | **Launch:** Öffnet das Verzeichnis in VS Code. |
| `git init` | **Git-Start:** Aktiviert die Versionskontrolle. |
| `git remote add origin <URL>` | **Cloud-Link:** Verbindet den PC mit GitHub. |
| `ni .gitignore` | **Filter:** Erstellt die Datei für Ignoriertes. |

---

## 🔄 II. Der U-M-A Workflow (Speichern)
| Befehl | Aktion |
| :--- | :--- |
| `git status` | **Check:** Zeigt Status (**U**ntracked, **M**odified, **A**dded). |
| `git add .` | **Stage:** Packt alles in den "Umzugskarton" (Status A). |
| `git commit -m "msg"` | **Save:** Erstellt einen festen Meilenstein. |
| `git push` | **Upload:** Schickt Fortschritt auf GitHub hoch. |
| `git pull` | **Sync:** Holt Updates von GitHub auf den PC. |

---

## 📂 III. Navigation & Dateien
| Befehl | Aktion |
| :--- | :--- |
| `ls` | **Inhalt:** Listet alle Dateien im Ordner auf. |
| `cd ..` | **Up:** Geht eine Ebene nach oben zurück. |
| `pwd` | **Location:** Wo befinde ich mich gerade? |
| `ni <name.ext>` | **Neu:** Erstellt eine neue Datei (z.B. `ni index.html`). |
| `rm <name>` | **Löschen:** Entfernt eine Datei permanent. |
| `cls` | **Clean:** Macht das Terminal-Fenster leer. |

---

## ⚠️ IV. Rettung & Korrektur (Debugging)
| Befehl | Aktion |
| :--- | :--- |
| `git restore <datei>` | **Rettung:** Holt eine gelöschte Datei zurück. |
| `git checkout .` | **Reset M:** Verwirft alle Änderungen seit dem letzten Save. |
| `git reset <datei>` | **Un-Stage:** Nimmt Datei aus dem "Bereit"-Status (A) raus. |
| `git log --oneline` | **History:** Zeigt deine Speicher-Historie an. |
| `q` | **Exit:** Beendet Listen (z.B. Git Log), falls festgesteckt. |
| `git reset --soft HEAD~1` | **Undo:** Letzten Save löschen, Code behalten. |
| `git reset --hard HEAD~1` | **Nuclear:** Löscht Save UND Code (Zurück auf Anfang). |

---

## 💡 Status-Bedeutung
- **[U] Untracked:** Ganz neu, Git kennt die Datei noch nicht.
- **[M] Modified:** Bekannt, aber geändert (noch nicht bereit).
- **[A] Added:** Bereit für den Speicherpunkt (`commit`).