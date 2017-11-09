
$('#calendar').datepicker({
    format: "dd/mm/yyyy",
    weekStart: 1,
    startView: 0,
    maxViewMode: 3,
    minViewMode: 0,
    autoclose: true,
    language: "es"
 });
 
 $('#calendar2').datepicker({
    format: "dd/mm/yyyy",
    weekStart: 1,
    startView: 0,
    maxViewMode: 3,
    minViewMode: 0,
    autoclose: true,
    language: "es"
 });

function queryParams() {
    return {
        type: 'owner',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
        page: 1
    };
}