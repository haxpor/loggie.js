describe("loggiejs's core tests", function() {
    
    it("should have global text's value equal to 'test'", function() {
        expect(loggie.globalText).toEqual("Test");
    });

    it("should return 'Hello World' from returnHelloWorld function", function() {
        expect(loggie.util.returnHelloWorld()).toEqual("Hello World");
    });

    it("should validate promise-returned member function", function(done) {
    	loggie.util.returnPromise()
    		.then((result) => {
    			done();
    		}, (e) => {
    			console.log(e);
    		})
    });

    it("should have 'Dynamic Text' as value of dynamicText property", function() {
        expect(loggie.dynamicText).toEqual("Dynamic Text");
    });
});
