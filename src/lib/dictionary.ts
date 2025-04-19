'use server';

/**
 * @fileOverview Manages a global dictionary of words and translations.
 *
 * Exports:
 *   - Dictionary: A class for handling word translations with case-insensitivity.
 *   - globalDictionary: An instance of the Dictionary class used to store all words and translations.
 */



class Dictionary {
  private translations: { [key: string]: string } = {};

  constructor(initialTranslations: { [key: string]: string } = {}) {
    this.translations = Object.keys(initialTranslations).reduce<{ [key: string]: string }>(
      (acc, key) => {
        acc[key.toLowerCase()] = initialTranslations[key];
        return acc;
      },
      {}
    );
  }

  /**
   * Gets the translation of a word, ignoring case.
   * @param word The word to translate.
   * @returns The translation of the word, or undefined if not found.
   */
  getTranslation(word: string): string | undefined {
    return this.translations[word.toLowerCase()];
  }

  /**
   * Adds a new word and translation to the dictionary, or updates an existing one.
   * @param word The word to add or update.
   * @param translation The translation of the word.
   */
  addTranslation(word: string, translation: string): void {
    this.translations[word.toLowerCase()] = translation;
  }

  /**
   * Loads multiple translations into the dictionary.
   * @param translations An object containing words and their translations.
   */
  loadTranslations(translations: { [key: string]: string }): void {
    Object.keys(translations).forEach(word => {
      this.addTranslation(word, translations[word]);
    });
  }

  /**
   * Gets all translations in the dictionary.
   * @returns An object containing all words and their translations.
   */
  getAllTranslations(): { [key: string]: string } {
    return {...this.translations};
  }
}

// Initialize a global dictionary instance
const initialGlobalDictionary: { [key: string]: string } = {
  // Add common words here
  the: 'el/la',
  is: 'es',
  my: 'mi',
  i: 'yo',
  me: 'mi',
  and: 'y',
  a: 'un/una',
  to: 'a',
};

const globalDictionary = new Dictionary(initialGlobalDictionary);

export { Dictionary, globalDictionary };

    