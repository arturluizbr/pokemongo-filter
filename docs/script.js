$(document).ready(function() {
    // Initialize Semantic UI dropdown
    $('.ui.dropdown').dropdown();

    // Function to generate search criteria
    function generateSearchCriteria() {
        const type = $('#type').val();
        const minCP = $('#minCP').val();
        const maxCP = $('#maxCP').val();
        
        let criteria = '';
        
        if (type !== 'all') {
            criteria += `type:${type} `;
        }
        
        if (minCP !== '') {
            criteria += `cp:${minCP}-${maxCP} `;
        }
        
        $('#searchCriteria').val(criteria.trim());
    }
    
    // Trigger the generation function whenever any form element changes
    $('select, input').on('change', function() {
        generateSearchCriteria();
    });
    
    // Click event for the copy button
    $('#copyButton').on('click', function() {
        $('#searchCriteria').select();
        document.execCommand('copy');
        alert('Search criteria copied to clipboard!');
    });
});
