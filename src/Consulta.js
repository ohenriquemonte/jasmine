function Consulta(paciente, procedimentos, particular, retorno, data) {
    var clazz = {
        preco: () => {
            if (retorno) return 0;

            var precoFinal = 0;
            procedimentos.forEach(procedimento => {
                if ("raio-x" == procedimento) precoFinal += 55;
                else if ("gesso" == procedimento) precoFinal += 32
                else precoFinal += 25
            });

            if (particular) precoFinal *= 2;

            return precoFinal;
        },
        getNome: () => {
            return paciente;
        },
        getProcedimentos: () => {
            return procedimentos;
        },
        isParticular: () => {
            return particular;
        },
        isRetorno: () => {
            return retorno;
        },
        getData: () => {
            return data;
        }
    };
    return clazz;
}