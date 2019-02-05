(function($){
    var $parentID = $('#parent_id');
    var originalParentID;
    if($parentID.length){
        originalParentID = $parentID.val();
    }
    $('#parent_id').on('change', function(e){
        var $t = $(this).next('.crm-parent-change-warning');
        if($t.length === 0){
            $(this).after('<p class="crm-parent-change-warning">Warning: you are changing the Parent, which changes the URL of this Page. Save to continue, only if you wish to do this.</p>');
            $t = $(this).next('.crm-parent-change-warning');
        }
        if(originalParentID === $parentID.val()){
            $t.remove();
        }
    });
})(jQuery);