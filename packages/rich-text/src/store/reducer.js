/**
 * External dependencies
 */
import { keyBy, omit } from 'lodash';

/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 * Reducer managing the alignment types
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function customAlignmentTypes( state = {}, action ) {
	switch ( action.type ) {
		case 'ADD_CUSTOM_ALIGNMENT_TYPES':
			return {
				...state,
				...keyBy( action.customAlignmentTypes, 'name' ),
			};
		case 'REMOVE_CUSTOM_ALIGNMENT_TYPES':
			return omit( state, action.names );
	}

	return state;
}

/**
 * Reducer managing the format types
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
export function formatTypes( state = {}, action ) {
	switch ( action.type ) {
		case 'ADD_FORMAT_TYPES':
			return {
				...state,
				...keyBy( action.formatTypes, 'name' ),
			};
		case 'REMOVE_FORMAT_TYPES':
			return omit( state, action.names );
	}

	return state;
}

export default combineReducers( { customAlignmentTypes, formatTypes } );
