import should from 'should';
import loadManager from '../index.js';

export default function (multipleScripts, singleScript) {

    describe('Scripts', function() {

        describe('#setScripts()', function() {
            it('should set scripts without error', function(done) {
                console.log(loadManager);
                var manager = new loadManager;
                // test before
                manager.getScripts().should.have.length(0);

                // set scripts
                manager.setScripts(multipleScripts);

                // test after
                manager.getScripts().should.have.length(multipleScripts.length);
                manager.getScripts()[0].key.should.be.exactly(multipleScripts[0].key);

                done();
        });
        });

        describe('#addScript()', function() {
            it('should add script without error', function(done) {
                var manager = new loadManager();
                // test before
                manager.getScripts().should.have.length(0);

                // set scripts
                let script = singleScript;
                script.trouble = 'maker';

                manager.addScript(script);

                // test after
                manager.getScripts().should.have.length(1);
                manager.getScripts()[0].key.should.be.exactly(script.key);
                should.not.exist(manager.getScripts()[0].trouble);

                done();
        });
        });

        describe('#clearScripts()', function() {
            it('should clear all scripts without error', function(done) {
                var manager = new loadManager();
                // set scripts
                manager.setScripts(multipleScripts);

                // test it 
                manager.getScripts().should.have.length(multipleScripts.length);

                // clear scripts
                manager.clearScripts();

                // test after
                manager.getScripts().should.have.length(0);
                
                done();
        });
        });

        describe('#getScripts()', function() {
            it('should get scripts related to the level without error', function(done) {
                var manager = new loadManager();
                // set scripts
                manager.setScripts(multipleScripts);
                manager.addScript(singleScript);

                // test it 
                manager.getScripts().should.have.length(3); 
                manager.getScripts(0).should.have.length(0);
                manager.getScripts(1).should.have.length(1);
                manager.getScripts(2).should.have.length(3);
                manager.getScripts(20).should.have.length(3);
                
                done();
        });
        });
    });
}