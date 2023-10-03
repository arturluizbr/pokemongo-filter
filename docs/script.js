$(document).ready(function() {
    function generateSearchCriteria() {
        const ruleSets = [];

        // Iterar através de todos os conjuntos de campos
        $('.ruleSet').each(function() {
            const type = $(this).find('.form-control#type').val();
            const minCP = $(this).find('.form-control#minCP').val();
            const maxCP = $(this).find('.form-control#maxCP').val();

            // Construir a regra para este conjunto
            let rule = '';
            if (type !== 'all') {
                rule += `type:${type} `;
            }
            if (minCP !== '') {
                rule += `cp:${minCP}-${maxCP} `;
            }

            ruleSets.push(rule.trim());
        });

        // Unir todas as regras dos conjuntos
        const criteria = ruleSets.join(', ');

        $('#searchCriteria').val(criteria);
    }

    $('#generateButton').on('click', function() {
        generateSearchCriteria();
    });

    // Adicionar um novo conjunto de campos quando o botão "Add Rule Set" é clicado
    $('#addRuleSetButton').on('click', function() {
        const newRuleSet = $('.ruleSet:first').clone(); // Clona o primeiro conjunto
        newRuleSet.find('select, input').val(''); // Limpa os valores dos campos clonados
        $('#ruleSets').append(newRuleSet); // Adiciona o conjunto clonado ao DOM
    });
});
