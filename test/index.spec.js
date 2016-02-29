/* global expect */
/* eslint padded-blocks: 0*/
/* eslint no-unused-expressions: 0*/
/* eslint max-nested-callbacks: 0*/
import chai from 'chai';
const expect = chai.expect;

import utilsModule from '../src/components/utils';

describe('common libraries', () => {

    it('should export utilsModule libraries', () => {
        expect(typeof utilsModule).to.eql('object');
    });
});
