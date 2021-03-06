"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on('CHANGE_EVENT', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('CHANGE_EVENT', callback);
    },
    emitChange: function() {
        this.emit('CHANGE_EVENT')
    },
    getAllAuthors: function() {
        return _authors;
    },
    getAuthorById: function(id) {
        return _authors.find(x=>x.id === id);
    }
})

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author)
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            _authors.push(action.author)
            AuthorStore.emitChange();            
            break;
        default:
            //Do nothing!
    }
});

module.exports = AuthorStore;