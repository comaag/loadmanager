import should from 'should';
import loadManager from '../index.js';

export default function (scripts) {

    describe('Level & Load', function() {

        describe('#setLevel()', function() {
            it('should set level and cookie without error', function(done) {
                var manager = new loadManager;
                // set scripts
                manager.setScripts(scripts);

                manager.getLevel().should.be.equal(0);

                manager.setLevel(1);

                manager.getLevel().should.be.equal(1);

                done();
            });
        });

        describe('#load()', function() {
            it('should load scripts without error', function(done) {
                var manager = new loadManager;

                // set scripts
                manager.setScripts(scripts);

                manager.load(1);

                should.exist(document.querySelector('#cdn-jquery-1'));

                should.not.exist(document.querySelector('#cdn-jquery-2'))

                done();
            });
        });
    });
}