var TicketApproversPersistence = Class.create();
TicketApproversPersistence.prototype = {
    initialize: function() {
    },
	
	getApprovals: function(id){
		var response = {
			approvers: [],
			groups: []
		};
		
		var grApp = new GlideRecord('sysapproval_approver');
		grApp.addQuery('sysapproval', id);
		grApp.query();
		while(grApp.next()){
			if(grApp.group.getValue()){
				this._defineGroup(grApp, response);
			} else {
				this._defineApprover(grApp, response);
			}
		}
		return response;
	},
	
	_defineGroup: function(gr, response){
		var hasGroup = null;
		for(var i = 0; i<response.groups.length; i++){
			if(response.groups[i].name == gr.group.assignment_group.getDisplayValue()){
				hasGroup = i;
				break;
			}
		}
		
		if(!hasGroup && hasGroup !== 0){
			var obj = {
				open: false,
				name: gr.group.assignment_group.getDisplayValue(),
				state: {
					displayValue: gr.group.approval.getDisplayValue(),
					value: gr.group.approval.getValue()
				},
				updated: gr.group.sys_updated_on.getDisplayValue(),
				approvals: [{
					approver: {
						displayValue: gr.approver.getDisplayValue(),
						value: gr.approver.getValue()
					},
					state: {
						displayValue: gr.state.getDisplayValue(),
						value: gr.state.getValue()
					},
					updated: gr.sys_updated_on.getDisplayValue()
				}]
			};
			response.groups.push(obj);
		} else {
			response.groups[hasGroup].approvals.push({
				approver: {
					displayValue: gr.approver.getDisplayValue(),
					value: gr.approver.getValue()
				},
				state: {
					displayValue: gr.state.getDisplayValue(),
					value: gr.state.getValue()
				},
				updated: gr.sys_updated_on.getDisplayValue()
			});
		}
		
	},
	
	_defineApprover: function(gr, response){
		response.approvers.push({
			approver: {
				displayValue: gr.approver.getDisplayValue(),
				value: gr.approver.getValue()
			},
			state: {
				displayValue: gr.state.getDisplayValue(),
				value: gr.state.getValue()
			},
			updated: gr.sys_updated_on.getDisplayValue()
		});
	},

    type: 'TicketApproversPersistence'
};
