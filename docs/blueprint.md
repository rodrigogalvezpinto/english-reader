# **App Name**: LinguaTales

## Core Features:

- Story Display: Display mini stories in English and their translations side-by-side, categorized by difficulty level (A1, A2, B1...).
- Word Highlighting: Allow users to tap on any word to highlight it in both the English and Spanish versions, providing immediate context.
- Vocabulary List: Enable users to save highlighted words to a personal vocabulary list, with options to mark them as 'learned' or 'favorite'.
- Audio Narration: Implement a text-to-speech feature to read stories aloud, either the full story or paragraph by paragraph, using the device's built-in TTS engine.
- Local Storage: Store the user's vocabulary list locally, ensuring progress is saved even without an account or internet connection. Consider using local storage for Nextjs.

## Style Guidelines:

- Primary color: Soft blue (#A0D2EB) to create a calm and learning-focused environment.
- Secondary color: Light gray (#F2F2F2) for backgrounds to ensure readability.
- Accent: Teal (#008080) for interactive elements such as buttons and highlighted words.
- Clean and readable font for both English and Spanish text.
- Simple, intuitive icons for navigation and actions (e.g., save, play, settings).
- Clear, clutter-free layout with ample whitespace to enhance readability. Use of cards to display stories.

## Original User Request:
Hola me puedes ayudar a crear una aplicacion para iphone y android que cumpla con lo siguiente:✅ Características principales de la aplicación (versión MVP)1. Lectura de mini historias en inglésVisualización de historias cortas o fragmentadas por nivel de dificultad (A1, A2, B1...).Modo lectura con interfaz limpia y cómoda.2. Traducción táctil en tiempo realAl tocar una palabra, aparece una burbuja flotante con su traducción al español.Soporte para traducción de frases cortas (opcional).Integración con una API gratuita como LibreTranslate.3. Lista de vocabulario personalizadaAl tocar una palabra traducida, se guarda automáticamente en una lista de vocabulario personal.Acceso a la lista desde un menú dedicado.Posibilidad de marcar palabras como "aprendidas" o "favoritas".4. Escuchar la historia en voz naturalReproducción por narración TTS (Text-to-Speech).Posibilidad de escuchar la historia completa o por párrafos.Usar TTS gratuito del dispositivo o motor como Google TTS o Amazon Polly.5. Sincronización de vocabularioGuardado local (SQLite) o en la nube (Firebase) del vocabulario traducido.El usuario conserva su progreso incluso si reinstala la app (si usa login).

podemos hacerlo para dispositivos moviles android y IOS

podemos simplemente tener en ambas versiones los textos a leer en ingles y español con el fin de no tener necesidad de preguntar a una api la traduccion? crees que es posible?

por ahora podemos tener una base de datos tipo H2 con historias generales por cada nivel? y que tu las generes?
  