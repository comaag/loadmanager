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

        describe('#on(loaded)', function() {
            it('should wait until the script is loaded without error', function(done) {
                var manager = new loadManager;

                // set scripts
                manager.setScripts(scripts);

                manager.on('loaded', (script) => {
                    done();
                });

                manager.on('error', (script) => {
                    done(new Error('loaded failed'));
                });

                manager.load(1);
            });
        });

        describe('#on(complete)', function() {
            it('should wait until all scripts are loaded without error', function(done) {
                var manager = new loadManager;

                // set scripts
                manager.setScripts(scripts);

                manager.on('complete', (script) => {
                    done();
                });

                manager.load(1);
            });
        });

        describe('#whenever (listen before loaded)', function() {
            it('should wait until the requested script is loaded without error', function(done) {
                var manager = new loadManager;

                // set scripts
                manager.setScripts(scripts);

                manager.whenever('cdn-jquery-1').then(() => {
                    done();
                });

                manager.load(1);
            });
        });

        describe('#whenever (listen after the script is loaded)', function() {
            it('should execute immediatly without error', function(done) {
                var manager = new loadManager;

                // set scripts
                manager.setScripts(scripts);

                manager.on('complete', () => {
                    manager.whenever('cdn-jquery-1').then(() => {
                        done();
                    });
                })
                
                manager.load(1);
            });
        });
    });
}