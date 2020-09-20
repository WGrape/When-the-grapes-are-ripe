const path = require("path");
const app = require("../config/app.js");

const vocabularyService = require( path.join( app.APP_PATH , "./services/vocabularyService.js" ) );
const phraseService = require( path.join( app.APP_PATH , "./services/phraseService.js" ) );

module.exports = {

    getVocabulary: vocabularyService.getVocabulary,
    addWord: vocabularyService.addWord,
    deleteWord: vocabularyService.deleteWord,

    getPhrase: phraseService.getPhrase,
    addPhrase: phraseService.addPhrase,
    deletePhrase: phraseService.deletePhrase,
};

