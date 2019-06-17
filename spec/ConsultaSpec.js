describe('Consulta', () => {

    var guilherme;

    beforeEach(() => {
        guilherme = new PacienteBuilder().constroi();
    });

    describe('Consultas do tipo retorno', () => {
        it('Nao deve cobrar nada se for um retorno', () => {
            var consulta = new Consulta(guilherme, [], true, true);
            expect(consulta.preco()).toEqual(0);
        }); 
    });

    describe('Consultas com Procedimentos', () => {
        it('deve cobrar 25 por cada procedimento comum', () => {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);
            expect(consulta.preco()).toEqual(50);
        });
    
        it('deve cobrar preco especifico dependendo do procedimento', () => {
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });
});