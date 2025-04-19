'use server';

/**
 * @fileOverview Manages access to story data.
 *
 * Exports:
 *   - getStoriesByLevel: Retrieves stories based on difficulty level.
 *   - getStoryById: Retrieves a single story by its ID.
 */

export interface Story {
  id: number;
  title: string;
  title_es: string;
  level: string;
  content: string;
  content_es: string;
  word_translations: { [key: string]: string };
  read_time: number;
  image_url?: string;
  completed?: number;
}

const sampleStories: Story[] = [
  {
    id: 1,
    title: "A Day at the Park",
    title_es: "Un Día en el Parque",
    level: "a1",
    content: `It was a sunny day. Sarah went to the park with her dog. The park was big and green. There were many trees and flowers.

Sarah's dog was happy. It ran around and played with a ball. Sarah sat on a bench and watched her dog.

After a while, Sarah felt hungry. She had brought a sandwich and an apple. She ate her lunch and gave her dog some water.

In the afternoon, it started to rain. Sarah and her dog went home. They were tired but happy. It was a good day at the park.`,
    content_es: `Era un día soleado. Sarah fue al parque con su perro. El parque era grande y verde. Había muchos árboles y flores.

El perro de Sarah estaba feliz. Corrió alrededor y jugó con una pelota. Sarah se sentó en un banco y observó a su perro.

Después de un rato, Sarah sintió hambre. Había traído un sándwich y una manzana. Comió su almuerzo y le dio agua a su perro.

Por la tarde, comenzó a llover. Sarah y su perro se fueron a casa. Estaban cansados pero felices. Fue un buen día en el parque.`,
    word_translations: {
      sunny: "soleado",
      day: "día",
      park: "parque",
      dog: "perro",
      big: "grande",
      green: "verde",
      trees: "árboles",
      flowers: "flores",
      happy: "feliz",
      ran: "corrió",
      played: "jugó",
      ball: "pelota",
      sat: "se sentó",
      bench: "banco",
      watched: "observó",
      while: "rato",
      hungry: "hambrienta",
      sandwich: "sándwich",
      apple: "manzana",
      lunch: "almuerzo",
      water: "agua",
      afternoon: "tarde",
      rain: "lluvia",
      home: "casa",
      tired: "cansados",
      good: "buen",
      the: "el-la"
    },
    read_time: 3,
    image_url: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "My Family",
    title_es: "Mi Familia",
    level: "a1",
    content: `This is my family. There are five people in my family. My father, my mother, my brother, my sister, and me.

My father is tall. He works in an office. My mother is a teacher. She teaches children at a school.

My brother is older than me. He is a student at university. My sister is younger than me. She likes to play with dolls.

I am ten years old. I go to school every day. I like to read books and play football. We are a happy family.`,
    content_es: `Esta es mi familia. Hay cinco personas en mi familia. Mi padre, mi madre, mi hermano, mi hermana y yo.

Mi padre es alto. Él trabaja en una oficina. Mi madre es profesora. Ella enseña a niños en una escuela.

Mi hermano es mayor que yo. Él es estudiante en la universidad. Mi hermana es menor que yo. A ella le gusta jugar con muñecas.

Tengo diez años. Voy a la escuela todos los días. Me gusta leer libros y jugar al fútbol. Somos una familia feliz.`,
    word_translations: {
      family: "familia",
      five: "cinco",
      people: "personas",
      father: "padre",
      mother: "madre",
      brother: "hermano",
      sister: "hermana",
      tall: "alto",
      works: "trabaja",
      office: "oficina",
      teacher: "profesora",
      teaches: "enseña",
      children: "niños",
      school: "escuela",
      older: "mayor",
      student: "estudiante",
      university: "universidad",
      younger: "menor",
      likes: "le gusta",
      play: "jugar",
      dolls: "muñecas",
      ten: "diez",
      years: "años",
      old: "años",
      go: "voy",
      every: "todos los",
      day: "día",
      read: "leer",
      books: "libros",
      football: "fútbol",
      happy: "feliz",
      the: "el-la"
    },
    read_time: 2,
    image_url: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "The Lost Dog",
    title_es: "El Perro Perdido",
    level: "a2",
    content: `Tom was walking home from school when he saw a small dog. The dog looked lost and scared. It didn't have a collar or any identification.

Tom decided to help the dog. He approached it slowly and spoke in a gentle voice. The dog was nervous at first, but then it came closer to Tom. Tom gave the dog some of his sandwich, and the dog ate it quickly.

Tom took the dog home and showed it to his parents. They agreed to keep the dog until they could find its owner. Tom made posters with a picture of the dog and put them around the neighborhood.

Three days later, a woman called. She had lost her dog and recognized it from the poster. She came to Tom's house and was very happy to see her dog again. She thanked Tom and his family for taking care of her pet.

Tom was a little sad to say goodbye to the dog, but he was happy that it found its home. The woman invited Tom to visit the dog anytime he wanted.`,
    content_es: `Tom estaba caminando a casa desde la escuela cuando vio un perro pequeño. El perro parecía perdido y asustado. No tenía collar ni ninguna identificación.

Tom decidió ayudar al perro. Se acercó lentamente y habló con voz suave. El perro estaba nervioso al principio, pero luego se acercó a Tom. Tom le dio parte de su sándwich, y el perro lo comió rápidamente.

Tom llevó el perro a casa y se lo mostró a sus padres. Ellos accedieron a quedarse con el perro hasta que pudieran encontrar a su dueño. Tom hizo carteles con una foto del perro y los puso por el vecindario.

Tres días después, una mujer llamó. Había perdido a su perro y lo reconoció en el cartel. Vino a la casa de Tom y estaba muy feliz de ver a su perro de nuevo. Agradeció a Tom y a su familia por cuidar de su mascota.

Tom estaba un poco triste por despedirse del perro, pero estaba feliz de que hubiera encontrado su hogar. La mujer invitó a Tom a visitar al perro cuando quisiera.`,
    word_translations: {
      walking: "caminando",
      home: "casa",
      school: "escuela",
      saw: "vio",
      small: "pequeño",
      dog: "perro",
      lost: "perdido",
      scared: "asustado",
      collar: "collar",
      identification: "identificación",
      decided: "decidió",
      help: "ayudar",
      approached: "acercó",
      slowly: "lentamente",
      spoke: "habló",
      gentle: "suave",
      voice: "voz",
      nervous: "nervioso",
      first: "principio",
      came: "acercó",
      closer: "más cerca",
      gave: "dio",
      sandwich: "sándwich",
      ate: "comió",
      quickly: "rápidamente",
      took: "llevó",
      showed: "mostró",
      parents: "padres",
      agreed: "accedieron",
      keep: "quedarse",
      until: "hasta",
      find: "encontrar",
      owner: "dueño",
      made: "hizo",
      posters: "carteles",
      picture: "foto",
      put: "puso",
      around: "por",
      neighborhood: "vecindario",
      three: "tres",
      days: "días",
      later: "después",
      woman: "mujer",
      called: "llamó",
      recognized: "reconoció",
      poster: "cartel",
      came: "vino",
      house: "casa",
      happy: "feliz",
      see: "ver",
      again: "de nuevo",
      thanked: "agradeció",
      family: "familia",
      taking: "cuidar",
      care: "cuidar",
      pet: "mascota",
      sad: "triste",
      say: "decir",
      goodbye: "adiós",
      found: "encontrado",
      invited: "invitó",
      visit: "visitar",
      anytime: "cuando",
      wanted: "quisiera",
      the: "el-la"
    },
    read_time: 5,
    image_url: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "The Mystery Box",
    title_es: "La Caja Misteriosa",
    level: "b1",
    content: `Emma received a package in the mail. It was a small wooden box with no return address. There was a note attached that said, "Open when you're alone." Emma was curious but also a bit worried. Who had sent her this mysterious box?

She decided to wait until evening when her roommate was out. She carefully opened the box and found a key inside. It was an old-fashioned brass key with an unusual shape. There was another note underneath the key that read, "This opens something valuable from your past."

Emma was confused. She couldn't think of anything from her past that would need a key like this. She examined it closely, trying to remember if she had seen it before. Suddenly, she realized it looked similar to the key for her grandmother's old chest, which had been lost years ago.

The next weekend, Emma visited her parents' house and went up to the attic where her grandmother's chest was stored. She tried the key, and to her surprise, it fit perfectly. Inside the chest, she found old photographs, letters, and a beautiful antique necklace that had belonged to her great-grandmother.

There was also a letter addressed to Emma from her grandmother, written before she passed away. The letter explained that the necklace was a family heirloom and should be passed down to Emma on her 25th birthday. Emma's grandmother had arranged for the key to be sent to Emma at the right time.

Emma was touched by her grandmother's thoughtfulness. She put on the necklace and felt a special connection to her family's history. The mystery box had led her to a precious gift and memories she would always treasure.`,
    content_es: `Emma recibió un paquete por correo. Era una pequeña caja de madera sin dirección de remitente. Había una nota adjunta que decía: "Abre cuando estés sola". Emma sentía curiosidad pero también estaba un poco preocupada. ¿Quién le había enviado esta misteriosa caja?

Decidió esperar hasta la noche cuando su compañera de habitación no estuviera. Abrió cuidadosamente la caja y encontró una llave dentro. Era una llave de latón antigua con una forma inusual. Había otra nota debajo de la llave que decía: "Esto abre algo valioso de tu pasado".

Emma estaba confundida. No podía pensar en nada de su pasado que necesitara una llave como esta. La examinó de cerca, tratando de recordar si la había visto antes. De repente, se dio cuenta de que se parecía a la llave del viejo baúl de su abuela, que se había perdido hace años.

El siguiente fin de semana, Emma visitó la casa de sus padres y subió al ático donde estaba guardado el baúl de su abuela. Probó la llave y, para su sorpresa, encajaba perfectamente. Dentro del baúl, encontró fotografías antiguas, cartas y un hermoso collar antiguo que había pertenecido a su bisabuela.

También había una carta dirigida a Emma de su abuela, escrita antes de que falleciera. La carta explicaba que el collar era una reliquia familiar y debía ser entregado a Emma en su cumpleaños número 25. La abuela de Emma había arreglado que la llave fuera enviada a Emma en el momento adecuado.

Emma se conmovió por la consideración de su abuela. Se puso el collar y sintió una conexión especial con la historia de su familia. La caja misteriosa la había llevado a un regalo precioso y recuerdos que siempre atesoraría.`,
    word_translations: {
      received: "recibió",
      package: "paquete",
      mail: "correo",
      small: "pequeña",
      wooden: "de madera",
      box: "caja",
      return: "remitente",
      address: "dirección",
      note: "nota",
      attached: "adjunta",
      said: "decía",
      open: "abre",
      when: "cuando",
      alone: "sola",
      curious: "curiosidad",
      worried: "preocupada",
      sent: "enviado",
      mysterious: "misteriosa",
      decided: "decidió",
      wait: "esperar",
      evening: "noche",
      roommate: "compañera de habitación",
      out: "no estuviera",
      carefully: "cuidadosamente",
      opened: "abrió",
      found: "encontró",
      key: "llave",
      inside: "dentro",
      "old-fashioned": "antigua",
      brass: "latón",
      unusual: "inusual",
      shape: "forma",
      another: "otra",
      underneath: "debajo",
      read: "decía",
      opens: "abre",
      something: "algo",
      valuable: "valioso",
      past: "pasado",
      confused: "confundida",
      think: "pensar",
      anything: "nada",
      need: "necesitara",
      like: "como",
      examined: "examinó",
      closely: "de cerca",
      trying: "tratando",
      remember: "recordar",
      seen: "visto",
      before: "antes",
      suddenly: "de repente",
      realized: "dio cuenta",
      looked: "parecía",
      similar: "similar",
      "grandmother's": "de su abuela",
      chest: "baúl",
      lost: "perdido",
      years: "años",
      ago: "hace",
      next: "siguiente",
      weekend: "fin de semana",
      visited: "visitó",
      "parents'": "de sus padres",
      house: "casa",
      went: "subió",
      attic: "ático",
      stored: "guardado",
      tried: "probó",
      surprise: "sorpresa",
      fit: "encajaba",
      perfectly: "perfectamente",
      photographs: "fotografías",
      letters: "cartas",
      beautiful: "hermoso",
      antique: "antiguo",
      necklace: "collar",
      belonged: "pertenecido",
      "great-grandmother": "bisabuela",
      addressed: "dirigida",
      written: "escrita",
      passed: "falleciera",
      away: "falleciera",
      explained: "explicaba",
      family: "familiar",
      heirloom: "reliquia",
      passed: "entregado",
      down: "entregado",
      birthday: "cumpleaños",
      arranged: "arreglado",
      right: "adecuado",
      time: "momento",
      touched: "conmovió",
      thoughtfulness: "consideración",
      put: "puso",
      felt: "sintió",
      special: "especial",
      connection: "conexión",
      history: "historia",
      led: "llevado",
      precious: "precioso",
      gift: "regalo",
      memories: "recuerdos",
      always: "siempre",
      treasure: "atesoraría",
      the: "el-la"
    },
    read_time: 7,
    image_url: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "The Unexpected Guest",
    title_es: "El Invitado Inesperado",
    level: "b2",
    content: `The dinner party was going exactly as planned. The table was set with elegant china, crystal glasses sparkled under the chandelier, and the aroma of Julia's signature roast filled the apartment. Six friends gathered around the table, engaged in lively conversation about their recent travels and career developments.

Just as Julia was about to serve the dessert, the doorbell rang. She exchanged a puzzled glance with her husband, Mark. They weren't expecting anyone else. Mark excused himself and went to answer the door.

A moment later, he returned with a stranger – a tall man with rain-soaked clothes and an apologetic smile. "Everyone, this is David," Mark announced with slight hesitation. "He's... an old friend who happened to be in the neighborhood."

The guests murmured polite greetings, but Julia could sense their curiosity. She had never heard Mark mention anyone named David before. As she served coffee and chocolate mousse, she observed the newcomer carefully. There was something familiar about his features, though she couldn't place where she might have seen him.

David spoke little at first, but when the conversation turned to music, he revealed himself to be surprisingly knowledgeable about classical composers. He and Mark seemed to share inside jokes and references that no one else understood. Julia noticed that Mark appeared both relaxed and tense in David's presence – a contradiction she couldn't quite decipher.

As the evening progressed, Julia overheard fragments of a hushed conversation between Mark and David in the hallway. "You shouldn't have come," Mark whispered. "We had an agreement."

"Circumstances change," David replied. "I wouldn't be here if it wasn't important."

When the last guest had departed, leaving only the three of them, David finally explained his unexpected visit. He opened his wallet and removed a faded photograph that made Mark freeze in place. Julia peered over her husband's shoulder and saw a younger version of Mark standing beside David, both wearing military uniforms she didn't recognize.

"I think it's time you told your wife about what happened in Sarajevo," David said quietly. "Because it's about to become relevant again."

Mark's face paled as he turned to Julia. "There are some things about my past that I've never shared with you," he began. "Before we met, I had another life – one I thought I'd left behind forever."`,
    content_es: `La cena estaba saliendo exactamente según lo planeado. La mesa estaba puesta con elegante porcelana, las copas de cristal brillaban bajo la lámpara de araña, y el aroma del asado especial de Julia llenaba el apartamento. Seis amigos reunidos alrededor de la mesa, participaban en una animada conversación sobre sus recientes viajes y desarrollos profesionales.

Justo cuando Julia estaba a punto de servir el postre, sonó el timbre. Intercambió una mirada desconcertada con su esposo, Mark. No esperaban a nadie más. Mark se disculpó y fue a abrir la puerta.

Un momento después, regresó con un desconocido – un hombre alto con ropa empapada por la lluvia y una sonrisa de disculpa. "Todos, este es David", anunció Mark con ligera vacilación. "Es... un viejo amigo que pasaba por el vecindario".

Los invitados murmuraron saludos corteses, pero Julia podía sentir su curiosidad. Nunca había oído a Mark mencionar a nadie llamado David antes. Mientras servía café y mousse de chocolate, observó al recién llegado cuidadosamente. Había algo familiar en sus rasgos, aunque no podía ubicar dónde podría haberlo visto.

David habló poco al principio, pero cuando la conversación giró hacia la música, demostró tener un conocimiento sorprendente sobre compositores clásicos. Él y Mark parecían compartir bromas internas y referencias que nadie más entendía. Julia notó que Mark parecía tanto relajado como tenso en presencia de David – una contradicción que no podía descifrar del todo.

A medida que avanzaba la noche, Julia escuchó fragmentos de una conversación en voz baja entre Mark y David en el pasillo. "No deberías haber venido", susurró Mark. "Teníamos un acuerdo".

"Las circunstancias cambian", respondió David. "No estaría aquí si no fuera importante".

Cuando el último invitado se había marchado, quedando solo los tres, David finalmente explicó su visita inesperada. Abrió su billetera y sacó una fotografía descolorida que hizo que Mark se quedara inmóvil. Julia miró por encima del hombro de su esposo y vio una versión más joven de Mark parado junto a David, ambos vistiendo uniformes militares que ella no reconocía.

"Creo que es hora de que le cuentes a tu esposa lo que pasó en Sarajevo", dijo David en voz baja. "Porque está a punto de volverse relevante de nuevo".

El rostro de Mark palideció mientras se volvía hacia Julia. "Hay algunas cosas sobre mi pasado que nunca he compartido contigo", comenzó. "Antes de conocernos, tuve otra vida – una que pensé que había dejado atrás para siempre".`,
    word_translations: {
      dinner: "cena",
      party: "fiesta",
      going: "saliendo",
      exactly: "exactamente",
      planned: "planeado",
      table: "mesa",
      set: "puesta",
      elegant: "elegante",
      china: "porcelana",
      crystal: "cristal",
      glasses: "copas",
      sparkled: "brillaban",
      under: "bajo",
      chandelier: "lámpara de araña",
      aroma: "aroma",
      signature: "especial",
      roast: "asado",
      filled: "llenaba",
      apartment: "apartamento",
      friends: "amigos",
      gathered: "reunidos",
      around: "alrededor",
      engaged: "participaban",
      lively: "animada",
      conversation: "conversación",
      recent: "recientes",
      travels: "viajes",
      career: "profesionales",
      developments: "desarrollos",
      just: "justo",
      about: "a punto",
      serve: "servir",
      dessert: "postre",
      doorbell: "timbre",
      rang: "sonó",
      exchanged: "intercambió",
      puzzled: "desconcertada",
      glance: "mirada",
      husband: "esposo",
      expecting: "esperaban",
      anyone: "nadie",
      else: "más",
      excused: "disculpó",
      answer: "abrir",
      door: "puerta",
      moment: "momento",
      later: "después",
      returned: "regresó",
      stranger: "desconocido",
      tall: "alto",
      man: "hombre",
      "rain-soaked": "empapada por la lluvia",
      clothes: "ropa",
      apologetic: "disculpa",
      smile: "sonrisa",
      everyone: "todos",
      announced: "anunció",
      slight: "ligera",
      hesitation: "vacilación",
      old: "viejo",
      friend: "amigo",
      happened: "pasaba",
      neighborhood: "vecindario",
      guests: "invitados",
      murmured: "murmuraron",
      polite: "corteses",
      greetings: "saludos",
      sense: "sentir",
      curiosity: "curiosidad",
      never: "nunca",
      heard: "oído",
      mention: "mencionar",
      named: "llamado",
      before: "antes",
      served: "servía",
      coffee: "café",
      chocolate: "chocolate",
      mousse: "mousse",
      observed: "observó",
      newcomer: "recién llegado",
      carefully: "cuidadosamente",
      something: "algo",
      familiar: "familiar",
      features: "rasgos",
      though: "aunque",
      place: "ubicar",
      might: "podría",
      seen: "visto",
      spoke: "habló",
      little: "poco",
      first: "principio",
      turned: "giró",
      music: "música",
      revealed: "demostró",
      surprisingly: "sorprendente",
      knowledgeable: "conocimiento",
      classical: "clásicos",
      composers: "compositores",
      seemed: "parecían",
      share: "compartir",
      inside: "internas",
      jokes: "bromas",
      references: "referencias",
      understood: "entendía",
      noticed: "notó",
      appeared: "parecía",
      relaxed: "relajado",
      tense: "tenso",
      presence: "presencia",
      contradiction: "contradicción",
      quite: "del todo",
      decipher: "descifrar",
      evening: "noche",
      progressed: "avanzaba",
      overheard: "escuchó",
      fragments: "fragmentos",
      hushed: "voz baja",
      hallway: "pasillo",
      "shouldn't": "no deberías",
      come: "venido",
      whispered: "susurró",
      agreement: "acuerdo",
      circumstances: "circunstancias",
      change: "cambian",
      replied: "respondió",
      "wouldn't": "no estaría",
      important: "importante",
      last: "último",
      departed: "marchado",
      leaving: "quedando",
      three: "tres",
      finally: "finalmente",
      explained: "explicó",
      unexpected: "inesperada",
      visit: "visita",
      opened: "abrió",
      wallet: "billetera",
      removed: "sacó",
      faded: "descolorida",
      photograph: "fotografía",
      made: "hizo",
      freeze: "quedara inmóvil",
      place: "lugar",
      peered: "miró",
      over: "por encima",
      shoulder: "hombro",
      saw: "vio",
      younger: "más joven",
      version: "versión",
      standing: "parado",
      beside: "junto a",
      both: "ambos",
      wearing: "vistiendo",
      military: "militares",
      uniforms: "uniformes",
      recognize: "reconocía",
      think: "creo",
      time: "hora",
      told: "cuentes",
      wife: "esposa",
      happened: "pasó",
      because: "porque",
      become: "volverse",
      relevant: "relevante",
      again: "de nuevo",
      face: "rostro",
      paled: "palideció",
      turned: "volvía",
      towards: "hacia",
      things: "cosas",
      past: "pasado",
      shared: "compartido",
      before: "antes",
      met: "conocernos",
      another: "otra",
      life: "vida",
      thought: "pensé",
      left: "dejado",
      behind: "atrás",
      forever: "para siempre",
      the: "el-la"
    },
    read_time: 10,
    image_url: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    title: "The Ancient Manuscript",
    title_es: "El Manuscrito Antiguo",
    level: "c1",
    content: `Professor Eleanor Bennett carefully unfolded the fragile parchment, her gloved hands trembling slightly with anticipation. After three decades of searching, the elusive Voynich manuscript fragment had finally surfaced in a private collection in Prague. The university had spared no expense in acquiring it for their research department, and Eleanor had been granted the privilege of being the first scholar to examine it in modern times.

The manuscript's cryptic symbols and illustrations had confounded linguists and cryptographers for centuries. Some dismissed it as an elaborate hoax, while others believed it contained ancient wisdom encoded to protect it from falling into the wrong hands. Eleanor had dedicated her career to deciphering its mysteries, developing a controversial theory that connected the manuscript to a forgotten pre-Columbian civilization.

As she scrutinized the yellowed page under the specialized light of her laboratory, Eleanor noticed something peculiar about the ink patterns that previous researchers had overlooked. Under ultraviolet illumination, previously invisible markings appeared between the lines of the main text – a second layer of information hidden from casual observation.

"Dr. Bennett, the carbon dating results are ready," announced her research assistant, Michael, as he entered the climate-controlled room. "The parchment dates back to approximately 1420, consistent with the other known fragments."

Eleanor nodded without looking up, completely absorbed in her examination. "There's something here, Michael. Look at these markings – they only appear under UV light. It's as if the author created two parallel texts, one visible and one hidden."

Michael leaned in, adjusting his glasses. "That would explain why no one has been able to make sense of it. They were only seeing half the information."

Over the following weeks, Eleanor and her team worked tirelessly, photographing and analyzing every millimeter of the manuscript fragment. They developed a specialized algorithm to correlate the visible and hidden texts, gradually revealing patterns that had eluded scholars for generations.

The breakthrough came on a rainy Tuesday morning. Eleanor was cross-referencing the symbols with ancient Mesoamerican glyphs when the connection suddenly became clear. The manuscript wasn't written in a single unknown language – it was a sophisticated translation key between two extinct languages, neither of which had been fully documented in modern linguistics.

"It's not a text to be read," she whispered to herself. "It's a Rosetta Stone for something else entirely."

As Eleanor began to apply her discovery to the full corpus of known Voynich fragments, she uncovered references to astronomical events, detailed botanical information that predated European knowledge, and most intriguingly, coordinates to a location deep in the Yucatán Peninsula that had never been excavated.

What she couldn't possibly know was that her breakthrough would soon attract attention from individuals who had been monitoring research on the manuscript for generations – people who had very different ideas about how its secrets should be used.`,
    content_es: `La profesora Eleanor Bennett desdobló cuidadosamente el frágil pergamino, sus manos enguantadas temblando ligeramente con anticipación. Después de tres décadas de búsqueda, el esquivo fragmento del manuscrito Voynich finalmente había aparecido en una colección privada en Praga. La universidad no había escatimado gastos en adquirirlo para su departamento de investigación, y a Eleanor se le había concedido el privilegio de ser la primera erudita en examinarlo en tiempos modernos.

Los símbolos e ilustraciones crípticos del manuscrito habían confundido a lingüistas y criptógrafos durante siglos. Algunos lo descartaban como una elaborada farsa, mientras que otros creían que contenía sabiduría antigua codificada para protegerla de caer en manos equivocadas. Eleanor había dedicado su carrera a descifrar sus misterios, desarrollando una teoría controvertida que conectaba el manuscrito con una civilización precolombina olvidada.

Mientras escrutaba la página amarillenta bajo la luz especializada de su laboratorio, Eleanor notó algo peculiar sobre los patrones de tinta que investigadores anteriores habían pasado por alto. Bajo iluminación ultravioleta, marcas previamente invisibles aparecieron entre las líneas del texto principal – una segunda capa de información oculta a la observación casual.

"Dra. Bennett, los resultados de la datación por carbono están listos", anunció su asistente de investigación, Michael, al entrar en la sala de clima controlado. "El pergamino se remonta aproximadamente al año 1420, consistente con los otros fragmentos conocidos".

Eleanor asintió sin levantar la vista, completamente absorta en su examen. "Hay algo aquí, Michael. Mira estas marcas – solo aparecen bajo luz UV. Es como si el autor hubiera creado dos textos paralelos, uno visible y uno oculto".

Michael se inclinó, ajustando sus gafas. "Eso explicaría por qué nadie ha podido entenderlo. Solo estaban viendo la mitad de la información".

Durante las siguientes semanas, Eleanor y su equipo trabajaron incansablemente, fotografiando y analizando cada milímetro del fragmento del manuscrito. Desarrollaron un algoritmo especializado para correlacionar los textos visibles y ocultos, revelando gradualmente patrones que habían eludido a los eruditos durante generaciones.

El avance llegó en una lluviosa mañana de martes. Eleanor estaba cruzando referencias de los símbolos con glifos mesoamericanos antiguos cuando la conexión de repente se volvió clara. El manuscrito no estaba escrito en un solo idioma desconocido – era una sofisticada clave de traducción entre dos idiomas extintos, ninguno de los cuales había sido completamente documentado en la lingüística moderna.

"No es un texto para ser leído", susurró para sí misma. "Es una Piedra Rosetta para algo completamente distinto".

Cuando Eleanor comenzó a aplicar su descubrimiento al corpus completo de fragmentos conocidos de Voynich, descubrió referencias a eventos astronómicos, información botánica detallada que precedía al conocimiento europeo y, lo más intrigante, coordenadas a una ubicación profunda en la península de Yucatán que nunca había sido excavada.

Lo que ella no podía saber era que su avance pronto atraería la atención de individuos que habían estado monitoreando la investigación sobre el manuscrito durante generaciones – personas que tenían ideas muy diferentes sobre cómo deberían usarse sus secretos.`,
    word_translations: {
      professor: "profesora",
      carefully: "cuidadosamente",
      unfolded: "desdobló",
      fragile: "frágil",
      parchment: "pergamino",
      gloved: "enguantadas",
      hands: "manos",
      trembling: "temblando",
      slightly: "ligeramente",
      anticipation: "anticipación",
      after: "después",
      three: "tres",
      decades: "décadas",
      searching: "búsqueda",
      elusive: "esquivo",
      manuscript: "manuscrito",
      fragment: "fragmento",
      finally: "finalmente",
      surfaced: "aparecido",
      private: "privada",
      collection: "colección",
      university: "universidad",
      spared: "escatimado",
      expense: "gastos",
      acquiring: "adquirirlo",
      research: "investigación",
      department: "departamento",
      granted: "concedido",
      privilege: "privilegio",
      first: "primera",
      scholar: "erudita",
      examine: "examinarlo",
      modern: "modernos",
      times: "tiempos",
      cryptic: "crípticos",
      symbols: "símbolos",
      illustrations: "ilustraciones",
      confounded: "confundido",
      linguists: "lingüistas",
      cryptographers: "criptógrafos",
      centuries: "siglos",
      dismissed: "descartaban",
      elaborate: "elaborada",
      hoax: "farsa",
      believed: "creían",
      contained: "contenía",
      ancient: "antigua",
      wisdom: "sabiduría",
      encoded: "codificada",
      protect: "protegerla",
      falling: "caer",
      wrong: "equivocadas",
      hands: "manos",
      dedicated: "dedicado",
      career: "carrera",
      deciphering: "descifrar",
      mysteries: "misterios",
      developing: "desarrollando",
      controversial: "controvertida",
      theory: "teoría",
      connected: "conectaba",
      forgotten: "olvidada",
      "pre-Columbian": "precolombina",
      civilization: "civilización",
      scrutinized: "escrutaba",
      yellowed: "amarillenta",
      page: "página",
      specialized: "especializada",
      light: "luz",
      laboratory: "laboratorio",
      noticed: "notó",
      peculiar: "peculiar",
      ink: "tinta",
      patterns: "patrones",
      previous: "anteriores",
      researchers: "investigadores",
      overlooked: "pasado por alto",
      ultraviolet: "ultravioleta",
      illumination: "iluminación",
      previously: "previamente",
      invisible: "invisibles",
      markings: "marcas",
      appeared: "aparecieron",
      between: "entre",
      lines: "líneas",
      main: "principal",
      text: "texto",
      second: "segunda",
      layer: "capa",
      information: "información",
      hidden: "oculta",
      casual: "casual",
      observation: "observación",
      carbon: "carbono",
      dating: "datación",
      results: "resultados",
      ready: "listos",
      announced: "anunció",
      assistant: "asistente",
      entered: "entrar",
      "climate-controlled": "clima controlado",
      room: "sala",
      dates: "remonta",
      back: "remonta",
      approximately: "aproximadamente",
      consistent: "consistente",
      known: "conocidos",
      fragments: "fragmentos",
      nodded: "asintió",
      without: "sin",
      looking: "levantar",
      completely: "completamente",
      absorbed: "absorta",
      examination: "examen",
      something: "algo",
      here: "aquí",
      look: "mira",
      these: "estas",
      only: "solo",
      appear: "aparecen",
      under: "bajo",
      light: "luz",
      author: "autor",
      created: "creado",
      parallel: "paralelos",
      texts: "textos",
      visible: "visible",
      leaned: "inclinó",
      adjusting: "ajustando",
      glasses: "gafas",
      explain: "explicaría",
      able: "podido",
      make: "entenderlo",
      sense: "entenderlo",
      seeing: "viendo",
      half: "mitad",
      following: "siguientes",
      weeks: "semanas",
      team: "equipo",
      worked: "trabajaron",
      tirelessly: "incansablemente",
      photographing: "fotografiando",
      analyzing: "analizando",
      every: "cada",
      millimeter: "milímetro",
      developed: "desarrollaron",
      algorithm: "algoritmo",
      correlate: "correlacionar",
      gradually: "gradualmente",
      revealing: "revelando",
      patterns: "patrones",
      eluded: "eludido",
      scholars: "eruditos",
      generations: "generaciones",
      breakthrough: "avance",
      came: "llegó",
      rainy: "lluviosa",
      Tuesday: "martes",
      morning: "mañana",
      "cross-referencing": "cruzando referencias",
      ancient: "antiguos",
      Mesoamerican: "mesoamericanos",
      glyphs: "glifos",
      connection: "conexión",
      suddenly: "de repente",
      became: "volvió",
      clear: "clara",
      written: "escrito",
      single: "solo",
      unknown: "desconocido",
      language: "idioma",
      sophisticated: "sofisticada",
      translation: "traducción",
      key: "clave",
      extinct: "extintos",
      languages: "idiomas",
      neither: "ninguno",
      fully: "completamente",
      documented: "documentado",
      modern: "moderna",
      linguistics: "lingüística",
      read: "leído",
      whispered: "susurró",
      herself: "sí misma",
      Rosetta: "Rosetta",
      Stone: "Piedra",
      something: "algo",
      else: "distinto",
      entirely: "completamente",
      began: "comenzó",
      apply: "aplicar",
      discovery: "descubrimiento",
      full: "completo",
      corpus: "corpus",
      uncovered: "descubrió",
      references: "referencias",
      astronomical: "astronómicos",
      events: "eventos",
      detailed: "detallada",
      botanical: "botánica",
      information: "información",
      predated: "precedía",
      European: "europeo",
      knowledge: "conocimiento",
      intriguingly: "intrigante",
      coordinates: "coordenadas",
      location: "ubicación",
      deep: "profunda",
      peninsula: "península",
      never: "nunca",
      excavated: "excavada",
      possibly: "podía",
      know: "saber",
      would: "atraería",
      soon: "pronto",
      attract: "atraería",
      attention: "atención",
      individuals: "individuos",
      monitoring: "monitoreando",
      research: "investigación",
      generations: "generaciones",
      people: "personas",
      different: "diferentes",
      ideas: "ideas",
      secrets: "secretos",
      used: "usarse",
      the: "el-la"
    },
    read_time: 12,
    image_url: "https://via.placeholder.com/100",
  },
];

export async function getStoriesByLevel(level: string): Promise<Story[]> {
  // Simulate a database query delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return sampleStories.filter((story) => story.level === level);
}

export async function getStoryById(id: number): Promise<Story | undefined> {
  // Simulate a database query delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return sampleStories.find((story) => story.id === id);
}
