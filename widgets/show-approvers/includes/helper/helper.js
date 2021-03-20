var TicketApproversHelper = Class.create();
TicketApproversHelper.prototype = {
    initialize: function() {
		this.PERSISTENCE = new TicketApproversPersistence();
    },
	
	getApprovals: function (id){
		return this.PERSISTENCE.getApprovals(id);
	},

    type: 'TicketApproversHelper'
};
