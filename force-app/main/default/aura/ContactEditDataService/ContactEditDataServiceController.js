({
    handleSaveContact : function(component, event, helper) {
        helper.saveContact(component, event, helper);
    },
     
    handaleRecordUpdated : function(component, event, helper) {
        helper.recordUpdated(component, event, helper);
    },
     
    handaleCancel : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
})