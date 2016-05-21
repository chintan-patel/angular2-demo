(function () {
    System.config({
        transpiler: 'typescript',
        typescriptOptions: { emitDecoratorMetadata: true },
        packages: {
            app: {
                format: 'register',
                defaultExtension: 'js'
            }
        }
    });
})(this);
